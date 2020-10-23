import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import cookie from 'js-cookie';
// import '../pages/index.js';

export default function Home() {
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
        <title>Henkel shop</title>
      </Head>
      <main className="location">
        <div className="box1">
          <Link href="/laundry">
            <a className="homePage">Laundry</a>
          </Link>
        </div>
        <div className="box2">
          <Link href="/homecare">
            <a className="homePage">Home Care</a>
          </Link>
        </div>
        <div className="box3">
          <img
            src="/wash.jpg"
            alt="Wash"
            style={{
              margin: 10,
              height: 500,
              width: 350,
            }}
          />
        </div>
        <div className="box4">
          <img
            src="/clean.jpg"
            alt="Clean"
            style={{
              margin: 40,
              height: 500,
              width: 350,
            }}
          />
        </div>
      </main>
    </Layout>
  );
}
