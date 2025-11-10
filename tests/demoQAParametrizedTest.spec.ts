import test from "playwright/test";
import { fillForm } from "../functions/demoQaFunctions";
import { getAllLocatorsQaPathPracticeForm } from "../functions/locatorFunctions";

test.beforeEach(async ({ page }) => {
  await page.route(new RegExp("ad"), (route) => {
    route.abort(); // Block the request
  });
});

const testData = [
  {
    name: "All fields",
    data: {
      firstName: "Marta",
      lastName: "Merge",
      email: "marta@test.com",
      gender: "female",
      mobile: "754-06-34",
      dateOfBirth: "19.12.2001,",
      subjects: ["Maths", "English"],
      hobbies: ["Reading", "Sport"],
      currentAddress: "Long avenue, 45 F",
      state: "Haryana",
      city: "Panipat",
    },
  },
  {
    name: "Only mandatory fields",
    data: {
      firstName: "Alexandra",
      lastName: "Soldatova",
      gender: "Female",
      mobile: "475-89-87",
      dateOfBirth: "12-12-2000",
    },
  },
  {
    name: "Only not mandatory fields",
    data: {
      email: "dan@test.com",
      subjects: ["Physics", "Hindy", "History"],
      hobbies: ["Reading", "Sport"],
      currentAddress: "Long avenue, 45 F",
      state: "Rajasthan",
      city: "Jaiselmer",
    },
  },
];

for (const { name, data } of testData) {
  test(`Parametrized test for practice form - ${name}`, async ({ page }) => {
    const locators = getAllLocatorsQaPathPracticeForm(page);

    await page.goto("https://demoqa.com/automation-practice-form");
    await fillForm(page, data);

    await locators.submitButton.click();
  });
}
