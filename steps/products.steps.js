const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { ProductsPage } = require('../pages/ProductsPage');
const { LoginPage } = require('../pages/LoginPage');

Given('que el usuario está logueado con credenciales válidas', async function () {
  this.loginPage = new LoginPage(this.page);
  this.productsPage = new ProductsPage(this.page);
  await this.loginPage.goto();
  await this.loginPage.login('standard_user', 'secret_sauce');
});

When('agrega un producto al carrito', async function () {
  await this.productsPage.addProductToCartByName('Sauce Labs Backpack');
});

Then('debería ver el contador del carrito con {string}', async function (count) {
  const cartCountLocator = this.page.locator('.shopping_cart_badge');
  const cartCount = await cartCountLocator.textContent();
  expect(cartCount.trim()).toBe(count);
});
