export default function Header() {
  return (
    <nav className="header hover-link">
      <ul className="nav">
        <li><a href="/home"><strong>Project Dune</strong></a></li>
        <li><a href="/community-blog">Community</a></li>
        <li><a href="/community-members">Members</a></li>
        <li><a href="/directory">Directory</a></li>
        <li><a href="https://dune-terminal.vercel.app/" target="_blank" rel="noreferrer">Terminal</a></li>
        {/* <li><a href="/">Newsletter</a></li> */}
        {/* <li><a href="https://twitter.com/vcdune" target="_blank" rel="noreferrer">Twitter</a></li> */}
        <li><a href="/contact">Contact</a></li>
        {/* <li><a href="">Log-In</a></li> */}
      </ul>
    </nav>
  );
}
