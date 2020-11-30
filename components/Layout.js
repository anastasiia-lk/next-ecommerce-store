import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout(props) {
  return (
    <div className="wrapper">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header items={props.items} />

      <main style={{ paddingBottom: 90 }}>{props.children}</main>

      <Footer />
    </div>
  );
}
