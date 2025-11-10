import { test, expect } from "@playwright/test";
import { getAllLocatorsQaPathCheckboxes } from "../functions/locatorFunctions";

test.beforeEach(async ({ page }) => {
  await page.goto("https://demoqa.com/checkbox");
});

test("Check all boxes - MP019", async ({ page }) => {
  const locators = getAllLocatorsQaPathCheckboxes(page);

  await locators.expandAll.click();
  await locators.desktopCheckboxLocator.check();
  await expect(locators.desktopCheckboxLocator).toBeChecked();
  await locators.workSpaceCheckboxLocator.check();
  await expect(locators.workSpaceCheckboxLocator).toBeChecked();
  await locators.officeCheckboxLocator.check();
  await expect(locators.officeCheckboxLocator).toBeChecked();
  await locators.downloadsCheckboxLocator.check();
  await expect(locators.downloadsCheckboxLocator).toBeChecked();
});

//////////before
// const expandAll = page.locator("//*[@class='rct-icon rct-icon-expand-all']");
// const desktopCheckboxLocator2 = page.locator(
//   "//*[contains(@class, 'rct-title') and text()='Desktop'"
// ); //  було так and contains(., 'Desktop')]"
// const workSpaceCheckboxLocator = page.locator(
//   "//*[contains(@class, 'rct-title') and 'text='WorkSpace'"
// );
// const officeCheckboxLocator = page.locator(".rct-title:has-text('Office')");
// const downloadsCheckboxLocator = page.locator(
//   "//*[contains(@class, 'rct-title') and text='Downloads'"
// );
