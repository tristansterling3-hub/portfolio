import { handleAnchorClick } from "../smoothScroll.js";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="#home" className="logo" onClick={(e) => handleAnchorClick(e, "#home")}>
          &lt;Dev/&gt;
        </a>

        <nav className="nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleAnchorClick(e, link.href)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
