const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav__inner">
        <a href="#top" className="nav__mark">
          Shiea
        </a>
        <nav className="nav__links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="link-underline">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
