import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
// import { products } from '../util/database';

type Product = {
  id: number;
  name: string;
  description: string;
  img: string;
  alt: string;
  type: string;
  consistency: string;
  capacity: string;
  cycles: string;
  content: string;
  tax: string;
  price: number;
};

type Props = {
  products: Product[];
};

export default function Laundry(props: Props) {
  return (
    <div>
      <Layout>
        <Head>
          <title>Laundry</title>
        </Head>
        <ul className="products clearfix">
          {props.products.map((product) => {
            return (
              <li className="product-wrapper" key={product.id}>
                <Link href={`/${product.id}`} className="product">
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
export async function getServerSideProps(context: GetServerSideProps) {
  // import { users } from '../util/database';
  const { getProducts } = await import('../util/database');
  const newProducts = await getProducts();
  const products = newProducts || [];
  // console.log(context);
  return {
    props: { products },
  };
}
