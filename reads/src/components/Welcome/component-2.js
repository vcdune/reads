export default function Component2() {
  return (
    <div
      className="page-view"
      style={{
        height: "130vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <div
        className="page-container"
        style={{ width: "80%", maxWidth: "800px", textAlign: "center" }}
      >
        <h1>
          <strong>
            Oh, the places we'll <span className="keyterm">go</span>
            <br />
            <br />
            8,000+ users,
            <br />
            100+ posts,
            <br />
            10+ startups,
            <br />
            5+ universities,
            <br />
            3+ VC Partners.
          </strong>
        </h1>
      </div>
    </div>
  );
}