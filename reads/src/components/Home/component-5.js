export default function Component5() {
  return (
    <div
      className="page-view"
      style={{
        height: "200vh",
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
              <h1 style={{ fontSize: "60px" }}>
                <span className="keyterm">whut</span> we made
              </h1>
              <br />
              <p>
                <a href="https://dune-terminal.vercel.app/">Dune Terminal</a>
              </p>
              <p>
                Have your startup story heard & work seen through our curated
                editorial space.
              </p>
            </li>
            <li>
              <p>
                <a href="">Job Board (wip)</a>
              </p>
              <p>Find talent through our MENA-based startup job board.</p>
            </li>
            <li>
              <p>
                <a href="/community">Community (wip)</a>
              </p>
              <p>
                A network where MENA's founders, investors, and changemakers
                convene to collaborate.
              </p>
            </li>
            <li>
              <p>
                <a href="">Newsletter (wip)</a>
              </p>
              <p>
                Stay ahead of the curve with our newsletter highlighting the
                latest projects and founders to watch.
              </p>
              <p>
                <a href="">Dune API (wip)</a>
              </p>
              <p>
                For developers to access data on the startups in the region.
              </p>
            </li>
          </ul>
        </h3>
        <p>
          <span className="keyterm">don't be shy, send a hello.</span>
        </p>
        <p>
          Feel free to reach out to us at <strong>dunevc@gmail.com</strong>.
        </p>
      </div>
    </div>
  );
}
