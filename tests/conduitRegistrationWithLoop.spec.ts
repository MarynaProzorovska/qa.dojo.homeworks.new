import { expect, test } from "@playwright/test";
import {
  articleToHaveText,
  goToHomePage,
  newArticleCreation,
  registrationConduit,
} from "../functions/conduitFunctions";

test.beforeEach(async ({ page }) => {
  await page.goto("https://demo.learnwebdriverio.com/register");
});

test("Sign up successfully - MP021", async ({ page }) => {
  const userName = "Maryna08";
  const email = "maryna08@gm.com";
  const password = "Test123";

  const title = "Maryna Title";
  const theme = "Test theme";
  const body = "Test body";
  const tag = "Test tag";

  await registrationConduit(page, userName, email, password);

  for (let i = 0; i < 10; i++) {
    await newArticleCreation(page, title + i, theme, body, tag);
  }

  await goToHomePage(page);

  const expectedTitles = [
    "Maryna Title9",
    "Maryna Title8",
    "Maryna Title7",
    "Maryna Title6",
    "Maryna Title5",
    "Maryna Title4",
    "Maryna Title3",
    "Maryna Title2",
    "Maryna Title1",
    "Maryna Title0",
  ];

  for (let i = 0; i < expectedTitles.length; i++) {
    await articleToHaveText(page, i, expectedTitles[i]);
  }
});
