import { test, expect } from "@playwright/test";
import { getAllLocatorsConduit } from "../functions/locatorFunctions";

test.beforeEach(async ({ page }) => {
  await page.goto("https://demo.learnwebdriverio.com/register");
});

test("Sign up with wrong email - MP006", async ({ page }) => {
  const locators = getAllLocatorsConduit(page);

  await locators.userName.fill("Maryna3");
  await locators.email.fill("Maryna");
  await locators.password.fill("Test123");
  await locators.signupButton.click();
  await expect(locators.errorMessage1).toBeVisible();
});

test("Sign up with empty password - MP007", async ({ page }) => {
  //BUG
  const locators = getAllLocatorsConduit(page);

  await locators.userName.fill("Maryna10");
  await locators.email.fill("Maryna10@test.com");
  await locators.password.fill("");
  await locators.signupButton.click();
  await expect(locators.errorMessage1).toBeVisible();
});

test("Sign up successfully - MP008", async ({ page }) => {
  const locators = getAllLocatorsConduit(page);

  await locators.userName.fill("Maryna20");
  await locators.email.fill("Maryna20@test.com");
  await locators.password.fill("Test123");
  await locators.signupButton.click();
  await expect(page).toHaveURL("https://demo.learnwebdriverio.com/");
  // const successMessage = await page.getByText('conduitA place to share your');
  // expect(mainPageHeader).toBeVisible();
});
test("Sign up with the same username - MP009", async ({ page }) => {
  const locators = getAllLocatorsConduit(page);

  await locators.userName.fill("Maryna8");
  await locators.email.fill("Maryna8@test.com");
  await locators.password.fill("Test123");
  await locators.signupButton.click();
  await expect(locators.errorMessage2).toBeVisible();
  await expect(locators.errorMessage3).toBeVisible();
});
