import { test, expect } from "@playwright/test";
import { getAllLocatorsQaPathForms } from "../functions/locatorFunctions";

test.beforeEach(async ({ page }) => {
  await page.goto("https://demoqa.com/text-box");
});

test("Filling the text box form and verifying the submission - MP018", async ({
  page,
}) => {
  const locators = getAllLocatorsQaPathForms(page);

  await locators.userNameLocator.fill("Maryna");
  await locators.userEmailLocator.fill("Marynaa@gmail.com");
  await locators.currentAddressLocator.fill("Kyiv, Solomianska str");
  await locators.permanentAddressLocator.fill("Lviv, Lisna str");
  await locators.submitButtonLocator.click();
  await expect(locators.responseName).toHaveText("Name:Maryna");
  await expect(locators.responseEmail).toHaveText("Email:Marynaa@gmail.com");
  await expect(locators.responseCurrentAddress).toHaveText(
    "Current Address :Kyiv, Solomianska str"
  );
  await expect(locators.responsePermanentAddress).toHaveText(
    "Permanent Address :Lviv, Lisna str"
  );
});
