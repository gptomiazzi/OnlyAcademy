import express from 'express';

const app = express();
const port = 3000;
const PUBLISHABLE_KEY = 'pk_test_51PIb3w046m3vjyit5zcqiV3NuE2JLJItfvCZpi6V63LpVUyW1S6JRwpGhTmrAlFf7HH2ydCQeIJ0gRPJN96Bkfuu00BibGcQuK';
const SECRET_KEY = 'sk_test_51PIb3w046m3vjyitvfpzjggMAEVSzJq8mOoIZYSumJpgqOxllJ760TVuneCKWFuz0cikr28ZJg0rhdSWqd0K7dDj00CjV8zztD';

app.listen(port, () => {
    console.log(`Server running on por ${port}`)
})