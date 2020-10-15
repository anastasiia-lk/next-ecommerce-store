import Layout from '../components/Layout';
// import { users } from '../util/database';
import Head from 'next/head';
import Link from 'next/link';
import { toggleFollowProductInCookie } from '../util/cookies';
import nextCookies from 'next-cookies';
import { useState } from 'react';

export default function Product(props) {
  const product = props.products.find(
    (currentProduct) => currentProduct.id === props.id,
  );
  // const [total, setTotal] = useState(0);
  // function ChangeTotal(user) {
  //   const newTotal = total + user.quantity * user.price;
  //   setTotal(newTotal);
  //   return newTotal;
  // }
  return (
    <Layout>
      <h1 className="homePage">Product description</h1>
      <div class="gridDescription">
        <div class="grid-trDescription">
          <div class="grid-tdDescription">
            <div class="itemDescription">
              <img src={product.img} alt="persilGel" />
            </div>
          </div>
          <div class="grid-tdDescription">
            <div class="itemDescription">
              <div class="titleDescription">{product.name}</div>
              <br />
              <div class="subTitleDescription">
                {product.description}
                <br />
                <br />
                <br />
                Product details:
              </div>
              <br />
              <div class="textDescription">
                Type of detergent: {product.type}
                <br />
                Consistency: {product.consistency}
                <br />
                Capacity in liters: {product.capacity}
                <br />
                Wash cycles: {product.cycles}
                <br />
                Content: {product.content}
                <br />
                Tax: {product.tax}
                <br />
                Price: {product.price}
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
                      toggleFollowProductInCookie(product, quantity);
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
export async function getServerSideProps(context) {
  // import { users } from '../util/database';
  const { getProducts } = await import('../util/database');
  const newProducts = await getProducts();
  const products = newProducts || [];
  // console.log(context);
  return {
    props: { id: context.query.id, products: products },
  };
}
