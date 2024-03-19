export default function HomeMessage() {
  return (
    <div
      className="page-view"
      style={{ backgroundColor: "#f1f4f7", marginBottom: "5%" }}
    >
      <div className="page-container" style={{ marginBottom: "3%" }}>
        <h1>
          <span className="keyterm">a message from the team.</span>
        </h1>
        <p style={{ lineHeight: "2" }}>
          <strong>We're the brains behind 'Project Dune' -</strong> a platform
          designed for the Middle East's entrepreneurial dreamers. Our mission
          is to create a platform for the region's startup ambitions.
        </p>
        <p style={{ lineHeight: "2" }}>
          Unlock your potential with Project Dune - the launchpad for MENA's
          entrepreneurial community. Embrace the future as we collectively shape
          the region's startup revolution, one visionary mind at a time.
        </p>
        <p style={{ lineHeight: "2" }}>
          <strong>Project Dune is your startup community. </strong>
          It does not matter if you have founded a startup ($), are a student,
          or just have an idea.{" "}
        </p>
      </div>
    </div>
  );
}
