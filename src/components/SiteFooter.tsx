import { NavLink } from "react-router";
import { siteContent } from "../content/siteContent";

const footerLinks = [
  { href: "/", label: "Hem" },
  { href: "/about", label: "Om byrån" },
  { href: "/services", label: "Tjänster" },
  { href: "/contact", label: "Kontakt" },
  { href: "/disclaimer", label: "Friskrivning" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="eyebrow">W Advokatbyrå</p>
          <p className="site-footer__text">{siteContent.tagline}</p>
        </div>
        <div>
          <p className="site-footer__heading">Adress</p>
          <p className="site-footer__text">
            {siteContent.officeAddress.street}
            <br />
            {siteContent.officeAddress.postalCode}
            <br />
            {siteContent.officeAddress.country}
          </p>
        </div>
        <nav aria-label="Sidfot">
          <p className="site-footer__heading">Snabblänkar</p>
          <div className="site-footer__nav">
            {footerLinks.map((link) => (
              <NavLink key={link.href} to={link.href}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>
      <p className="site-footer__meta">{year} © {siteContent.brandName}</p>
    </footer>
  );
}
