export default function Landing() {
  return (
    <>
      <div
        className="page-view"
        style={{
          height: "75vh",
          display: "flex",
          justifyContent: "center",
          marginTop: "5%",
          backgroundColor: "white",
          color: "black",
        }}
      >
        <div
          className="page-container"
          style={{
            display: "flex",
            flexDirection: "row",
            width: "80%",
            maxWidth: "1000px",
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
              <h1 style={{ fontSize: "126px" }}>Arete</h1>
              <br />
              the writing platform where <span className="keyterm">design</span>x
              <span className="keyterm">words</span>.
            </h1>
            <p>
              <strong>Built in a college dorm @ NYU.</strong>
            </p>
            <a href="/sign-in" style={{ textDecoration: "none" }}>
              <button className="button-simple">
                Start writing{" "}
                <svg
                  width="9"
                  height="7"
                  viewBox="0 0 9 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.08709 0.459961L8.05509 3.42796L5.08709 6.39596H3.50509L5.84309 4.04396H0.663086V2.79796L5.84309 2.81196L3.50509 0.459961H5.08709Z"
                    fill="white"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
