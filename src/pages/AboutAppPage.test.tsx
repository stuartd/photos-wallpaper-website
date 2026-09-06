import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AboutAppPage } from "./AboutAppPage";

describe("AboutAppPage", () => {
  it("leads with rediscovery and explains the local privacy model", () => {
    render(
      <MemoryRouter>
        <AboutAppPage />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: "See the photos you’d almost forgotten." })
    ).toBeInTheDocument();
    expect(screen.getByText("A free Mac app from Stuart")).toBeInTheDocument();
    expect(screen.getByText(/old holidays, ordinary days/)).toBeInTheDocument();
    expect(screen.getByRole("img", { name: /Photos Wallpaper menu/ })).toHaveAttribute(
      "src",
      "/pw-1280x800.png"
    );
    expect(
      screen.getByRole("heading", { name: "Your photos are not the product." })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/There is no account, no analytics, and no photo upload/)
    ).toBeInTheDocument();
    expect(screen.getByText(/runtime diagnostics are local plain-text files/)).toBeInTheDocument();
  });

  it("provides safe download and support destinations", () => {
    render(
      <MemoryRouter>
        <AboutAppPage />
      </MemoryRouter>
    );

    const download = screen.getByRole("link", { name: /Download free on the Mac App Store/ });
    expect(download).toHaveAttribute(
      "href",
      "https://apps.apple.com/gb/app/photos-wallpaper/id6769191842?mt=12"
    );
    expect(download).toHaveAttribute("target", "_blank");
    expect(download).toHaveAttribute("rel", "noopener noreferrer");
    expect(screen.getByRole("link", { name: "Email support" })).toHaveAttribute(
      "href",
      "mailto:support@photos-wallpaper.app"
    );
    expect(screen.getByRole("link", { name: "Open an issue" })).toHaveAttribute(
      "href",
      "https://github.com/stuartd/photos-wallpaper-website/issues/new"
    );
  });
});
