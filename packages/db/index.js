import { config } from "dotenv";
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from './generated/prisma/client.js';
export const DATABASE_URL = 'postgresql://neondb_owner:npg_PoQzr4Gm9vUW@ep-autumn-flower-ad0e9jei-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';
config();
const connectionString = DATABASE_URL;
console.log(connectionString);
const adapter = new PrismaPg({ connectionString });
export const prisma = new PrismaClient({ adapter });
