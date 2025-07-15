const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { CartPage } = require('../pages/CartPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { LoginPage } = require('../pages/LoginPage');

Given('que el usuario tiene productos en el carrito', async function () {
  this.loginPage = new LoginPage(this.page);
  this.productsPage = new ProductsPage(this.page);
  this.cartPage = new CartPage(this.page);
  await this.loginPage.goto();
  await this.loginPage.login('standard_user', 'secret_sauce');
  await this.productsPage.addProductToCartByName('Sauce Labs Backpack');
});

When('navega al carrito', async function () {
  await this.cartPage.goToCart();
});

Then('debería ver {string} producto\\(s\\) en el carrito', async function (expectedQuantity) {
  const badge = await this.cartPage.getItemQuantity();
  expect(badge.trim()).toBe(expectedQuantity);
});

When('hace click en el botón checkout', async function () {
  await this.page.click('[data-test="checkout"]');
});

Then('debería ver la página de checkout', async function () {
  const titleLocator = this.page.locator('[data-test="title"]');
  const actualTitle = await titleLocator.textContent();
  expect(actualTitle.trim().toLowerCase()).toBe('checkout: your information');
});

When('el usuario completa la información de checkout', async function () {
  await this.page.fill('[data-test="firstName"]', 'Christopher');
  await this.page.fill('[data-test="lastName"]', 'Arias');
  await this.page.fill('[data-test="postalCode"]', '12345');
  await this.page.click('[data-test="continue"]');
});

Then('debería avanzar a la página de resumen', async function () {
  const title = await this.page.locator('[data-test="title"]');
  const text = await title.textContent();
  expect(text.trim().toLowerCase()).toBe('checkout: overview');
});

When('el usuario presiona el botón finish para completar la compra', async function () {
  await this.page.click('[data-test="finish"]');
});

Then('debería ver la página de confirmación de compra', async function () {
  const confirmationTitle = await this.page.locator('[data-test="title"]');
  const text = await confirmationTitle.textContent();
  expect(text.trim().toLowerCase()).toBe('checkout: complete!');
});