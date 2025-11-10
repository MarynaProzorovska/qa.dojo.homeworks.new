import { test, expect } from "@playwright/test";
import { getAllLocatorsCoffeeCart } from "../functions/locatorFunctions";

test.beforeEach(async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
});

test("Buying one coffee and verifying the purchase - MP001", async ({
  page,
}) => {
  const locators = getAllLocatorsCoffeeCart(page);

  await locators.espressoMacchiato.click();
  await expect(locators.checkout).toContainText("Total: $12.00");
  await locators.checkout.click();
  await locators.name.fill("maryna");
  await locators.email.fill("maryna@test.test");
  await locators.submitButton.click();
  await locators.successfulPurchase.isVisible();
  await expect(locators.checkout).toContainText("Total: $0.00");
});

test("Buying three caps of coffee with a discount coffee - MP002", async ({
  page,
}) => {
  const locators = getAllLocatorsCoffeeCart(page);

  await locators.mocha.dblclick();
  await locators.mocha.click();
  await expect(page.locator("#app")).toContainText(
    "It's your lucky day! Get an extra cup of Mocha for $4."
  );
  await locators.yesButton.click();
  await locators.checkout.hover();
  await expect(page.locator("#app")).toContainText(
    "(Discounted) Mocha x 1+-Mocha x 3+-"
  );
  await locators.checkout.click();
  await locators.name.fill("maryna");
  await locators.email.fill("maryna@test.test");
  await locators.submitButton.click();
  await locators.successfulPurchase.isVisible();
  await expect(locators.checkout).toContainText("Total: $0.00");
});

test("Declining coffee with a discount - MP003", async ({ page }) => {
  const locators = getAllLocatorsCoffeeCart(page);

  await locators.espressoMacchiato.click();
  await locators.cappuccino.click();
  await locators.americano.click();
  await locators.noButton.click();
  await locators.checkout;
  await expect(page.locator("#app")).toContainText(
    "Americano x 1+-Cappuccino x 1+-Espresso Macchiato x 1+-"
  );
  await expect(locators.checkout).toContainText("Total: $38.00");
});

test("Adding and removing coffee from the cart - MP004", async ({ page }) => {
  const locators = getAllLocatorsCoffeeCart(page);

  await locators.cappuccino.dblclick();
  await locators.cart.click();
  await locators.removeOneCappuccinoButton.click();
  await page.locator("div").filter({ hasText: /^Cappuccino$/ });
  await locators.removeAllCappuccinoButton.click();
  await page.getByText("No coffee, go add some.").click();
});

test("Adding and removing coffee from cart preview - MP005", async ({
  page,
}) => {
  const locators = getAllLocatorsCoffeeCart(page);

  await locators.cappuccino.dblclick();
  await expect(page.locator("#app")).toContainText("Cappuccino x 2");
  await locators.checkout.hover();
  await locators.removeOneCappuccinoButton.click();
  await expect(page.locator("#app")).toContainText("Cappuccino x 1");
  await expect(locators.checkout).toContainText("Total: $19.00");
  await locators.removeOneCappuccinoButton.click();
  await expect(locators.checkout).toContainText("Total: $0.00");
});
