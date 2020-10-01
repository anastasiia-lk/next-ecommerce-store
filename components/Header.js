import Link from 'next/link';
export default function Header() {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 30,
        background: '#ddd',
        marginbottom: 40,
      }}
    >
      <div>header with some links</div>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        <Link href="/users/user-list">
          <a>User List</a>
        </Link>
      </div>
    </header>
  );
}
