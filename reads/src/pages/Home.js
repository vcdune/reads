import Header from "../components/header";
import Landing from "../components/home/landing";
import Component2 from "../components/home/component-2";
import Component3 from "../components/home/component-3";
import Component4 from "../components/home/component-4";
import Component5 from "../components/home/component-5";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Landing />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Footer />
    </>
  );
}
