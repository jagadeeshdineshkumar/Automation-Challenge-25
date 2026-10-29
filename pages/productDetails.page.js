const { I } = inject();

module.exports = {
  fields: {
    addToCartButton: '~Add To Cart button',
    cartIcon: '~cart badge',
  },

  async waitForScreen() {
    await I.waitForElement(this.fields.addToCartButton, 30);
  },

  async addToCart() {
    await I.waitAndTap(this.fields.addToCartButton);
  },

  async openCart() {
    await I.waitAndTap(this.fields.cartIcon);
  },
};
