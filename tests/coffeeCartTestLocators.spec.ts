import {test, expect} from "@playwright/test";

test.beforeEach(async ({page}) => {
    await page.goto('https://coffee-cart.app/')
})

test('Buying one coffee and verifying the purchase - MP013', async ({ page }) => {
const espressoMacchiato = page.locator('[data-test="Espresso_Macchiato"]')
const checkout = page.locator('[data-test="checkout"]')
const name = page.locator('id=name')
const email = page.locator('id=email')
const submitPayment = page.locator('id=submit-payment')
const snackbarSuccess = page.locator('.snackbar success')

  await espressoMacchiato.click();
  await expect(checkout).toContainText('Total: $12.00');
  await checkout.click();
  await name.fill('maryna');
  await email.fill('maryna@test.test');
  await submitPayment.click();
  await snackbarSuccess.isVisible();
  await expect(checkout).toContainText('Total: $0.00');
});

test('Buying three caps of coffee with a discount coffee - MP014', async ({ page }) => {
const mocha = page.locator('[data-test="Mocha"]')
const promo = page.locator('.promo')
const yesButton = page.locator('.yes')
const checkout = page.locator('data-test=checkout')
const listItemDiscounted = page.locator('.list-item', {hasText: '(Discounted) Mocha x 1'})
const listMocha = page.locator('.list-item', {hasText: 'Mocha x 3'})
const name = page.locator('id=name')
const email = page.locator('id=email')
const submitPayment = page.locator('id=submit-payment')
const snackbarSuccess = page.locator('.snackbar success')

await mocha.dblclick();
await mocha.click();
await expect(promo).toContainText("It's your lucky day! Get an extra cup of Mocha for $4.");
await yesButton.click();
await checkout.hover();
await expect(listItemDiscounted).toBeVisible();
await expect(listMocha).toBeVisible();
await checkout.click();
await name.fill('maryna');
await email.fill('maryna@test.test');
await submitPayment.click();
await snackbarSuccess.isVisible();
await expect(checkout).toContainText('Total: $0.00');
});

test('Declining coffee with a discount - MP015', async ({ page }) => {
const espressoMacchiato = page.locator('[data-test="Espresso_Macchiato"]')
const cappuccino = page.locator('[data-test="Cappuccino"]')
const americano = page.locator('[data-test="Americano"]')
const noButton = page.getByRole('button', { name: 'Nah, I\'ll skip.' }) // нема по чому знайти
const checkout = page.locator('data-test=checkout')
const listAmericano = page.locator('li', {hasText: 'Americano x 1'})
const listCappuccino = page.locator('li', {hasText: 'Cappuccino x 1'})
const listEsspressoMacciato = page.locator('li', {hasText: 'Espresso Macchiato x 1'})

  
  await espressoMacchiato.click();
  await cappuccino.click();
  await americano.click();
  await noButton.click(); 
  await checkout.hover();
  await expect(listAmericano).toBeVisible();
  await expect(listCappuccino).toBeVisible();
  await expect(listEsspressoMacciato).toBeVisible() ;
  await expect(checkout).toContainText('Total: $38.00');
})

test('Adding and removing coffee from the cart - MP016', async ({ page }) => {
const cappuccino = page.locator('[data-test="Cappuccino"]')
const cart = page.locator('[aria-label="Cart page"]')
const remove = page.getByRole('button', {name: "Remove one Cappuccino"}) // по лейблу не можна, бо знаходить два елементи
const totalPrice = page.locator('.unit-desc', {hasText: '$19.00 x 1'})
const removeAll = page.locator('[aria-label="Remove all Cappuccino"]')
const noCoffee = page.locator('.list', {hasText: 'No coffee, go add some.'})

  await cappuccino.dblclick();
  await cart.click();
  await remove.click(); 
  await expect(totalPrice).toBeVisible()
  await removeAll.click();
  await noCoffee.click();
});

test('Adding and removing coffee from cart preview - MP017', async ({ page }) => {
const cappuccino = page.locator('[data-test="Cappuccino"]')
const checkout = page.locator('[data-test="checkout"]')
const totalCoffee1 = page.locator('li', {hasText: 'Cappuccino x 2'})
const totalCoffee2 = page.locator('li', {hasText: 'Cappuccino x 1'})
const remove = page.locator('[aria-label="Remove one Cappuccino"]')

  await cappuccino.dblclick();
  await checkout.hover();
  await expect(totalCoffee1).toBeVisible();
  await expect(checkout).toContainText('Total: $38.00');
  await remove.click();
  await expect(totalCoffee2).toBeVisible();
  await expect(checkout).toContainText('Total: $19.00');
  await remove.click();
  await expect(checkout).toContainText('Total: $0.00');
});