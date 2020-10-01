import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Henkel shop</title>
      </Head>
      <main
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 30,
          marginbottom: 40,
        }}
      >
        <img src="/wash.jpg" alt="Wash" />

        <img src="/clean.jpg" alt="Clean" />
        <Link href="/users/user-list">
          <a>User List</a>
        </Link>
      </main>
    </Layout>
  );
}
