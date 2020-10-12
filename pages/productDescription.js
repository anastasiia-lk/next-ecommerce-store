import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { toggleFollowUserInCookie } from '../util/cookies';
import nextCookies from 'next-cookies';
import { users } from '../util/database';

export default function productDescription() {
  // const [usersWithFollowingData, setUsersWithFollowingData] = useState(
  //   users.map((user) => {
  //     // If the id of the user is in the
  //     // array, then set following to true
  //     // props.followingFromCookie = ['1', '2']
  //     return {
  //       ...user,
  //       following: props.followingFromCookie.includes(user.id),
  //     };
  //   }),
  // );
  return (
    <Layout>
      <h1 className="homePage">Product description</h1>
      <div class="gridDescription">
        <div class="grid-trDescription">
          <div class="grid-tdDescription">
            <div class="itemDescription">
              <img src="/persilGel.jpg" alt="persilGel" />
            </div>
          </div>
          <div class="grid-tdDescription">
            <div class="itemDescription">
              <div class="titleDescription">Persil</div>
              <br />
              <div class="subTitleDescription">
                Full detergent liquid color freshness from Silan 60WG
                <br />
                <br />
                <br />
                Product details:
              </div>
              <br />
              <div class="textDescription">
                Type of detergent: Universal detergent Detergent
                <br />
                Consistency: liquid
                <br />
                Capacity in liters: 3 L
                <br />
                Wash cycles: 60
                <br />
                Content: 1 bottle
                <br />
                Tax: 20% VAT
                <br />
                Price: 7.49 EUR / Pkg
                <br />
                <br />
                <br />
                <input type="text" placeholder="1" />
                <br />
                <br />
                <br />
                {/* <Link href="/shoppingCart">
                  <a> */}
                <button
                  onClick={
                    // Any onClick functions will be only
                    // run in the browser
                    () => {
                      // Save the "following" attribute of the user
                      // in the cookie

                      // const following = toggleFollowUserInCookie(user.id);
                      const product = [];
                      product[0] = {
                        name: 'Persil',
                        description: 'HDW',
                        quantity: '1',
                        price: '7EUR',
                      };
                      // product[0].product = new Image();
                      // product[0].src = 'persilGel.jpg';
                      toggleFollowUserInCookie(product);

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
                {/* </a>
                </Link> */}
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
