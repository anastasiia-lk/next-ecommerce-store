import Link from 'next/link';
export default function Footer() {
  return (
    <footer
      className="footer"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 0,
        background:
          'linear-gradient(90deg, rgb(255, 0, 0) 0%, rgb(255, 200, 200) 35%, rgb(255,255,255) 100%)',
        marginbottom: 0,
      }}
    >
      <div>
        <a href="mailto:a.duplishcheva@gmail.com"> Contact Us</a>
      </div>

      <div>
        <img
          src="/fb.png"
          alt="Facebook link"
          style={{
            margin: 10,
            height: 30,
            width: 30,
          }}
        />
        <img
          src="/twitter.png"
          alt="Twitter link"
          style={{
            margin: 10,
            height: 30,
            width: 30,
          }}
        />
        <img
          src="/instagram.webp"
          alt="Instagram link"
          style={{
            margin: 10,
            height: 30,
            width: 30,
          }}
        />
      </div>
    </footer>
  );
}
