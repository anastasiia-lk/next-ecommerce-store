import extractHerokuDatabaseEnvVars from './extractHerokuDatabaseEnvVars';
import postgres from 'postgres';
import dotenv from 'dotenv';
// import { users } from '../database';

extractHerokuDatabaseEnvVars();

dotenv.config();

// const sql = postgres();
const sql =
  process.env.NODE_ENV === 'production'
    ? // Heroku needs SSL connections but
      // has an "unauthorized" certificate
      // https://devcenter.heroku.com/changelog-items/852
      postgres({ ssl: { rejectUnauthorized: false } })
    : postgres();

export async function getProducts() {
  const products = await sql`
    SELECT * from products;
  `;
  return products;
  // change names
  // return products.map((product) => {
  //   return{
  //   id: product.id,
  //   firstName: product.first_name,
  //   lastName: product.last_name,
  // };
  // });
}

export async function getProductById(id) {
  if (!/^\d+$/.test(id)) return undefined;
  const products = await sql`
    SELECT * FROM products WHERE id = ${id};
  `;
  return products[0];
}

export async function getProductByIds(ids) {
  if (ids.length === 0) {
    return [];
  }
  const products = await sql`
    SELECT * FROM products WHERE
    id IN (${ids})
  `;
  return products;
}

export async function updateProductById(id, product) {
  if (!/^\d+$/.test(id)) return undefined;
  const products = await sql`
    UPDATE products
     SET name = ${product.name}
     WHERE id=${id}
     RETURNING *;
  `;
  return products[0];
}

// export const products = [
//   {
//     id: 1,
//     name: 'Persil',
//     description: 'Full detergent liquid color freshness from Silan 60WG',
//     img: '/persilGel.jpg',
//     alt: 'Persil Gel Color',
//     type: 'Universal detergent',
//     consistency: 'liquid',
//     capacity: '3 L',
//     cycles: '60',
//     content: '1 bottle',
//     tax: '20% VAT',
//     price: 17.99,
//   },
//   {
//     id: 2,
//     name: 'Persil',
//     description: 'Heavy Duty Laundry Detergent Tabs Duo Caps Color 22 Loads',
//     img: './persilCaps.jpg',
//     alt: 'Persil Caps Color',
//     type: 'Universal detergent',
//     consistency: 'Tabs',
//     capacity: '22 Tabs',
//     cycles: '22',
//     content: '1 pack / package',
//     tax: '20% VAT',
//     price: 7.49,
//   },
//   {
//     id: 3,
//     name: 'Persil',
//     description: 'Heavy duty detergent Tabs Duo Caps Color 80 loads',
//     img: './persilPWD.jpg',
//     alt: 'Persil Caps Color',
//     type: 'Universal detergent',
//     consistency: 'Tabs',
//     capacity: '80 Tabs',
//     cycles: '80',
//     content: '1 pack / package',
//     tax: '20% VAT',
//     price: 14.15,
//   },
//   {
//     id: 4,
//     name: 'Persil',
//     description: 'Heavy duty liquid detergent 60WG',
//     img: '/persilGel1.jpg',
//     alt: 'Persil Gel White',
//     type: 'Universal detergent',
//     consistency: 'liquid',
//     capacity: '3 L',
//     cycles: '60',
//     content: '1 bottle',
//     tax: '20% VAT',
//     price: 17.99,
//   },
//   {
//     id: 5,
//     name: 'Persil',
//     description: 'Heavy Duty Laundry Detergent Tabs Duo Caps Color 22 Loads',
//     img: './persilCaps1.jpg',
//     alt: 'Persil Caps White',
//     type: 'Universal detergent',
//     consistency: 'Tabs',
//     capacity: '22 Tabs',
//     cycles: '22',
//     content: '1 pack / package',
//     tax: '20% VAT',
//     price: 7.49,
//   },
//   {
//     id: 6,
//     name: 'Persil',
//     description: 'Heavy duty detergent Tabs Duo Caps Color 80 loads',
//     img: './persilPWD1.jpg',
//     alt: 'Persil Caps White',
//     type: 'Universal detergent',
//     consistency: 'Tabs',
//     capacity: '80 Tabs',
//     cycles: '80',
//     content: '1 pack / package',
//     tax: '20% VAT',
//     price: 14.15,
//   },
// ];
