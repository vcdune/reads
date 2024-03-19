export default function Component5() {
  return (
    <div
      className="page-view"
      style={{
        height: "130vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        backgroundColor: "black",
        marginBottom: "5%",
      }}
    >
      <div className="page-container" style={{ marginBottom: "3%" }}>
        <h3>
          <ul className="resource-list">
            <li>
              <h6>
                <a href="https://dune-terminal.vercel.app/">Dune Terminal</a>
              </h6>
              <p>
                Share insights, spark discussions, and have your startup story
                heard through our curated editorial space.
              </p>
            </li>
            <li>
              <h6>
                <a href="">Job Board (wip)</a>
              </h6>
              <p>
                Connect talent with opportunity through our Middle East-focused
                startup job board.
              </p>
            </li>
            <li>
              <h6>
                <a href="/community">Community (wip)</a>
              </h6>
              <p>
                A global network where MENA's founders, investors, and
                changemakers convene to collaborate.
              </p>
            </li>
            <li>
              <h6>
                <a href="">Newsletter (wip)</a>
              </h6>
              <p>
                Stay ahead of the curve with our newsletter highlighting the
                latest startup trends and founders to watch.
              </p>
              <h6>
                <a href="">Dune API (wip)</a>
              </h6>
              <p>
                An API for developers to access data on all the startups in the
                Middle East.
              </p>
            </li>
          </ul>
        </h3>
        <p>
          <span className="keyterm">don't be shy, send a hello.</span>
        </p>
        <p>
          Feel free to reach out to us at <strong>dunevc@gmail.com</strong> for
          any inquiries or collaborations.
        </p>
      </div>
    </div>
  );
}
