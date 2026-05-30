import React from "react";

function Container({ children }: { children?: React.ReactNode }) {
  return <div style={{ padding: "20px" }}>{children}</div>;
}

export default Container;
