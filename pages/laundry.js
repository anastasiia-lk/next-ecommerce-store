import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { users } from '../util/database';

// import styled from '@emotion/styled';
// import { jsx, css } from '@emotion/core';

// const productWrapper = css`
//   display: block;
//   width: 100%;
//   background-color: red;
//   /* float: left; */
//   /* transition: width 0.2s; */
// `;

// const product = css`
//   display: block;
//   border: 1px solid #b5e9a7;
//   border-radius: 3px;
//   position: relative;
//   background: #fff;
//   margin: 0 20px 20px 0;
//   text-decoration: none;
//   color: #474747;
//   z-index: 0;
//   height: 300px;
//   background-color: red;
// `;

export default function Laundry() {
  return (
    // <div className="laundry">
    //   <Layout>
    //     <h1 className="homePage">Laundry</h1>
    //     <div class="grid">
    //       <div class="grid-tr">
    //         <div class="grid-td">
    //           <div class="item">
    //             <Link href="/productDescription">
    //               <a>
    //                 <img src="/persilGel.jpg" alt="persilGel" />
    //               </a>
    //             </Link>
    //             <p className="productDescription">
    //               Persil
    //               <br />
    //               Heavy Duty Liquid Color Freshness from Silan 60WG
    //             </p>
    //             <p className="productPrice">
    //               Unit price
    //               <br />
    //               17.99 EUR / btl
    //             </p>
    //             <button>On the Shopping List</button>
    //           </div>
    //         </div>
    //         <div class="grid-td">
    //           <div class="item">
    //             <img src="/persilCaps.jpg" alt="persilCaps" />
    //             <p className="productDescription">
    //               Persil
    //               <br />
    //               Heavy Duty Laundry Detergent Tabs Duo Caps Color 22 Loads
    //             </p>
    //             <p className="productPrice">
    //               Unit price
    //               <br />
    //               7.49 EUR / Pkg
    //             </p>
    //             <button>On the Shopping List</button>
    //           </div>
    //         </div>
    //         <div class="grid-td">
    //           <div class="item">
    //             <img src="/persilPWD.jpg" alt="persilPWD" />
    //             <p className="productDescription">
    //               Persil
    //               <br />
    //               Heavy duty detergent Tabs Duo Caps Color 80 loads
    //             </p>
    //             <p className="productPrice">
    //               Unit price
    //               <br />
    //               14.15 EUR / Pkg
    //             </p>
    //             <button>On the Shopping List</button>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="grid-tr">
    //         <div class="grid-td">
    //           <div class="item">
    //             <img src="/persilGel1.jpg" alt="persilGel" />
    //             <p className="productDescription">
    //               Persil
    //               <br />
    //               Heavy duty liquid detergent 60WG
    //             </p>
    //             <p className="productPrice">
    //               Unit price
    //               <br />
    //               17.99 EUR / btl
    //             </p>
    //             <button>On the Shopping List</button>
    //           </div>
    //         </div>
    //         <div class="grid-td">
    //           <div class="item">
    //             <img src="/persilCaps1.jpg" alt="persilCaps" />
    //             <p className="productDescription">
    //               Persil
    //               <br />
    //               Heavy duty detergent Tabs Duo Caps Universal 22 loads
    //             </p>
    //             <p className="productPrice">
    //               Unit price
    //               <br />
    //               7.49 EUR / Pkg
    //             </p>
    //             <button>On the Shopping List</button>
    //           </div>
    //         </div>
    //         <div class="grid-td">
    //           <div class="item">
    //             <img src="/persilPWD1.jpg" alt="persilPWD" />
    //             <p className="productDescription">
    //               Persil
    //               <br />
    //               Heavy Duty Laundry Detergent Discs Universal 18 loads
    //             </p>
    //             <p className="productPrice">
    //               Unit price
    //               <br />
    //               14.15 EUR / Pkg
    //             </p>
    //             <button>On the Shopping List</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </Layout>
    // </div>
    <Layout>
      <ul class="products clearfix">
        {users.map((user) => {
          return (
            <li class="product-wrapper" key={user.id}>
              <Link href={`/${user.id}`} class="product">
                <a>
                  <div class="product-photo">
                    <img src={user.img} alt={user.alt} />
                  </div>
                  <p>
                    {user.name}
                    <br />
                    {user.description}
                    <br />
                    {user.price}
                  </p>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
