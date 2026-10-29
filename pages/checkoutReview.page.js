const { I } = inject();

module.exports = {
  fields: {
    screen: '~checkout review order screen',
    placeOrderButton: '~Place Order button',
  },

  async waitForScreen() {
    await I.waitForElement(this.fields.screen, 30);
    await I.waitForElement(this.fields.placeOrderButton, 30);
  },

  async placeOrder() {
    await this.waitForScreen();
    await I.waitAndTap(this.fields.placeOrderButton);
  },
};
