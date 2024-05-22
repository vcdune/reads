import QuillEditor from "../components/QuillEditor";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TextEditor() {
  document.body.style = `background: #f9fbfd`;
  return (
    <>
      <Header />
      <QuillEditor />
      <Footer />
    </>
  );
}
