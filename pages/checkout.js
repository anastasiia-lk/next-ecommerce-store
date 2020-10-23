import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import cookie from 'js-cookie';
import nextCookies from 'next-cookies';
import { useState, useEffect } from 'react';

export default function CheckOut(props) {
  function buy() {
    cookie.remove('productList');
  }
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    let newProduct;
    const updatedProductList = props.productListInCookies.reduce(
      (reduceList, item) => {
        const findInDB = props.productFromDB.find(
          (product) => product.id === item.id,
        );
        if (findInDB !== undefined) {
          // create the copy of the findInDB and add new property "quantity"
          // in JS : findInDB.quantity = item.quantity;
          newProduct = { ...findInDB, quantity: item.quantity };
          reduceList = [...reduceList, newProduct];
        }
        // } else {
        //   newProduct = undefined;
        // }

        // return newProduct;
        return reduceList;
      },
      [],
    );
    // const filteredProductList = updatedProductList.filter((item) => {
    //   return typeof item !== 'undefined';
    //   if (item !== undefined) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // });
    setProductList(updatedProductList);
  }, [setProductList, props.productListInCookies, props.productFromDB]);

  // const [total, setTotal] = useState(0);

  // function changeTotal() {
  let items;
  const itemsInCart = cookie.getJSON('productList') || [];
  if (itemsInCart !== undefined) {
    items = itemsInCart.length;
  } else {
    items = 0;
  }
  let newTotal = 0;
  productList.map(
    (product) => (newTotal = newTotal + product.quantity * product.price),
  );

  return (
    <Layout items={items}>
      <Head>
        <title>Check Out</title>
      </Head>
      <h1 className="homePage">Check Out</h1>
      <h1>Contact information and payment</h1>
      <div className="gridDescription">
        <div className="grid-trDescription">
          <div className="grid-tdDescription">
            <div className="itemDescription">
              <h3>Shipping address</h3>
              <span>
                <label htmlFor="name">Full name</label>
                <input
                  data-cy="full-name"
                  type="text"
                  id="name"
                  placeholder="Anna Bauer"
                />
              </span>
              <br />
              <span>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="index@gmail.com" />
              </span>
              <br />

              <span>
                <label for="address">Address</label>
                <input id="address" type="text" placeholder="Street Str. 7" />
              </span>
              <br />

              <span>
                <label for="zip">Zip-code</label>
                <input id="zip" placeholder="2320" type="text" maxLength="4" />
              </span>
              <br />

              <span>
                <label for="city">City</label>
                <input id="city" placeholder="City" type="text" />
              </span>
            </div>
          </div>
          <div className="grid-tdDescription">
            <div className="itemDescription">
              <h3>Payment info</h3>
              <div className="cards">
                <p>Accepted cards</p>
                <span>
                  <img src="/visa.png" alt="visa" />
                </span>
                <br />
                <span>
                  <label for="namecard">Name on card</label>
                  <input id="namecard" type="text" placeholder="Anna Bauer" />
                </span>
                <br />
                <span>
                  <label for="cardnumber">Credit card number</label>
                  <input
                    id="cardnumber"
                    type="text"
                    placeholder="1234-5678-9000-1111"
                    maxLength="16"
                  />
                </span>
                <br />
                <span>
                  <label htmlFor="expdate">Expiry date</label>
                  <input
                    id="expdate"
                    type="text"
                    placeholder="12/20"
                    maxLength="5"
                  />
                </span>
                <br />
                <span>
                  <label for="cvv">CVV</label>
                  <input id="cvv" type="text" placeholder="456" maxLength="3" />
                </span>
                <br />
                <p className="total">
                  Total price of items in cart: {newTotal}€
                </p>
                <Link href="/thankYou">
                  <a>
                    <button onClick={buy}>BUY!</button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export async function getServerSideProps(context) {
  // nextCookies reads from context.req.headers.cookie
  let productFromDB;
  const allCookies = nextCookies(context);

  // Use "|| []" in order to use a default
  // value, in case this is undefined
  const productListInCookies = allCookies.productList || [];
  const { getProductByIds } = await import('../util/database');
  if (productListInCookies !== undefined) {
    const ids = productListInCookies.map((item) => {
      return item.id;
    });
    // console.log('productListInCookies', productListInCookies);
    productFromDB = await getProductByIds(ids);
  } else {
    productFromDB = [];
  }

  // const updatedProductList = productFromDB.map((item) => {
  //   const findIdInCookies = productListInCookies.filter(
  //     (product) => product.id === item.id,
  //   );
  //   // console.log('findIdInCookies', findIdInCookies);

  //   item.quantity = findIdInCookies[0].quantity;
  //   return item;
  // });
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
