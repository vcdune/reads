export default function Header() {
  return (
    <nav className="header">
      <h5 className="logo">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path fill="none" d="M0 0h24v24H0z"></path>{" "}
              <path d="M21 2C6 2 4 16 3 22h1.998c.666-3.333 2.333-5.166 5.002-5.5 4-.5 7-4 8-7l-1.5-1 1-1c1-1 2.004-2.5 3.5-5.5z"></path>{" "}
            </g>{" "}
          </g>
        </svg>
        <span className="logo-text">arete</span>
      </h5>
      <ul className="nav-links">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/community-blog">Community</a>
        </li>
        <li>
          <a href="/editor">New Post</a>
        </li>
        <li>
          <a href="/profile">Profile</a>
        </li>
      </ul>
    </nav>
  );
}
