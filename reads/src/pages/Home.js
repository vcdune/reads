import Header from "../components/Header";
import Landing from "../components/Welcome/Landing";
import Component2 from "../components/Welcome/component-2";
import Component3 from "../components/Welcome/component-3";
import Component4 from "../components/Welcome/component-4";
import Component5 from "../components/Welcome/component-5";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Landing />
      {/* <Component2 /> */}
      <Component3 />
      {/* <Component4 /> */}
      {/* <Component5 /> */}
      <Footer />
    </>
  );
}
