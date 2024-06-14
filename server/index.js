const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51PIb3w046m3vjyitvfpzjggMAEVSzJq8mOoIZYSumJpgqOxllJ760TVuneCKWFuz0cikr28ZJg0rhdSWqd0K7dDj00CjV8zztD');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.post('/payment-test', async (_req, res) => {
  const customer = await stripe.customers.create();
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: 'brl',
    customer: customer.id,
    automatic_payment_methods: {
      enabled: true,
    }
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    customer: customer.id,
    publishableKey: 'pk_test_51PIb3w046m3vjyit5zcqiV3NuE2JLJItfvCZpi6V63LpVUyW1S6JRwpGhTmrAlFf7HH2ydCQeIJ0gRPJN96Bkfuu00BibGcQuK'
  });
})

app.listen(3000, () => {
  console.log('Running on port ' + 3000)
})