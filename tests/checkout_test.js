const assert = require('assert');
const data = require('../data/testData');

Feature('Sauce Demo - Mobile Checkout');

Scenario(
  'Add the first product to the cart and complete the checkout journey @e2e @checkout',
  async ({
    I,
    menuPage,
    loginPage,
    productsPage,
    productDetailsPage,
    cartPage,
    checkoutAddressPage,
    checkoutPaymentPage,
    checkoutReviewPage,
    checkoutCompletePage,
  }) => {
    // 1. The app is launched by the Appium session; wait for the catalog to render.
    await productsPage.waitForScreen();

    // 2 & 3. Open the hamburger menu and tap "Log In".
    await menuPage.openLoginFromMenu();

    // 4 & 5. Enter the credentials and submit.
    await loginPage.login(data.user.username, data.user.password);

    // 6. Assert the "Products" header is displayed.
    await productsPage.assertProductsHeaderIsDisplayed();

    // 7. Store the first product price, then open the product.
    const firstProductPrice = await productsPage.grabFirstProductPrice();
    assert.ok(firstProductPrice > 0, 'The first product price was not captured');
    I.say(`Captured first product price: $${firstProductPrice}`);
    await productsPage.openFirstProduct();

    // 8. Add the product to the cart.
    await productDetailsPage.waitForScreen();
    await productDetailsPage.addToCart();

    // 9. Open the cart.
    await productDetailsPage.openCart();
    await cartPage.waitForScreen();

    // 10. Validate the cart total matches the captured product price.
    const cartTotal = await cartPage.assertTotalEquals(firstProductPrice);
    I.say(`Cart total validated: $${cartTotal}`);

    // 11. Proceed to checkout.
    await cartPage.proceedToCheckout();

    // 12 & 13. Fill in the shipping address and continue to payment.
    await checkoutAddressPage.fillAddress(data.shippingAddress);
    await checkoutAddressPage.toPayment();

    // 14 & 15. Fill in the payment details and review the order.
    await checkoutPaymentPage.fillPaymentDetails(data.paymentCard);
    await checkoutPaymentPage.reviewOrder();

    // 16. Place the order and validate the confirmation message.
    await checkoutReviewPage.placeOrder();
    await checkoutCompletePage.assertOrderIsConfirmed();
  },
);
