// types/database.ts
export interface ContactMessage {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    service: string | null;
    message: string;
    created_at: Date;
    updated_at: Date;
    is_read: boolean;
}

export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
}

// Fixed ApiResponse without complex generics
export interface ApiResponse {
    success: boolean;
    message: string;
    data?: any;
    error?: string;
}

export interface MySQLResult {
    insertId: number;
    affectedRows: number;
}