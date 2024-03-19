import type { Metadata } from "next";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { getLocale, getTranslations } from "next-intl/server";
import ThemeSwitcher from "@/components/theme-switcher";
import LocaleSwitcher from "@/components/locale-switcher";
import Providers from "./providers";
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"],
});

const generateMetadata = async (): Promise<Metadata> => {
    const t = await getTranslations();

    return {
        title: t("title"),
        description: t("description"),
        keywords: "Raphaël Rey, Raphaël, Raphaël Rey Developer, Web Developer, Web Designer, Web Developer Portfolio, Web Designer Portfolio",
        metadataBase: new URL(process.env.APP_URL!),
        icons: {
            icon: "/favicon.ico",
            shortcut: "/favicon-16x16.png",
            apple: "/apple-touch-icon.png"
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true
            }
        },
        openGraph: {
            title: t("title"),
            siteName: t("title"),
            description: t("description"),
            url: process.env.APP_URL,
            locale: "en",
            images: [
                {
                    url: "/raphaelrey.jpg",
                    width: 720,
                    height: 720
                }
            ]
        },
        verification: {
            google: "kjV0bAjOmYliNutW_vKZ7Kv6e0bt9xjPxbhh3Mfp-ck"
        }
    };
}

const Root = async ({ children }: React.PropsWithChildren) => {
    const locale = await getLocale();
    const t = await getTranslations("pages");

    return (
        <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} data-theme="dark">
            <body className={poppins.className}>
                <Providers locale={locale}>
                    {children}
                </Providers>
            </body>
        </html>
    );
}

export { generateMetadata };
export default Root;