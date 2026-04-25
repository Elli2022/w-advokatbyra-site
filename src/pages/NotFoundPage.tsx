import { Link } from "react-router";

export const handle = {
  title: "Sidan hittades inte",
};

export function Component() {
  return (
    <section className="page-section page-section--tight">
      <div className="not-found">
        <p className="eyebrow">404</p>
        <h1>Sidan du letar efter finns inte.</h1>
        <p>
          Länken kan vara gammal eller felstavad. Du kan fortsätta från startsidan
          eller gå direkt till kontakt om du söker något särskilt.
        </p>
        <div className="page-hero__actions">
          <Link className="button" to="/">
            Till startsidan
          </Link>
          <Link className="button button--ghost" to="/contact">
            Kontakta oss
          </Link>
        </div>
      </div>
    </section>
  );
}
