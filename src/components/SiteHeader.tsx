import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import { siteContent } from "../content/siteContent";

const navigationItems = [
  { href: "/", label: "Hem", end: true },
  { href: "/about", label: "Om byrån" },
  { href: "/services", label: "Tjänster" },
  { href: "/contact", label: "Kontakt" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink className="site-header__brand" to="/">
          <span className="site-header__mark" aria-hidden="true">
            W
          </span>
          <span>
            <strong>{siteContent.brandName}</strong>
            <small>{siteContent.location}</small>
          </span>
        </NavLink>
        <button
          type="button"
          className="site-header__menu-button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => {
            setIsMenuOpen((current) => !current);
          }}
        >
          Meny
        </button>
        <nav
          id="primary-navigation"
          className={`site-header__nav${isMenuOpen ? " is-open" : ""}`}
          aria-label="Huvudnavigation"
        >
          {navigationItems.map((item) => (
            <NavLink
              key={item.href}
              className={({ isActive }) =>
                `site-header__link${isActive ? " is-active" : ""}`
              }
              to={item.href}
              end={item.end ?? false}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
