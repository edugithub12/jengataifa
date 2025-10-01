// types/env.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
        // Database Configuration
        DB_HOST: string;
        DB_USER: string;
        DB_PASSWORD: string;
        DB_NAME: string;
        DB_PORT: string;

        // Email Configuration
        SMTP_HOST: string;
        SMTP_PORT: string;
        SMTP_USER: string;
        SMTP_PASSWORD: string;
        NOTIFICATION_EMAIL: string;

        // Next.js
        NEXTAUTH_URL: string;
        NEXTAUTH_SECRET: string;
    }
}