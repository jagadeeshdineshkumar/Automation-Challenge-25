const { I } = inject();

module.exports = {
  fields: {
    fullNameInput: '~Full Name* input field',
    cardNumberInput: '~Card Number* input field',
    expirationDateInput: '~Expiration Date* input field',
    securityCodeInput: '~Security Code* input field',
    reviewOrderButton: '~Review Order button',
  },

  async waitForScreen() {
    await I.waitForElement(this.fields.cardNumberInput, 30);
  },

  //Fills in the payment form.
 
  async fillPaymentDetails(card) {
    await this.waitForScreen();
    await I.typeInto(this.fields.fullNameInput, card.fullName);
    await I.typeInto(this.fields.cardNumberInput, card.cardNumber);
    await I.typeInto(this.fields.expirationDateInput, card.expirationDate);
    await I.typeInto(this.fields.securityCodeInput, card.securityCode);
    await I.hideDeviceKeyboard();
  },

  async reviewOrder() {
    await I.waitAndTap(this.fields.reviewOrderButton);
  },
};
