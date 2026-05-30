import React from "react";

function Container({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const classes = ["section-shell", className].filter(Boolean).join(" ");
  return <div className={classes}>{children}</div>;
}

export default Container;
