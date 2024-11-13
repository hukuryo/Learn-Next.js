import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole("textbox").click();
  await page.getByRole("textbox").fill("ryohei");
  await page.getByRole("button", { name: "click me" }).click();
});
