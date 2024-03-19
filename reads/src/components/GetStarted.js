export default function GetStarted() {
  return (
    <div
      className="page-view"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="page-container"
        style={{ width: "80%", maxWidth: "800px", textAlign: "center" }}
      >
        <h1
          style={{
            marginBottom: "3%",
            paddingBottom: "1%",
          }}
        >
          <span
            style={{
              alignContent: "left",
              animation: "glitch 1s linear infinite",
            }}
            className="keyterm"
          >
            Dune//C
          </span>
          <br />
          the place where cool $h!t happens
        </h1>
        <p>
          <strong>
            8,000+ readers,<br />
            100+ articles,<br />
            10+ startups, 5+ universities, 3+ VC
          </strong>
        </p>
        <a href="/community" style={{ textDecoration: "none" }}>
          <button style={{ cursor: "pointer" }}>Join the community</button>
        </a>
      </div>
    </div>
  );
}
