import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import nextCookies from 'next-cookies';
import DeleteFunction from '../util/cookies.js';

export default function shoppingCart(props) {
  // console.log('Props', props);
  const [productList, setProductList] = useState(props.followingFromCookie);
  const [total, setTotal] = useState(0);

  // function changeTotal() {
  let newTotal = 0;
  productList.map((user) => (newTotal = newTotal + user.quantity * user.price));
  //   return newTotal;
  // }

  // const [productList, setProductList] = useState(props.followingFromCookie);
  function changeShoppingCart(user) {
    const deleteItem = user.id;
    const updatedCookie = DeleteFunction(deleteItem);
    // const newTotal = total + user.price * user.quantity;
    // console.log(newTotal);
    setProductList(updatedCookie);
    // setTotal(newTotal);
  }

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
        <div></div>
        <div>Product</div>
        <div>Description</div>
        <div>Quantity</div>
        <div>Price (EUR/Pkg)</div>
        <div></div>
      </div>
      {productList.map((user) => {
        return (
          // <Products product={user} />
          <div className="shoppingCardGrid">
            <img src={user.img} alt="persilGel" />
            <div>{user.name}</div>
            <div>{user.description}</div>
            <div>{user.quantity}</div>
            <div>{user.price}</div>
            <button
              onClick={() => {
                changeShoppingCart(user);
              }}
              key={user.id}
            >
              Delete item
            </button>
          </div>
        );
      })}
      <div>Total: {newTotal}</div>
    </Layout>
  );
}

export function getServerSideProps(context) {
  // nextCookies reads from context.req.headers.cookie
  const allCookies = nextCookies(context);

  // Use "|| []" in order to use a default
  // value, in case this is undefined
  const following = allCookies.following || [];
  console.log(allCookies);
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
