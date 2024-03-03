"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

type ProvidersProps = {
    locale: string;
    children: React.ReactNode;
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const Providers: React.FC<ProvidersProps> = ({ locale, children }: ProvidersProps) => {
    return (
        <Elements stripe={stripePromise} options={{ mode: "setup", currency: "chf", locale: locale as any }}>
            {children}
        </Elements>
    );
}

export default Providers;