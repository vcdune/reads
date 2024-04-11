import Header from "../components/Header";
import Landing from "../components/Welcome/Landing";
import Component3 from "../components/Welcome/component-3";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <nav className="header hover-link">
        <ul className="nav">
          <li>
            <p>
              <em>Early stage of development.</em>
            </p>
          </li>
        </ul>
      </nav>
      <Landing />
      <Component3 />
      <Footer />
    </div>
  );
}
