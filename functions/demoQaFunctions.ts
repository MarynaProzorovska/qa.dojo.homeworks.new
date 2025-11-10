import { Page } from "playwright";
import { getAllLocatorsQaPathPracticeForm } from "./locatorFunctions";

export async function fillForm(page: Page, data: Record<string, any>) {
  const locators = getAllLocatorsQaPathPracticeForm(page);

  if (data.firstName) {
    await locators.name.fill(data.firstName);
  }
  if (data.lastName) {
    await locators.lastName.fill(data.lastName);
  }
  if (data.email) {
    await locators.email.fill(data.email);
  }
  if (data.gender) {
    await page.getByText(data.gender).click();
  }
  if (data.mobile) {
    await locators.mobile.fill(data.mobile);
  }
  if (data.dateOfBirth) {
    await locators.dateOfBirthInput.fill(data.dateOfBirth);
    await page.keyboard.press("Enter");
  }
  if (data.subjects) {
    for (const subject of data.subjects) {
      await locators.subjects.fill(subject);
      await page.keyboard.press("Enter");
    }
  }
  if (data.hobby) {
    for (const hobby of data.hobbies) {
      await page.getByText(hobby).click();
    }
  }
  if (data.currentAddress) {
    await locators.currentAddress.fill(data.currentAddress);
  }
  if (data.state) {
    await locators.state.scrollIntoViewIfNeeded();
    await locators.state.click();
    await locators.stateExpandMenu.isVisible();
    await page.getByText(data.state).click();
  }
  if (data.city) {
    await locators.city.scrollIntoViewIfNeeded();
    await locators.city.click();
    await page.getByText(data.city).click({ force: true });
  }
}
