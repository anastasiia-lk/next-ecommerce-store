import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
// import '../pages/index.js';

export default function Home() {
  return (
    <Layout>
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
