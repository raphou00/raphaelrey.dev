import { Stripe } from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const calculateOrderAmount = (items: any) => {
    return 1000;
};

const createCheckout = async (formData : FormData) => {
    const { items } = Object.fromEntries(formData);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(items),
        currency: "frc",
        automatic_payment_methods: {
        enabled: true,
        },
    });

    return {
        clientSecret: paymentIntent.client_secret,
    };
};

export default createCheckout