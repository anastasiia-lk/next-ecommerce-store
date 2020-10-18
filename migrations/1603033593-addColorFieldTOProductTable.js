exports.up = async (sql) => {
  // <insert magic here>
  await sql`
   ALTER TABLE products
	  ADD COLUMN color varchar(40);
	`;
};

exports.down = async (sql) => {
  // just in case...
  await sql`
    ALTER TABLE products
		 DROP COLUMN color;
	`;
};
