export default function Message() {
  const handleEmailClick = () => {
    window.location.href = "mailto:dunevc@gmail.com";
  };

  return (
    <div className="page-view">
      <div className="page-container">
        <p>
          <strong>Hello there!</strong>
        </p>
        <p>
          We're the brains behind Project Dune, a news platform crafted by
          alumni of NYU Abu Dhabi, New York University, University of
          Washington, and UC Davis.
        </p>
        <p>
          Our mission? To create a platform for those in the Middle East to
          delve into venture capital, technology, and research advancements. We
          aim to keep you informed, engaged, and inspired. Welcome to Project
          Dune - where curiosity meets innovation, and knowledge knows no
          bounds.
        </p>
        <p>
          Reach out to us at <strong>dunevc@gmail.com</strong> for any inquiries
          or collaborations.
        </p>
        <button onClick={handleEmailClick} className="button-simple">
          Send a heyo.
        </button>
        <br />
        <a href="https://twitter.com/vcdune" target="_blank" rel="noreferrer">
          Our Twitter
        </a>
        <br />
        <a
          href="https://mailchi.mp/c50285f251ea/dune"
          target="_blank"
          rel="noreferrer"
        >
          Stay Updated
        </a>
      </div>
    </div>
  );
}
