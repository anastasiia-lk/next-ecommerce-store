import Layout from '../../components/Layout';
import { users } from '../../database';
import Head from 'next/head';

export default function User(props) {
  const user = users.find((currentUser) => {
    if (currentUser.id === props.id) {
      return true;
    }
    return false;
  });
  return (
    <Layout>
      <Head>
        <title>Single User</title>
      </Head>
      user id: {props.id}
      <br />
      user firstName: {user.firstName} <br />
      user lastName: {user.lastName} <br />
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
