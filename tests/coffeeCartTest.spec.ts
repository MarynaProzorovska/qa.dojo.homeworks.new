import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://coffee-cart.app/");
});

test("Buying one coffee and verifying the purchase - MP001", async ({
  page,
}) => {
  const espressoMacchiato = page.getByText(
    "Espresso Macchiato $12.00espressomilk foam"
  );
  const checkout = page.locator('[data-test="checkout"]');
  const name = page.getByRole("textbox", { name: "Name" });
  const email = page.getByRole("textbox", { name: "Email" });
  const submitButton = page.getByRole("button", { name: "Submit" });
  const successfulPurchase = page.getByRole("button", {
    name: "Thanks for your purchase.",
  });

  await espressoMacchiato.click();
  await expect(checkout).toContainText("Total: $12.00");
  await checkout.click();
  await name.fill("maryna");
  await email.fill("maryna@test.test");
  await submitButton.click();
  await successfulPurchase.isVisible();
  await expect(checkout).toContainText("Total: $0.00");
});

test("Buying three caps of coffee with a discount coffee - MP002", async ({
  page,
}) => {
  const mocha = page.locator('[data-test="Mocha"]');
  const yesButton = page.getByRole("button", { name: "Yes, of course!" });
  const checkout = page.locator('[data-test="checkout"]');
  const name = page.getByRole("textbox", { name: "Name" });
  const email = page.getByRole("textbox", { name: "Email" });
  const submitButton = page.getByRole("button", { name: "Submit" });
  const successfulPurchase = page.getByRole("button", {
    name: "Thanks for your purchase.",
  });

  await mocha.dblclick();
  await mocha.click();
  await expect(page.locator("#app")).toContainText(
    "It's your lucky day! Get an extra cup of Mocha for $4."
  );
  await yesButton.click();
  await checkout.hover();
  await expect(page.locator("#app")).toContainText(
    "(Discounted) Mocha x 1+-Mocha x 3+-"
  );
  await checkout.click();
  await name.fill("maryna");
  await email.fill("maryna@test.test");
  await submitButton.click();
  await successfulPurchase.isVisible();
  await expect(checkout).toContainText("Total: $0.00");
});

test("Declining coffee with a discount - MP003", async ({ page }) => {
  const espressoMacchiato = page.getByText(
    "Espresso Macchiato $12.00espressomilk foam"
  );
  const cappuccino = page.locator('[data-test="Cappuccino"]');
  const americano = page.locator('[data-test="Americano"]');
  const noButton = page.getByRole("button", { name: "Nah, I'll skip." });
  const checkout = page.locator('[data-test="checkout"]');

  await espressoMacchiato.click();
  await cappuccino.click();
  await americano.click();
  await noButton.click();
  await checkout;
  await expect(page.locator("#app")).toContainText(
    "Americano x 1+-Cappuccino x 1+-Espresso Macchiato x 1+-"
  );
  await expect(checkout).toContainText("Total: $38.00");
});

test("Adding and removing coffee from the cart - MP004", async ({ page }) => {
  const cappuccino = page.locator('[data-test="Cappuccino"]');
  const cart = page.getByRole("listitem").filter({ hasText: "cart" });
  const removeOneCappuccinoButton = page.getByRole("button", {
    name: "Remove one Cappuccino",
  });
  const removeAllCapuccinoButton = page.getByRole("button", {
    name: "Remove all Cappuccino",
  });

  await cappuccino.dblclick();
  await cart.click();
  await removeOneCappuccinoButton.click();
  await page.locator("div").filter({ hasText: /^Cappuccino$/ });
  await removeAllCapuccinoButton.click();
  await page.getByText("No coffee, go add some.").click();
});

test("Adding and removing coffee from cart preview - MP005", async ({
  page,
}) => {
  const cappuccino = page.locator('[data-test="Cappuccino"]');
  const checkout = page.locator('[data-test="checkout"]');
  const removeOneCappuccinoButton = page.getByRole("button", {
    name: "Remove one Cappuccino",
  });

  await cappuccino.dblclick();
  await expect(page.locator("#app")).toContainText("Cappuccino x 2");
  await checkout.hover();
  await removeOneCappuccinoButton.click();
  await expect(page.locator("#app")).toContainText("Cappuccino x 1");
  await expect(checkout).toContainText("Total: $19.00");
  await removeOneCappuccinoButton.click();
  await expect(checkout).toContainText("Total: $0.00");
});
