const { I } = inject();

module.exports = {
  fields: {
    openMenuButton: '~open menu',
    loginItem: '~menu item log in',
  },

  async openMenu() {
    await I.waitAndTap(this.fields.openMenuButton);
  },

  async goToLogin() {
    await I.waitAndTap(this.fields.loginItem);
  },

  async openLoginFromMenu() {
    await this.openMenu();
    await this.goToLogin();
  },
};
