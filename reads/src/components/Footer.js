export default function Footer() {
  return (
    <div
      style={{
        minHeight: "25vh",
        display: "flex",
        flexDirection: "column",
        borderRadius: "8px",
      }}
    >
      <div class="container" style={{ flex: "1" }}></div>
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <a href="#" class="nav-link px-2">
              Socials
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link px-2">
              FAQs
            </a>
          </li>
          <li class="nav-item">
            <a href="/pages/UG10wTSFOKXcRqaWfLz8" class="nav-link px-2">
              About
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
