const { I } = inject();

//Checkout shipping address.

module.exports = {
  fields: {
    fullNameInput: '~Full Name* input field',
    addressLine1Input: '~Address Line 1* input field',
    addressLine2Input: '~Address Line 2 input field',
    cityInput: '~City* input field',
    stateRegionInput: '~State/Region input field',
    zipCodeInput: '~Zip Code* input field',
    countryInput: '~Country* input field',
    toPaymentButton: '~To Payment button',
  },

  async waitForScreen() {
    await I.waitForElement(this.fields.fullNameInput, 30);
  },

  //Fills in the complete shipping address form.
  
  async fillAddress(address) {
    await this.waitForScreen();
    await I.typeInto(this.fields.fullNameInput, address.fullName);
    await I.typeInto(this.fields.addressLine1Input, address.addressLine1);
    await I.typeInto(this.fields.addressLine2Input, address.addressLine2);
    await I.typeInto(this.fields.cityInput, address.city);
    await I.typeInto(this.fields.stateRegionInput, address.state);
    await I.typeInto(this.fields.zipCodeInput, address.zipCode);
    await I.typeInto(this.fields.countryInput, address.country);
    await I.hideDeviceKeyboard();
  },

  async toPayment() {
    await I.waitAndTap(this.fields.toPaymentButton);
  },
};
