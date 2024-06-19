export default function Header() {
  return (
    <nav className="header">
      <h5 className="logo">
        <svg
          width="32px"
          height="32px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              opacity="1"
              d="M6.50359 21.5201C8.13698 22.4631 10.2103 21.9075 14.357 20.7964C18.5037 19.6853 20.577 19.1298 21.5201 17.4964C22.4631 15.863 21.9075 13.7897 20.7964 9.643C19.6853 5.49632 19.1298 3.42298 17.4964 2.47995C15.863 1.53691 13.7897 2.09246 9.643 3.20356C5.49632 4.31466 3.42298 4.87021 2.47995 6.50359C1.53691 8.13698 2.09246 10.2103 3.20356 14.357C4.31466 18.5037 4.87021 20.577 6.50359 21.5201Z"
              fill="#e1764f"
            ></path>{" "}
            <path
              d="M14.8978 11.2237C15.4313 11.0808 15.6899 10.3162 15.4755 9.51599C15.2611 8.71579 14.6548 8.18298 14.1213 8.32592C13.5879 8.46886 13.3292 9.23343 13.5436 10.0336C13.7581 10.8338 14.3643 11.3666 14.8978 11.2237Z"
              fill="white"
            ></path>{" "}
            <path
              d="M9.10238 12.7767C9.63585 12.6337 9.89449 11.8692 9.68008 11.069C9.46567 10.2688 8.85939 9.73596 8.32592 9.8789C7.79246 10.0218 7.53381 10.7864 7.74823 11.5866C7.96264 12.3868 8.56892 12.9196 9.10238 12.7767Z"
              fill="white"
            ></path>{" "}
            <path
              d="M8.18524 15.751C8.28594 15.3492 8.69329 15.1052 9.09507 15.2059C10.2254 15.4892 11.5234 15.4927 12.8411 15.1396C14.1589 14.7865 15.2813 14.1345 16.1185 13.324C16.4161 13.0359 16.8909 13.0436 17.179 13.3412C17.4671 13.6388 17.4594 14.1136 17.1618 14.4017C16.8143 14.7381 16.4298 15.0495 16.0129 15.3304L16.1709 15.6523C16.5396 16.4034 16.2225 17.3108 15.4663 17.6688C14.7251 18.0197 13.8395 17.7102 13.4781 16.9741L13.2819 16.5742L13.2294 16.5885C11.674 17.0052 10.1168 17.0083 8.73039 16.6609C8.32861 16.5602 8.08453 16.1528 8.18524 15.751Z"
              fill="white"
            ></path>{" "}
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
          <a href="/editor">Publish</a>
        </li>
        <li>
          <a href="/profile">Profile</a>
        </li>
      </ul>
    </nav>
  );
}
