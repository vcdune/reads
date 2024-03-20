import React from 'react';

export default function Landing() {
  return (
    <div className="page-view" style={{ height: "90vh", display: "flex", justifyContent: "left", alignItems: "left", marginTop: "10%" }}>
      <div className="page-container" style={{ width: "80%", maxWidth: "800px", textAlign: "left" }}>
        <h1 style={{ marginBottom: "3%", paddingBottom: "1%" }}>
          <span style={{ fontSize: "100px" }}>VCDune.</span><br />
          the <span className="">oasis</span> where cool <span className="keyterm">$h!t</span> happens
        </h1>
        <p>
          <strong>
            For MENA<br />
            by dreamers<br />
            Built in a university dorm.
          </strong>
        </p>
        <a href="/community-blog" style={{ textDecoration: "none" }}>
          <button style={{ cursor: "pointer" }} className="button-simple">Explore.</button>
        </a>
        
      </div>
    </div>
  );
}
