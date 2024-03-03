import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { getLocale, getTranslations } from "next-intl/server";
import LocaleSwitcher from "@/components/locale-switcher";
import Providers from "./providers";
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"],
});

const generateMetadata = async (): Promise<Metadata> => {
    const t = await getTranslations();
    const locale = await getLocale();

    return {
        title: t("title"),
        description: t("description"),
        keywords: "Raphaël Rey, Raphaël, Raphaël Rey Developer, Web Developer, Web Designer, Web Developer Portfolio, Web Designer Portfolio",
        metadataBase: new URL(process.env.APP_URL!),
        icons: {
            icon: "/favicon.ico"
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
        }
    };
}

const Root = async ({ children }: React.PropsWithChildren) => {
    const locale = await getLocale();

    return (
        <html lang={locale}>
            <body className={poppins.className}>
                <Providers locale={locale}>
                    <div className="bg-black text-white overflow-hidden">
                        <div className="fixed top-0 container mx-auto p-4">
                            <div />
                            <LocaleSwitcher />
                        </div>
                        {children}
                    </div>
                </Providers>
            </body>
        </html>
    );
}

export { generateMetadata };
export default Root;