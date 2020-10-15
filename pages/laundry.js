import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
// import { products } from '../util/database';

export default function Laundry(props) {
  return (
    <div>
      <Layout>
        <ul className="products clearfix">
          {props.products.map((product) => {
            return (
              <li className="product-wrapper" key={product.id}>
                <Link href={`/${product.id}`} class="product">
                  <a>
                    <div className="product-photo">
                      <img src={product.img} alt={product.alt} />
                    </div>
                    <p>
                      {product.name}
                      <br />
                      {product.description}
                      <br />
                      {product.price}
                    </p>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </Layout>
    </div>
  );
}

//This is run by Next.js BEFORE the component
// above is run, and passes in the props
export async function getServerSideProps(context) {
  // import { users } from '../util/database';
  const { getProducts } = await import('../util/database');
  const newProducts = await getProducts();
  const products = newProducts || [];
  // console.log(context);
  return {
    props: { products },
  };
}
