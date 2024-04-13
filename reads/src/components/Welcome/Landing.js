export default function Landing() {
  return (
    <>
      <div
        className="page-view"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          marginTop: "10%",
        }}
      >
        <div
          className="page-container"
          style={{
            display: "flex",
            flexDirection: "row",
            width: "80%",
            maxWidth: "800px",
            textAlign: "left",
          }}
        >
          <div
            style={{
              flex: "1",
              marginRight: "5%",
            }}
          >
            <h1
              style={{
                marginBottom: "3%",
                paddingBottom: "1%",
                width: "70%",
              }}
            >
              <h1 style={{ fontSize: "126px", color: "#333333"}}>
              Kitaab
              </h1>
              <br />
              the writing platform where <span className="keyterm">art</span>x
              <span className="keyterm">words</span>.
            </h1>
            <p>
              <strong>Built in a college dorm @ NYU.</strong>
            </p>
            <a href="/sign-in" style={{ textDecoration: "none" }}>
              <button style={{ cursor: "pointer" }} className="button-simple">
                Start Writing.
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
