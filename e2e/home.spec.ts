import { expect, test } from "@playwright/test";

test("home page renders the product story", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Photos Wallpaper" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "What it does" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Privacy Model" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Support" })).toBeVisible();
  await expect(page.getByText("Check Photos permission")).toBeVisible();
  await expect(
    page.getByRole("contentinfo").getByRole("link", { name: "Privacy" })
  ).toHaveAttribute("href", "/#privacy");
  await expect(
    page.getByRole("contentinfo").getByRole("link", { name: "Support" })
  ).toHaveAttribute("href", "/#support");
  await expect(
    page.getByRole("contentinfo").getByRole("link", { name: "Made by Stuart" })
  ).toHaveAttribute("href", "https://stuartd.dev");
  await expect(
    page.getByRole("contentinfo").getByRole("link", { name: "Made by Stuart" })
  ).toHaveAttribute("target", "_blank");
  await expect(
    page.getByRole("contentinfo").getByRole("link", { name: "Made by Stuart" })
  ).toHaveAttribute("rel", "noopener noreferrer");
});
