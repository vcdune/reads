export default function Component3() {
  return (
    <div
      className="page-view"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        backgroundColor: "#f7f7f0",
      }}
    >
      <div className="page-container" style={{ marginBottom: "3%" }}>
        <h1>
          <a href="/pages/IlRxuneCzplHkSKrNYK0">
            <span className="keyterm">a message from the team</span>
          </a>
        </h1>
        <p style={{ lineHeight: "2", fontSize: "22px" }}>
          <strong>We're the brains behind 'Project Dune' -</strong> a platform
          designed for the Middle East's entrepreneurial dreamers. Our mission
          is to create a publishing platform for voices in the region.
        </p>
        <p style={{ lineHeight: "2", fontSize: "22px" }}>
          Thank you for being here as we collectively shape the region's startup
          culture, one visionary mind at a time.
        </p>
        {/* <p style={{ lineHeight: "2", fontSize: "22px" }}>
          <strong>Disclaimer:</strong>{" "}
          <em>
            Project Dune is a community built for the 'crazy ones', the
            'misfits', and the 'rebels'.
          </em>
        </p> */}
      </div>
    </div>
  );
}
