import { Link } from "react-router";

type Action = {
  href: string;
  label: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction?: Action;
  secondaryAction?: Action;
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-hero__description">{description}</p>
      {(primaryAction || secondaryAction) && (
        <div className="page-hero__actions">
          {primaryAction ? (
            <Link className="button" to={primaryAction.href}>
              {primaryAction.label}
            </Link>
          ) : null}
          {secondaryAction ? (
            <Link className="button button--ghost" to={secondaryAction.href}>
              {secondaryAction.label}
            </Link>
          ) : null}
        </div>
      )}
    </section>
  );
}
