const { I } = inject();

module.exports = {
  fields: {
    header: '//android.widget.TextView[@text="Products"]',
    productItem: '~store item',
    productPrice: '~store item price',
  },

  async waitForScreen() {
    await I.waitForElement(this.fields.productItem, 30);
  },

  //Asserts that the "Products" header is visible on screen.
  async assertProductsHeaderIsDisplayed() {
    await I.waitForElement(this.fields.header, 30);
    await I.seeElement(this.fields.header);
    await I.see('Products');
  },

  //Returns the price of the first product in the catalog.
  async grabFirstProductPrice() {
    await I.waitForElement(this.fields.productPrice, 30);
    return I.grabPriceFrom(this.fields.productPrice);
  },

  async openFirstProduct() {
    await I.waitAndTap(this.fields.productItem);
  },
};
