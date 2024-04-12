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
              the writing platform where <span className="keyterm">art</span>x
              <span className="keyterm">words</span>.
            </h1>
            <p>
              <strong>
                {/* For MENA */}
                {/* <br /> */}
                {/* by dreamers */}
                {/* <br /> */}
                Built from a university dorm @ NYU.
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
              src="https://cdn.pixabay.com/photo/2023/09/18/19/35/heron-8261289_1280.jpg"
              alt="Decorative Image"
              style={{ width: "100%", height: "auto", borderRadius: "30px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
