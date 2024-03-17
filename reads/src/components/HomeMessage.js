export default function HomeMessage() {
  return (
    <div className="page-view">
      <div className="page-container">
        <h1
          style={{
            marginBottom: "3%",
            paddingBottom: "1%",
          }}
        >
          <span className="keyterm">Hey dreamers,</span> we are Project Dune, a
          venture community based in the Middle East.
        </h1>
        <p>
          <strong>
            8,000+ readers, 100+ articles, 10+ startups, 5+ universities, 3+ VC
          </strong>
        </p>
        <h5 style={{ marginBottom: "5%", marginTop: "5%" }}>
          Project Dune x Middle East
        </h5>
        <p>
          <span className="keyterm">Introduction</span>
        </p>
        <p>
          We're the brains behind Project Dune, a news platform crafted by
          alumni of NYU Abu Dhabi, New York University, University of
          Washington, and UC Davis.
        </p>
        <p>
          <span className="keyterm">Our Mission?</span> To create a platform for
          those in the Middle East to delve into venture capital, technology,
          and research advancements. We aim to keep you informed, engaged, and
          inspired. Welcome to Project Dune - where curiosity meets innovation,
          and knowledge knows no bounds.
        </p>
        <p>
          It does not matter if you have founded a startup ($), are a student,
          or just have an idea. We are here to help you build dreams.
        </p>
        <p>
          <span className="keyterm">Our Resources</span>
        </p>
        <p>
          <ul className="resource-list">
            <li>
              <a href="/blog">Project Dune | Articles</a>
            </li>
            <li>
              <a href="/blog">Project Dune | Showcase</a>
            </li>
            <li>
              <a href="/blog">Project Dune | Newsletter</a>
            </li>
            <li>
              <a href="/blog">Project Dune | Community</a>
            </li>
          </ul>
        </p>
        {/* <p>
          <span className="keyterm">Project Dune by the Numbers</span>
        </p>
        <p>
          Feel free to reach out to us at <strong>contact@dune.com</strong> for
          any inquiries or collaborations.
        </p> */}
        <p>
          <span className="keyterm">Contact</span>
        </p>
        <p>
          Feel free to reach out to us at <strong>contact@dune.com</strong> for
          any inquiries or collaborations.
        </p>
      </div>
    </div>
  );
}
