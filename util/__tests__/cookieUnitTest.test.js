import {
  getProductListFromCookies,
  productInCookie,
  deleteFunction,
} from '../cookies.js';
import cookie from 'js-cookie';

const products = [
  {
    id: 1,
    name: 'Persil',
    description: 'Full detergent liquid color freshness from Silan 60WG',
    img: '/persilGel.jpg',
    alt: 'Persil Gel Color',
    type: 'Universal detergent',
    consistency: 'liquid',
    capacity: '3 L',
    cycles: '60',
    content: '1 bottle',
    tax: '20% VAT',
    price: 17.99,
  },
  {
    id: 2,
    name: 'Persil',
    description: 'Heavy Duty Laundry Detergent Tabs Duo Caps Color 22 Loads',
    img: './persilCaps.jpg',
    alt: 'Persil Caps Color',
    type: 'Universal detergent',
    consistency: 'Tabs',
    capacity: '22 Tabs',
    cycles: '22',
    content: '1 pack / package',
    tax: '20% VAT',
    price: 7.49,
  },
];

afterEach(() => {
  cookie.remove('productList');
});

test('add the same product to cookie', () => {
  productInCookie(products[0], 2);
  productInCookie(products[1], 4);
  expect(productInCookie(products[1], 4).length).toBe(2);
});

test('add new product to cookie', () => {
  productInCookie(products[0], 2);
  productInCookie(products[1], 4);
  expect(getProductListFromCookies().length).toBe(2);
});

test('delete product from cookie', () => {
  productInCookie(products[0], 2);
  productInCookie(products[1], 2);
  expect(deleteFunction(1).length).toBe(1);
});
