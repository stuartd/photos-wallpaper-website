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
    expect(screen.getByText(/no account system, analytics, ads, telemetry/)).toBeInTheDocument();
    expect(screen.getByText(/Generated wallpaper files are local cache files/)).toBeInTheDocument();
    expect(screen.getByText(/Multi-display aware/)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Support" })).toBeInTheDocument();
    expect(screen.getByText(/System Settings > Privacy & Security > Photos/)).toBeInTheDocument();
    expect(screen.getByText(/Change Wallpaper Now/)).toBeInTheDocument();
    expect(screen.getByText(/Start at Login toggle/)).toBeInTheDocument();
    expect(screen.getByText(/Logs > Show Wallpaper History/)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Email support" })).toHaveAttribute(
      "href",
      "mailto:support@photos-wallpaper.app"
    );
    expect(screen.getByRole("link", { name: "Open an issue" })).toHaveAttribute(
      "href",
      "https://github.com/stuartd/photos-wallpaper-website/issues"
    );
  });
});
