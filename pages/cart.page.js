const { I } = inject();
const assert = require('assert');

//"My Cart" screen.

module.exports = {
  fields: {
    totalPrice: '~total price',
    proceedToCheckoutButton: '~Proceed To Checkout button',
  },

  async waitForScreen() {
    await I.waitForElement(this.fields.proceedToCheckoutButton, 30);
  },

  ///the cart total amount.
  async grabTotal() {
    await I.waitForElement(this.fields.totalPrice, 30);
    return I.grabPriceFrom(this.fields.totalPrice);
  },

  //Validates the cart total against the price captured on the catalog screen.

  async assertTotalEquals(expectedPrice) {
    const total = await this.grabTotal();
    assert.strictEqual(
      total,
      expectedPrice,
      `Cart total ($${total}) does not match the captured product price ($${expectedPrice})`,
    );
    return total;
  },

  async proceedToCheckout() {
    await I.waitAndTap(this.fields.proceedToCheckoutButton);
  },
};
