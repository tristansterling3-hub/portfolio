import { handleAnchorClick } from "../smoothScroll.js";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-wrap">
        <p>© {new Date().getFullYear()} Tristan Sterling</p>
        <a href="#home" onClick={(e) => handleAnchorClick(e, "#home")}>
          Back to top
        </a>
      </div>
    </footer>
  );
}
