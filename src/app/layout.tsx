import type { Metadata, Viewport } from "next";
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

const viewport: Viewport = {
    themeColor: "black",
}

const generateMetadata = async (): Promise<Metadata> => {
    const t = await getTranslations();

    return {
        title: "Raphaël Rey",
        description: "I'm a web developer",
        keywords: "Raphaël Rey, Raphaël, Raphaël Rey Dev, Web Developer, Web Designer, Web Developer Portfolio, Web Designer Portfolio",
        applicationName: "Raphaël Rey",
        publisher: "Raphaël Rey",
        creator: "Raphaël Rey",
        category: "Portfolio",
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
            title: "Raphaël Rey",
            siteName: "Raphaël Rey",
            description: "I'm a web developer",
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
        },
        alternates: {
            canonical: "/",
            languages: {
                en: "/en",
                ar: "/ar",
                de: "/de",
                es: "/es",
                fr: "/fr",
                ja: "/ja",
                ko: "/ko",
                pt: "/pt",
                ru: "/ru",
                pl: "/pl"
            }
        },
        appleWebApp: {
            title: "Raphaël Rey",
            capable: true
        }
    };
}

const Root = async ({ children }: React.PropsWithChildren) => {
    const locale = await getLocale();

    return (
        <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
            <body className={poppins.className}>
                <Providers locale={locale}>
                    {children}
                </Providers>
            </body>
        </html>
    );
}

export { generateMetadata, viewport };
export default Root;