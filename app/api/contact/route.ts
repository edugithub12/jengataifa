// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/database';
import { ContactFormData, ApiResponse, MySQLResult } from '@/types/database';

async function sendEmailWithResend(emailData: {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    messageId: number;
}) {
    try {
        console.log('📧 [RESEND] Starting email process...');

        if (!process.env.RESEND_API_KEY || !process.env.NOTIFICATION_EMAIL) {
            console.log('❌ [RESEND] Resend configuration missing');
            return null;
        }

        console.log('📧 [RESEND] Sending email to:', process.env.NOTIFICATION_EMAIL);

        const emailPayload = {
            from: 'Construction Company <onboarding@resend.dev>',
            to: [process.env.NOTIFICATION_EMAIL],
            subject: `New Contact Message from ${emailData.name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${emailData.name}</p>
            <p><strong>Email:</strong> ${emailData.email}</p>
            <p><strong>Phone:</strong> ${emailData.phone || 'Not provided'}</p>
            <p><strong>Service:</strong> ${emailData.service || 'Not specified'}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb;">
              ${emailData.message.replace(/\n/g, '<br>')}
            </div>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Database ID:</strong> ${emailData.messageId}</p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from your website contact form.
          </p>
        </div>
      `,
        };

        console.log('📧 [RESEND] Making API request to Resend...');

        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailPayload),
        });

        console.log('📧 [RESEND] Response status:', response.status);

        if (!response.ok) {
            const errorText = await response.text();
            console.error('❌ [RESEND] API request failed:');
            console.error('📧 [RESEND] Status:', response.status);
            console.error('📧 [RESEND] Error response:', errorText);
            return null;
        }

        const data = await response.json();
        console.log('✅ [RESEND] Email sent successfully!');
        console.log('📧 [RESEND] Email ID:', data.id);

        return data;

    } catch (error: unknown) {
        console.error('❌ [RESEND] Unexpected error:');
        if (error instanceof Error) {
            console.error('📧 [RESEND] Error message:', error.message);
            console.error('📧 [RESEND] Error stack:', error.stack);
        } else {
            console.error('📧 [RESEND] Unknown error:', error);
        }
        return null;
    }
}

export async function POST(request: NextRequest): Promise<NextResponse<ApiResponse>> {
    let connection;
    try {
        const body: ContactFormData = await request.json();
        const { name, email, phone, service, message } = body;

        console.log('📨 [API] Received contact form submission:', { name, email });

        // Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Validation failed',
                    error: 'Name, email, and message are required'
                },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Validation failed',
                    error: 'Please provide a valid email address'
                },
                { status: 400 }
            );
        }

        // Get database connection
        connection = await pool.getConnection();

        // Insert into database
        const [result] = await connection.execute(
            `INSERT INTO contact_messages (name, email, phone, service, message) 
       VALUES (?, ?, ?, ?, ?)`,
            [name, email, phone || null, service || null, message]
        );

        const insertResult = result as MySQLResult;
        const messageId = insertResult.insertId;

        console.log('💾 [API] Message saved to database with ID:', messageId);

        // Send email with Resend (non-blocking)
        console.log('🔄 [API] Starting Resend email process...');
        sendEmailWithResend({
            name,
            email,
            phone: phone || '',
            service: service || '',
            message,
            messageId
        }).then((result) => {
            if (result) {
                console.log('✅ [API] Resend email process completed successfully');
            } else {
                console.log('⚠️ [API] Resend email process failed - check logs above');
            }
        });

        // Return success immediately (email is background process)
        return NextResponse.json({
            success: true,
            message: 'Message sent successfully',
            data: { id: messageId }
        }, { status: 201 });

    } catch (error: unknown) {
        console.error('❌ [API] Database error:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'Server error',
                error: 'Internal server error. Please try again later.'
            },
            { status: 500 }
        );
    } finally {
        if (connection) connection.release();
    }
}

// GET endpoint for testing configuration
export async function GET(): Promise<NextResponse> {
    // Test Resend API key
    let resendTest = 'Not configured';

    if (process.env.RESEND_API_KEY) {
        try {
            const response = await fetch('https://api.resend.com/domains', {
                headers: {
                    'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                },
            });

            if (response.ok) {
                resendTest = 'API key is valid';
            } else {
                resendTest = `API key error: ${response.status}`;
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                resendTest = `API test failed: ${error.message}`;
            } else {
                resendTest = `API test failed: Unknown error`;
            }
        }
    }

    return NextResponse.json({
        success: true,
        message: 'Contact API configuration test',
        data: {
            resend_configured: !!process.env.RESEND_API_KEY,
            resend_test: resendTest,
            notification_email: process.env.NOTIFICATION_EMAIL,
            database_connected: true
        }
    });
}