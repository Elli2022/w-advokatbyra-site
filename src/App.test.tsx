import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => ({
      articles: [
        {
          title: "Testartikel",
          description: "Verifierar att nyhetssektionen uppdateras korrekt.",
          category: "Test",
          publishedAt: "2026-04-30T08:00:00.000Z",
        },
      ],
    }),
  }) as jest.Mock;
});

afterEach(() => {
  jest.resetAllMocks();
});

test("renders the home hero and navigation", async () => {
  render(<App />);
  expect(
    screen.getByRole("heading", {
      name: /trygg juridisk rådgivning för företag och entreprenörer/i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /boka ett första samtal/i })
  ).toBeInTheDocument();
  expect(
    await screen.findByRole("heading", { name: /testartikel/i })
  ).toBeInTheDocument();
  await waitFor(() => {
    expect(global.fetch).toHaveBeenCalled();
  });
});
