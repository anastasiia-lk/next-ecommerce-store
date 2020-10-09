import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function ContactUs() {
  return (
    <Layout>
      <h1 className="homePage">Shopping Card</h1>
      <br />
      <Link href="/laundry">
        <a>
          <button>Back to shop</button>
        </a>
      </Link>

      <div className="shoppingCardGrid">
        <div>Product</div>
        <div>Description</div>
        <div>Quantity</div>
        <div>Price</div>
      </div>
    </Layout>
  );
}
