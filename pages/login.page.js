const { I } = inject();

module.exports = {
  fields: {
    usernameInput: '~Username input field',
    passwordInput: '~Password input field',
    loginButton: '~Login button',
  },

  async waitForScreen() {
    await I.waitForElement(this.fields.usernameInput, 30);
  },

  //Performs a login with the supplied credentials.
  async login(username, password) {
    await this.waitForScreen();
    await I.typeInto(this.fields.usernameInput, username);
    await I.typeInto(this.fields.passwordInput, password);
    await I.waitAndTap(this.fields.loginButton);
  },
};
