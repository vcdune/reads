import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Community() {
  return (
    <div>
      <Header />
      <div className="page-view">
        <div className="page-container">
          <h1>Community</h1>
          <p className="keyterm">Work In Progress, stop by later</p>
          <p>Join the community of Dune readers and writers. <a href="https://dune-terminal.vercel.app/">Dune Terminal.</a></p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
