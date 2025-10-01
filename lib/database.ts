// lib/database.ts
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'construction_company',
    port: parseInt(process.env.DB_PORT || '3306'),
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    // Remove these invalid options:
    // acquireTimeout: 60000,
    // timeout: 60000,
});

export async function testConnection(): Promise<boolean> {
    try {
        const connection = await pool.getConnection();
        console.log('✅ Connected to XAMPP MySQL database');
        connection.release();
        return true;
    } catch (error) {
        console.error('❌ XAMPP MySQL connection failed:', error);
        return false;
    }
}

testConnection();

export default pool;