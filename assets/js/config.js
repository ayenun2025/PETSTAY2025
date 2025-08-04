window.PETSTAY_CONFIG = {
  AWS_REGION: 'us-east-1',
  COGNITO_USER_POOL_ID: 'us-east-1_jaXO80Xah',
  COGNITO_USER_POOL_CLIENT_ID: '3dpsa80ai1mrogcluofao2ejsk',
  COGNITO_DOMAIN: 'us-east-1jaxo80xah.auth.us-east-1.amazoncognito.com',

  REDIRECT_SIGN_IN_URL: 'https://main.d2xdpgtdqzn9rk.amplifyapp.com/admin-frontend/post-login.html',
  REDIRECT_SIGN_OUT_URL: 'https://https://main.d2xdpgtdqzn9rk.amplifyapp.com/index.html',
  REDIRECT_ADMIN_SIGN_IN_URL: 'https://main.d2xdpgtdqzn9rk.amplifyapp.com/admin-frontend/post-login.html' ,

  BOOKINGS_API_URL: '{{BOOKINGS_API_URL}}',
  ROOMS_AVAILABILITY_API_URL: '{{ROOMS_AVAILABILITY_API_URL}}',
  NEW_BOOKING_API_URL: '{{NEW_BOOKING_API_URL}}',
  CHECKIN_API_URL: '{{CHECKIN_API_URL}}'
};

// Safety check: crash the page if placeholders were not replaced
for (const key in window.PETSTAY_CONFIG) {
  if (window.PETSTAY_CONFIG[key].includes("{{") || window.PETSTAY_CONFIG[key].includes("}}")) {
    throw new Error(`Missing config value: ${key}. Did you forget to set environment variables?`);
  }
}
