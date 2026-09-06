import { expect, test } from "@playwright/test";

test("home page tells the product story and exposes the important links", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "See the photos you’d almost forgotten." })
  ).toBeVisible();
  await expect(page.getByText("A free Mac app from Stuart")).toBeVisible();
  await expect(page.getByRole("img", { name: /Photos Wallpaper menu/ })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Your library, in the background." })
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Your photos are not the product." })
  ).toBeVisible();

  const download = page.getByRole("link", { name: /Download free on the Mac App Store/ });
  await expect(download).toHaveAttribute("href", /apps\.apple\.com/);
  await expect(download).toHaveAttribute("target", "_blank");
  await expect(page.getByRole("link", { name: "Email support" })).toHaveAttribute(
    "href",
    "mailto:support@photos-wallpaper.app"
  );
  await expect(
    page.getByRole("contentinfo").getByRole("link", { name: "App source" })
  ).toHaveAttribute("href", "https://github.com/stuartd/photos-wallpaper#readme");
});

test("keyboard users can skip to the main content", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Skip to content" });
  await expect(skipLink).toBeFocused();
  await skipLink.press("Enter");
  await expect(page).toHaveURL(/#main-content$/);
});

test("the home page remains usable on a small screen", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "See the photos you’d almost forgotten." })
  ).toBeVisible();
  await expect(page.getByRole("link", { name: /Get the free app/ })).toBeVisible();
  await expect(page.getByRole("img", { name: /Photos Wallpaper menu/ })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(
    true
  );
});
