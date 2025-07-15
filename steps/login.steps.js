const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('que el usuario está en la página de login', async function () {
  await this.loginPage.goto();
  await this.page.waitForTimeout(1500);
});

When('ingresa las credenciales válidas', async function () {
  await this.loginPage.login('standard_user', 'secret_sauce');
  await this.page.waitForTimeout(1500);
});

Then('debería ver la página de productos', async function () {
  expect(await this.productsPage.title.isVisible()).toBeTruthy();
});

When('ingresa las credenciales bloqueadas', async function () {
  await this.loginPage.login('locked_out_user', 'secret_sauce');
  await this.page.waitForTimeout(1500);
});

Then('debería ver un mensaje de error', async function () {
  const errorLocator = await this.page.locator('[data-test="error"]');
  const errorText = await errorLocator.textContent();
  expect(errorText.trim()).toBe('Epic sadface: Sorry, this user has been locked out.');
});
