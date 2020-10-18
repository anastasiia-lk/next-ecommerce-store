const products = [
  {
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
  {
    name: 'Persil',
    description: 'Heavy duty detergent Tabs Duo Caps Color 80 loads',
    img: './persilPWD.jpg',
    alt: 'Persil Caps Color',
    type: 'Universal detergent',
    consistency: 'Tabs',
    capacity: '80 Tabs',
    cycles: '80',
    content: '1 pack / package',
    tax: '20% VAT',
    price: 14.15,
  },
  {
    name: 'Persil',
    description: 'Heavy duty liquid detergent 60WG',
    img: '/persilGel1.jpg',
    alt: 'Persil Gel White',
    type: 'Universal detergent',
    consistency: 'liquid',
    capacity: '3 L',
    cycles: '60',
    content: '1 bottle',
    tax: '20% VAT',
    price: 17.99,
  },
  {
    name: 'Persil',
    description: 'Heavy Duty Laundry Detergent Tabs Duo Caps Color 22 Loads',
    img: './persilCaps1.jpg',
    alt: 'Persil Caps White',
    type: 'Universal detergent',
    consistency: 'Tabs',
    capacity: '22 Tabs',
    cycles: '22',
    content: '1 pack / package',
    tax: '20% VAT',
    price: 7.49,
  },
  {
    name: 'Persil',
    description: 'Heavy duty detergent Tabs Duo Caps Color 80 loads',
    img: './persilPWD1.jpg',
    alt: 'Persil Caps White',
    type: 'Universal detergent',
    consistency: 'Tabs',
    capacity: '80 Tabs',
    cycles: '80',
    content: '1 pack / package',
    tax: '20% VAT',
    price: 14.15,
  },
];
exports.up = async (sql) => {
  // <insert magic here>
  await sql`
	INSERT INTO products ${sql(
    products,
    'name',
    'description',
    'img',
    'alt',
    'type',
    'consistency',
    'capacity',
    'cycles',
    'content',
    'tax',
    'price',
  )}
	`;
};

exports.down = async (sql) => {
  // just in case...
  for (const product in products) {
    await sql`
		DELETE FROM products WHERE
		name=${product.name} AND
    description=${product.description} AND
    img=${product.img} AND
    alt=${product.alt} AND
    type=${product.type} AND
    consistency=${product.consistency} AND
    capacity=${product.capacity} AND
    cycles=${product.cycles} AND
    content=${product.content} AND
    tax=${product.tax} AND
    price=${product.price};
		`;
  }
};
