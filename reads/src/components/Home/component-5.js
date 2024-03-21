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
          <ul className="resource-list hover-link">
            <li>
              <h1 style={{ fontSize: "60px" }}>
                <span className="keyterm">whut</span> we made
              </h1>
              <br />
              <p>
                <a href="/community-blog">Dune Editorial Space</a>
              </p>
              <p>
                Got a product to unveil? A startup tale to share? Our editorial
                space is your megaphone.
              </p>
            </li>
            <li>
              <p>
                <a href="/directory">Startup Directory</a>
              </p>
              <p>Get to know the latest startups in the Middle-East.</p>
            </li>
            <li>
              <p>
                <a href="">Job Board (wip)</a>
              </p>
              <p>Find & hire talent through our MENA-based job board.</p>
            </li>
            <li>
              <p>
                <a href="/community">Community (wip)</a>
              </p>
              <p>
                A network to connect with MENA's founders, investors, and
                changemakers.
              </p>
            </li>
            <li>
              <p>
                <a href="https://mailchi.mp/c50285f251ea/dune">Newsletter (wip)</a>
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
