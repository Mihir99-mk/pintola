import {Elements, PaymentElement, useStripe} from '@stripe/react-stripe-js';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import getStripe from '../lib/getStripe';

const CheckoutForm = async() => {

const stripePromise = loadStripe("pk_test_51OyWUySHJwhaAYNOFQ4djF7EV5RqCvSifJxj7OkrTr1brIqEh3SdiP8sEJ3Fy7wMjZcizeKAhwoRKJvDCOvENv390076QFiuuk");
const options = {
  clientSecret: process.env.SECRET,
};

// const stripe = useStripe();
// const paymentIntent = await stripe.pa
  return (
    <form>
        <Elements stripe={stripePromise} options={options}>
      <PaymentElement />
      </Elements>
      <button>Submit</button>
    </form>
  );
};

export default CheckoutForm;