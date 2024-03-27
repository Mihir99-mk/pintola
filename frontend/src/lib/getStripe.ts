import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null> | null = null;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_test_51OyWUySHJwhaAYNOFQ4djF7EV5RqCvSifJxj7OkrTr1brIqEh3SdiP8sEJ3Fy7wMjZcizeKAhwoRKJvDCOvENv390076QFiuuk");
  }
  return stripePromise;
};

export default getStripe;
