import { ConnectionConfiguration } from "tedious";
import dotenv from 'dotenv';
dotenv.config();

export const dbConfig: ConnectionConfiguration = {
    server: process.env.DB_HOST || '',
    options: {
        database: process.env.DB_NAME,
        encrypt: true, // 必要に応じて変更
        trustServerCertificate: true, // 開発用
        port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 1433,
    },
    authentication: {
        type: 'default',
        options: {
            userName: process.env.DB_USER || '',
            password: process.env.DB_PASS || '',
        }
    }
};
