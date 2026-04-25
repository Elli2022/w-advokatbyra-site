import {
  isRouteErrorResponse,
  Link,
  useRouteError,
} from "react-router";

export function RouteErrorPage() {
  const error = useRouteError();

  let title = "Något gick fel.";
  let description =
    "Vi kunde inte visa sidan just nu. Försök gärna igen eller gå tillbaka till startsidan.";

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      title = "Sidan hittades inte.";
      description =
        "Vi kunde inte hitta den adress du försökte öppna. Kontrollera länken eller gå vidare från startsidan.";
    } else {
      title = `Fel ${error.status}`;
    }
  }

  return (
    <section className="page-section page-section--tight">
      <div className="not-found">
        <p className="eyebrow">Felhantering</p>
        <h1>{title}</h1>
        <p>{description}</p>
        <Link className="button" to="/">
          Till startsidan
        </Link>
      </div>
    </section>
  );
}
