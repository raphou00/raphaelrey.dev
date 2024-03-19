import { NextIntlClientProvider, useMessages } from "next-intl";

type ProvidersProps = {
    locale: string;
    children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ locale, children }: ProvidersProps) => {
    const messages = useMessages();

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    );
}

export default Providers;