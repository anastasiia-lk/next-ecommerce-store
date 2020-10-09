import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function ContactUs() {
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
                <Link href="/shoppingCart">
                  <a>
                    <button>Add to card</button>
                  </a>
                </Link>
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
