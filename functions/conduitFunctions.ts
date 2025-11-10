import { expect, Page } from "playwright/test";
import { getAllLocatorsConduit } from "../functions/locatorFunctions";

export async function registrationConduit(
  page: Page,
  userName: string,
  email: string,
  password: string
) {
  const locators = getAllLocatorsConduit(page);
  await locators.userName.fill(userName);
  await locators.email.fill(email);
  await locators.password.fill(password);
  await locators.signupButton.click();
  await expect(locators.successfulLoginBanner).toBeVisible();
}

export async function newArticleCreation(
  page: Page,
  title: string,
  theme: string,
  body: string,
  tag: string
) {
  const locators = getAllLocatorsConduit(page);
  await locators.newArticleButton.click();

  await locators.articleTitle.fill(title);
  await locators.articleTheme.fill(theme);
  await locators.articleBody.fill(body);
  await locators.articleTag.fill(tag);

  await locators.publishArticleButton.click();
  await expect(locators.existedArticle).toHaveText(title);
}

export async function goToMyArticles(page: Page, name: string) {
  const locators = getAllLocatorsConduit(page);
}

export async function goToHomePage(page: Page) {
  const locators = getAllLocatorsConduit(page);
  await locators.conduitLinkToHomePage.click();
  await expect(locators.homePage).toBeVisible();
}

export async function articleToHaveText(
  page: Page,
  index: number,
  title: string
) {
  const locators = getAllLocatorsConduit(page);
  const element = locators.article.nth(index);
  await expect(element).toHaveText(title);
}
