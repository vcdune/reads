export default function Header() {
  return (
    <nav>
      <ul className="nav">
        <li><a href="/home"><strong>Project Dune</strong></a></li>
        <li><a href="/blog">Articles</a></li>
        {/* <li><a href="">Search</a></li> */}
        <li><a href="https://dune-terminal.vercel.app/">Terminal</a></li>
        <li><a href="/community">Community</a></li>
        <li><a href="/">Newsletter</a></li>
        <li><a href="https://twitter.com/abdulmendahawi" target="_blank" rel="noreferrer">Twitter</a></li>
        <li><a href="/contact">Contact</a></li>
        {/* <li><a href="">Log-In</a></li> */}
      </ul>
    </nav>
  );
}
