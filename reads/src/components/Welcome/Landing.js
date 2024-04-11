export default function Landing() {
  return (
    <>
      <div
        className="page-view"
        style={{
          height: "75vh",
          display: "flex",
          justifyContent: "center", // Adjust alignment as needed
          marginTop: "10%",
        }}
      >
        <div
          className="page-container"
          style={{
            display: "flex",
            flexDirection: "row", // Arrange columns horizontally
            width: "80%",
            maxWidth: "800px",
            textAlign: "left",
          }}
        >
          <div
            style={{
              flex: "1", // Take up half of the available space
              marginRight: "5%", // Adjust spacing between columns
            }}
          >
            <h1
              style={{
                marginBottom: "3%",
                paddingBottom: "1%",
              }}
            >
              <h1 style={{ fontSize: "100px" }}>Kitaab.</h1>
              <br />
              the writing platform that looks{" "}
              <span className="keyterm">good</span>.
            </h1>
            <p>
              <strong>
                {/* For MENA */}
                {/* <br /> */}
                {/* by dreamers */}
                {/* <br /> */}
                {/* Built in a university dorm. */}
              </strong>
            </p>
            <a href="/sign-in" style={{ textDecoration: "none" }}>
              <button style={{ cursor: "pointer" }} className="button-simple">
                Start Writing.
              </button>
            </a>
          </div>
          <div style={{ flex: "1" }}>
            <img
              src="https://images.unsplash.com/photo-1507671280192-5900ae887d3d?q=80&w=2374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Decorative Image"
              style={{ width: "100%", height: "auto", borderRadius: "30px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
