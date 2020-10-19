import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import nextCookies from 'next-cookies';
import deleteFunction from '../util/cookies.js';

export default function ShoppingCart(props) {
  const [productList, setProductList] = useState([]);
  const [productListInCookies, setproductListInCookies] = useState(
    props.productListInCookies,
  );
  useEffect(() => {
    const updatedProductList = productListInCookies.map((item) => {
      const findInDB = props.productFromDB.find(
        (product) => product.id === item.id,
      );
      // console.log('findIdInCookies', findIdInCookies);

      findInDB.quantity = item.quantity;
      return findInDB;
    });
    setProductList(updatedProductList);
  }, [setProductList, productListInCookies, props.productFromDB]);

  const [total, setTotal] = useState(0);

  // function changeTotal() {
  let newTotal = 0;
  productList.map(
    (product) => (newTotal = newTotal + product.quantity * product.price),
  );
  //   return newTotal;
  // }

  // const [productList, setProductList] = useState(props.followingFromCookie);
  function changeProductList(products, cookies) {
    const newProductList = products.filter(function (element) {
      return cookies.filter(function (item) {
        return item.id === element.id;
      });
    });
    return newProductList;
    // const newProductList = products.map((item) => {
    //   const findInCookies = cookies.filter((element) => element.id === item.id);
    //   item = findInCookies;
    //   // console.log('findIdInCookies', findIdInCookies);
    //   return item;
    // });
    // const updatedProductList = products.map((item) => item !== undefined);
    // return updatedProductList;
  }
  function changeShoppingCart(product) {
    const deleteItem = product.id;
    console.log('deleteItem', deleteItem);
    const updatedProductList = deleteFunction(deleteItem);
    console.log('updatedProductList', updatedProductList);
    // const newTotal = total + user.price * user.quantity;
    // console.log(newTotal);
    // const newProductList = changeProductList(productList, updatedProductList);
    // console.log('newProductList', newProductList);

    setproductListInCookies(updatedProductList);
    // setTotal(newTotal);
    console.log('productListInCookies', productListInCookies);
  }

  return (
    <Layout>
      <Head>
        <title>Shopping Cart</title>
      </Head>
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
      {productList.map((product) => {
        return (
          // <Products product={user} />
          <div className="shoppingCardGrid">
            <img src={product.img} alt="persilGel" />
            <div>{product.name}</div>
            <div>{product.description}</div>
            <div>{product.quantity}</div>
            <div>{product.price}</div>
            <button
              onClick={() => {
                changeShoppingCart(product);
              }}
              key={product.id}
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

export async function getServerSideProps(context) {
  // nextCookies reads from context.req.headers.cookie
  const allCookies = nextCookies(context);

  // Use "|| []" in order to use a default
  // value, in case this is undefined
  const productListInCookies = allCookies.productList || [];
  const { getProductByIds } = await import('../util/database');
  const ids = productListInCookies.map((item) => {
    return item.id;
  });
  // console.log('productListInCookies', productListInCookies);
  const productFromDB = await getProductByIds(ids);

  const updatedProductList = productFromDB.map((item) => {
    const findIdInCookies = productListInCookies.filter(
      (product) => product.id === item.id,
    );
    // console.log('findIdInCookies', findIdInCookies);

    item.quantity = findIdInCookies[0].quantity;
    return item;
  });
  /////////////////////////////////////////////////////////////
  // const idsInCookies = productListInCookies.map((item) => {
  //   return item.id;
  // });

  // const updatedProductList = productFromDB.map((item) => {
  //   const productQuantity = productListInCookies.map((productFromCookies) => {
  //     if (item.id === productFromCookies.id) return productFromCookies.quantity;
  //   });
  //   item.quantity = productQuantity.quantity;
  //   return item;
  // });
  // console.log('updatedProductList', updatedProductList);

  return {
    props: {
      // updatedProductList: updatedProductList,
      productListInCookies: productListInCookies,
      productFromDB: productFromDB,

      // productListInCookies: productListInCookies,
      // Serialization will error out
      // on values such as:
      // following: undefined,
      // date: new Date(),
    },
  };
}
