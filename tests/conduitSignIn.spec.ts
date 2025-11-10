import { test, expect } from "@playwright/test";
import { getAllLocatorsConduit } from "../functions/locatorFunctions";

test.beforeEach(async ({ page }) => {
  await page.goto("https://demo.learnwebdriverio.com/login");
});

test("Sign in with wrong email - MP010", async ({ page }) => {
  const locators = getAllLocatorsConduit(page);

  await locators.email.fill("teststst@tetet.com");
  await locators.password.fill("Test123");
  await locators.signInButton.click();
  await expect(locators.errorMessage4).toBeVisible();
});

test("Sign in with wrong password - MP011", async ({ page }) => {
  const locators = getAllLocatorsConduit(page);

  await locators.email.fill("Maryna20@test.com");
  await locators.password.fill("teeeest");
  await locators.signInButton.click();
  await expect(locators.errorMessage4).toBeVisible();
});

test("Successful sign in - MP012", async ({ page }) => {
  //Bug
  const locators = getAllLocatorsConduit(page);

  await locators.email.fill("Maryna20@test.com");
  await locators.password.fill("Test123");
  await locators.signInButton.click();
  await expect(locators.homePage).toBeVisible();
});
