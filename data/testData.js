/**
 * Test data for the Sauce Demo checkout journey.
 */
module.exports = {
  user: {
    username: 'bob@example.com',
    password: '10203040',
  },

  shippingAddress: {
    fullName: 'Bob Anderson',
    addressLine1: '221B Baker Street',
    addressLine2: 'Apartment 4',
    city: 'London',
    state: 'Greater London',
    zipCode: 'NW16XE',
    country: 'United Kingdom',
  },

  paymentCard: {
    fullName: 'Bob Anderson',
    cardNumber: '4111111111111111',
    expirationDate: '03/30',
    securityCode: '123',
  },
};
