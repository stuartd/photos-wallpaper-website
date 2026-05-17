import { expect, test } from "@playwright/test";

test("home page renders the product story", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Photos Wallpaper" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "What it does" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Privacy Model" })).toBeVisible();
});
