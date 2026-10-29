const { I } = inject();

module.exports = {
  fields: {
    thankYouText: '//android.widget.TextView[contains(@text,"Thank you for your order")]',
  },

  //Validates the order confirmation message is displayed.
  async assertOrderIsConfirmed() {
    await I.waitForElement(this.fields.thankYouText, 30);
    await I.seeElement(this.fields.thankYouText);
    await I.see('Thank you for your order');
  },
};
