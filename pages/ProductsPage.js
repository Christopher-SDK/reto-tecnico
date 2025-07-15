class ProductsPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('[data-test="title"]');
    this.addToCartButtons = page.locator('button.btn_inventory');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  async addProductToCartByName(productName) {
    const product = this.page.locator('.inventory_item', {
      has: this.page.locator(`text=${productName}`)
    });
    await product.locator('button.btn_inventory').click();
  }

  async goToCart() {
    await this.cartLink.click();
  }
}

module.exports = { ProductsPage };
