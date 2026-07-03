import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AppLayout } from "./AppLayout";

describe("AppLayout", () => {
  it("links to Stuart's personal site from the footer", () => {
    render(
      <MemoryRouter>
        <AppLayout />
      </MemoryRouter>
    );

    const makerLink = screen.getByRole("link", { name: "Made by Stuart" });

    expect(makerLink).toHaveAttribute("href", "https://stuartd.dev");
    expect(makerLink).toHaveAttribute("target", "_blank");
    expect(makerLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
