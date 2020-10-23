import Link from 'next/link';
import cookie from 'js-cookie';
import nextCookies from 'next-cookies';
import { useState, useEffect } from 'react';

// export function totalAmount(itemsInCart) {
//   // console.log(itemsInCart);
//   if (itemsInCart !== undefined) {
//     setItems(itemsInCart.length);
//     return items;
//   } else {
//     return 0;
//   }
// }

export default function Header(props) {
  // const itemsInCart = cookie.getJSON('productList') || [];
  // const [items, setItems] = useState(0);
  // function totalAmount() {
  //   const itemsInCart = cookie.getJSON('productList') || [];
  //   // console.log(itemsInCart);
  //   if (itemsInCart !== undefined) {
  //     return itemsInCart.length;
  //   } else {
  //     return 0;
  //   }
  // }
  // const [items, setItems] = useState(0);
  // if (props.productListInCookies !== undefined) {
  //   setItems(props.productListInCookies.length);
  // }
  // function ItemsInShoppingCart(props) {
  //   if (props.productListInCookies !== undefined) {
  //     return props.productListInCookies.length;
  //   } else {
  //     return '';
  //   }
  // }
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 30,
        background:
          'linear-gradient(90deg, rgb(255, 0, 0) 0%, rgb(255, 200, 200) 35%, rgb(255,255,255) 100%)',
        /* background: '#ddd', */
        marginbottom: 40,
      }}
    >
      <div>
        <img
          src="/logo.png"
          alt="Henkel logo"
          style={{
            margin: 10,
            height: 84,
            width: 150,
          }}
        />
      </div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        <Link href="/shoppingCart">
          <a>
            <img className="imgCart" src="/cart.png" alt="" />{' '}
            {props.items !== 0 ? `Items in cart: ${props.items}` : ''}
          </a>
        </Link>
      </div>
    </header>
  );
}

export async function getServerSideProps(context) {
  // nextCookies reads from context.req.headers.cookie
  // let productFromDB;
  const allCookies = nextCookies(context);

  // Use "|| []" in order to use a default
  // value, in case this is undefined
  const productListInCookies = allCookies.productList || [];
  // const { getProductByIds } = await import('../util/database');
  // if (productListInCookies !== undefined) {
  //   const ids = productListInCookies.map((item) => {
  //     return item.id;
  //   });
  //   // console.log('productListInCookies', productListInCookies);
  //   productFromDB = await getProductByIds(ids);
  // } else {
  //   productFromDB = [];
  // }

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
      // productFromDB: productFromDB,

      // productListInCookies: productListInCookies,
      // Serialization will error out
      // on values such as:
      // following: undefined,
      // date: new Date(),
    },
  };
}
