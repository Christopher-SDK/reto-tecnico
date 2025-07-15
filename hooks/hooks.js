const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const {LoginPage} = require('../pages/LoginPage');
const {ProductsPage} = require('../pages/ProductsPage');
const {CartPage} = require('../pages/CartPage');

Before(async function () {
  this.browser = await chromium.launch({ headless: false, slowMo: 700 });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();

  this.loginPage = new LoginPage(this.page);
  this.productsPage = new ProductsPage(this.page);
  this.cartPage = new CartPage(this.page);
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});
