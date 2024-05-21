import Header from "../components/Header";
import Landing from "../components/Welcome/Landing";
import Footer from "../components/Footer";
import Why from "../components/Welcome/why";

export default function Home() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <nav className="header hover-link">
        <ul className="nav">
          <li>
            <p>
              <em style={{ color: "#c2c2c2" }}>Early stage of development.</em>
            </p>
          </li>
        </ul>
      </nav>
      <Landing />
      {/* <Why /> */}
      <Footer />
    </div>
  );
}
