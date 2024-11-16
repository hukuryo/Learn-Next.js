import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("textbox").click();
  await page.getByRole("textbox").fill("aaaa");
  await page.getByRole("button", { name: "click me" }).click();
  await page.getByRole("link", { name: "demo" }).click();
  await page.getByRole("link", { name: "home" }).click();
});
