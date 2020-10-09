import Link from 'next/link';
export default function Header() {
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
          <a>My basket</a>
        </Link>
      </div>
    </header>
  );
}
