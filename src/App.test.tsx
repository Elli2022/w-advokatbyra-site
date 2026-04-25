import { render, screen } from "@testing-library/react";
import { RouterProvider } from "react-router/dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createTestRouter } from "./router";

describe("app routing", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockRejectedValue(new Error("Nyhetsflödet är avstängt i test"))
    );
  });

  it("renders the home page content", async () => {
    render(<RouterProvider router={createTestRouter(["/"])} />);

    expect(
      await screen.findByRole("heading", {
        level: 1,
        name: /Juridik som skapar handlingsutrymme/i,
      })
    ).toBeInTheDocument();
  });

  it("renders the not found page for unknown routes", async () => {
    render(<RouterProvider router={createTestRouter(["/saknas"])} />);

    expect(
      await screen.findByRole("heading", {
        level: 1,
        name: /Sidan du letar efter finns inte/i,
      })
    ).toBeInTheDocument();
  });
});
