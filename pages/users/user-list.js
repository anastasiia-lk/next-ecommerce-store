import Layout from '../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import { users } from '../../database';

export default function UserList() {
  return (
    <Layout>
      <Head>
        <title>User List</title>
      </Head>
      <h1>User List</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link href={`/users/${user.id}`}>
                <a>
                  {user.firstName} {user.lastName}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
