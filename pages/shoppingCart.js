import { useState } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import nextCookies from 'next-cookies';

export default function shoppingCart(props) {
  return (
    <Layout>
      <h1 className="homePage">Shopping Cart</h1>
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
      {/* <div className="shoppingCardGrid">
        <div>{props.followingFromCookie[0].name}</div>
        <div>{props.followingFromCookie[0].description}</div>
        <div>{props.followingFromCookie[0].quantity}</div>
        <div>{props.followingFromCookie[0].price}</div>
      </div> */}
    </Layout>
  );
}

export function getServerSideProps(context) {
  // nextCookies reads from context.req.headers.cookie
  const allCookies = nextCookies(context);

  // Use "|| []" in order to use a default
  // value, in case this is undefined
  const following = allCookies.following || [];

  return {
    props: {
      followingFromCookie: following,
      // Serialization will error out
      // on values such as:
      // following: undefined,
      // date: new Date(),
    },
  };
}
