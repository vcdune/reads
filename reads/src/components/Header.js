export default function Header() {
  return (
    <nav className="header">
      <h5 className="logo">Arete</h5>
      <ul className="nav-links">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/community-blog">Community</a>
        </li>
        <li>
          <a href="/editor">Publish</a>
        </li>
        <li>
          <a href="/profile">Profile</a>
        </li>
      </ul>
    </nav>
  );
}
