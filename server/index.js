const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51PIb3w046m3vjyitvfpzjggMAEVSzJq8mOoIZYSumJpgqOxllJ760TVuneCKWFuz0cikr28ZJg0rhdSWqd0K7dDj00CjV8zztD');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.post('/monthly', async (_req, res) =>{
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 2500,
      currency: 'BRL'
    })

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Erro ao criar PaymentIntent: ', error.message);
    res.status(400).json({ error: 'Erro ao criar PaymentIntent' })
  }
})

app.post('/annually', async (_req, res) =>{
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 15000,
      currency: 'BRL'
    })

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Erro ao criar PaymentIntent: ', error.message);
    res.status(400).json({ error: 'Erro ao criar PaymentIntent' })
  }
})

app.listen(3000, () => {
  console.log('Running on port ' + 3000)
})