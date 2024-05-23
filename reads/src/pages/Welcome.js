import Landing from "../components/Landing";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div style={{ backgroundColor: "white" }}>
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
      <Footer />
    </div>
  );
}
