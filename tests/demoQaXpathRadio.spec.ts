import { test, expect } from "@playwright/test";
import {
  getAllLocatorsQaPathForms,
  getAllLocatorsQaPathRadioButtons,
} from "../functions/locatorFunctions";

test.beforeEach(async ({ page }) => {
  await page.goto("https://demoqa.com/radio-button");
});

test("Check radio buttons - MP020", async ({ page }) => {
  const locators = getAllLocatorsQaPathRadioButtons(page);

  await locators.yesRadioLocator.check();
  await expect(locators.yesRadioLocator).toBeChecked();
  await expect(locators.successTextLocator).toHaveText("Yes");

  await locators.impressiveRadioLocator.click();
  await expect(locators.impressiveRadioLocator).toBeChecked();
  await expect(locators.successTextLocator).toHaveText("Impressive");

  await expect(locators.noRadioLocator).toBeDisabled();
});
