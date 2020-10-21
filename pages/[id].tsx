import Layout from '../components/Layout';
// import { users } from '../util/database';
import Head from 'next/head';
import Link from 'next/link';
import { productInCookie } from '../util/cookies';
import nextCookies from 'next-cookies';
import { useState } from 'react';
import Header from '../components/Header';
import { GetServerSidePropsContext } from 'next';

type ProductType = {
  id: number;
  name: string;
  description: string;
  img: string;
  alt: string;
  type: string;
  consistency: string;
  capacity: string;
  cycles: string;
  content: string;
  tax: string;
  price: number;
};

type Props = {
  product?: ProductType;
};

export default function Product(props: Props) {
  // const product = props.products.find(
  //   (currentProduct) => currentProduct.id === props.id,
  // );
  // // const [total, setTotal] = useState(0);
  // // function ChangeTotal(user) {
  // //   const newTotal = total + user.quantity * user.price;
  // //   setTotal(newTotal);
  // //   return newTotal;
  // // }

  if (!props.product) {
    return (
      <Layout>
        <Head>
          <title>Product not found</title>
        </Head>
        Product not found
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>Single product</title>
      </Head>
      <h1 className="homePage">Product description</h1>
      <div className="gridDescription">
        <div className="grid-trDescription">
          <div className="grid-tdDescription">
            <div className="itemDescription">
              <img src={props.product.img} alt="persilGel" />
            </div>
          </div>
          <div className="grid-tdDescription">
            <div className="itemDescription">
              <div className="titleDescription">{props.product.name}</div>
              <br />
              <div className="subTitleDescription">
                {props.product.description}
                <br />
                <br />
                <br />
                Product details:
              </div>
              <br />
              <div className="textDescription">
                Type of detergent: {props.product.type}
                <br />
                Consistency: {props.product.consistency}
                <br />
                Capacity in liters: {props.product.capacity}
                <br />
                Wash cycles: {props.product.cycles}
                <br />
                Content: {props.product.content}
                <br />
                Tax: {props.product.tax}
                <br />
                Price: {props.product.price}
                <br />
                <br />
                <br />
                <input
                  type="number"
                  placeholder="Enter quantity"
                  id="quantity"
                />
                <br />
                <br />
                <br />
                <button
                  onClick={
                    // Any onClick functions will be only
                    // run in the browser
                    () => {
                      // Save the "following" attribute of the user
                      // in the cookie

                      // const following = toggleFollowUserInCookie(user.id);
                      // product[0].product = new Image();
                      // product[0].src = 'persilGel.jpg';
                      const quantity =
                        document.getElementById('quantity').value * 1;
                      // changeTotal();
                      productInCookie(props.product, quantity);
                      // ChangeTotal(user);

                      // setUsersWithFollowingData(
                      //   users.map((currentUser) => {
                      //     // If the id of the user is in the
                      //     // array, then set following to true
                      //     // following = ['1', '2']
                      //     return {
                      //       ...currentUser,
                      //       following: following.includes(currentUser.id),
                      //     };
                      //   }),
                      // );
                    }
                  }
                >
                  Add to cart
                </button>
                <br />
                <br />
                <Link href="/laundry">
                  <a>
                    <button>Back to shop</button>
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

//This is run by Next.js BEFORE the component
// above is run, and passes in the props
export async function getServerSideProps(context: GetServerSidePropsContext) {
  // import { products } from '../util/database';

  const id = context.query.id;
  // const { getProducts } = await import('../util/database')
  const { getProductById } = await import('../util/database');
  const product = await getProductById(id);

  const props: Props = {};

  if (product) props.product = product;
  return {
    props: props,
  };
}
