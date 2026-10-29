/**
 * Custom steps shared across tests.
 * Extends the `I` object with small, reusable mobile helpers.
 */
module.exports = function () {
  return actor({
    /**
     * Waits for an element and taps it.
     * React Native touchables only react reliably to a real touch event,
     * so `tap` is used instead of the WebDriver `click`.
     */
    async waitAndTap(locator, timeout = 20) {
      await this.waitForElement(locator, timeout);
      await this.tap(locator);
    },

    /**
     * Types a value into a native input. `fillField` replaces any existing value.
     */
    async typeInto(locator, value, timeout = 20) {
      await this.waitForElement(locator, timeout);
      await this.fillField(locator, value);
    },

    /**
     * Extracts the numeric value out of a price string such as "$ 29.99" or "Total: $29.99".
     * @returns {Promise<number>}
     */
    async grabPriceFrom(locator) {
      const raw = await this.grabTextFrom(locator);
      const text = Array.isArray(raw) ? raw[0] : raw;
      const value = parseFloat(String(text).replace(/[^0-9.]/g, ''));
      if (Number.isNaN(value)) {
        throw new Error(`Unable to parse a price out of "${text}"`);
      }
      return value;
    },
  });
};
