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
          Feel free to reach out to us at <strong>dunevc@gmail.com</strong> for
          any inquiries or collaborations.
        </p>
        <button onClick={handleEmailClick}>Reach Out</button>
      </div>
    </div>
  );
}
