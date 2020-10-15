import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config();

const sql = postgres();

const products = await sql`
SELECT * from products;
`;

console.log(products);
process.exit(0);
