class CartPage {
  constructor(page) {
    this.page = page;
    this.cartLink = 'div#shopping_cart_container a.shopping_cart_link';
    this.cartContents = '[data-test="cart-contents-container"]';
    this.itemQuantity = '[data-test="item-quantity"]';
  }

  async goToCart() {
    await this.page.click(this.cartLink);
  }

  async getItemQuantity() {
    await this.page.waitForSelector(this.cartContents);
    const badge = await this.page.locator('.shopping_cart_badge').textContent();
    return badge || '0';
  }
}

module.exports = { CartPage } ;
