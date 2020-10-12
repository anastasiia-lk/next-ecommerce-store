import Layout from '../components/Layout';
import { users } from '../util/database';
import Head from 'next/head';

export default function User(props) {
  const user = users.find((currentUser) => currentUser.id === props.id);
  return (
    <Layout>
      <h1 className="homePage">Product description</h1>
      <div class="gridDescription">
        <div class="grid-trDescription">
          <div class="grid-tdDescription">
            <div class="itemDescription">
              <img src={user.img} alt="persilGel" />
            </div>
          </div>
          <div class="grid-tdDescription">
            <div class="itemDescription">
              <div class="titleDescription">{user.name}</div>
              <br />
              <div class="subTitleDescription">
                {user.description}
                <br />
                <br />
                <br />
                Product details:
              </div>
              <br />
              <div class="textDescription">
                Type of detergent: {user.type}
                <br />
                Consistency: {user.consistency}
                <br />
                Capacity in liters: {user.capacity}
                <br />
                Wash cycles: {user.cycles}
                <br />
                Content: {user.content}
                <br />
                Tax: {user.tax}
                <br />
                Price: {user.price}
                <br />
                <br />
                <br />
                <input type="text" placeholder="1" />
                <br />
                <br />
                <br />
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
export function getServerSideProps(context) {
  console.log(context);
  return {
    props: { id: context.query.id },
  };
}