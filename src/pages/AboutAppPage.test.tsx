import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AboutAppPage } from "./AboutAppPage";

describe("AboutAppPage", () => {
  it("explains the app and its local-first privacy posture", () => {
    render(
      <MemoryRouter>
        <AboutAppPage />
      </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: "Photos Wallpaper" })).toBeInTheDocument();
    expect(screen.getByText(/No account, analytics, uploads/)).toBeInTheDocument();
    expect(screen.getByText(/Multi-display aware/)).toBeInTheDocument();
  });
});
