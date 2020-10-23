import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import cookie from 'js-cookie';

export default function ThankYou() {
  let items;
  const itemsInCart = cookie.getJSON('productList') || [];
  if (itemsInCart !== undefined) {
    items = itemsInCart.length;
  } else {
    items = 0;
  }
  return (
    <Layout items={items}>
      <Head>
        <title>Thank you</title>
      </Head>
      <h1 className="homePage">Thank you</h1>
    </Layout>
  );
}
