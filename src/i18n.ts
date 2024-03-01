import { getRequestConfig } from "next-intl/server";
import { redirect } from "next/navigation";
import { defaultLocale, locales } from "./libs/navigation";

export default getRequestConfig(async ({ locale }) => {
    if (!locales.includes(locale)) redirect(`/${defaultLocale}`);

    const messages = (await import(`../locales/${locale}.json`)).default;

    return { messages };
});