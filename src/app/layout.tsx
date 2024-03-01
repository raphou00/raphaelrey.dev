import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { getLocale, getTranslations } from "next-intl/server";
import "./globals.css";
import LocaleSwitcher from "@/components/locale-switcher";

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
        metadataBase: new URL("https://raphaelrey.dev"),
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
            url: "https://raphaelrey.dev",
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
                <div className="bg-black text-white overflow-hidden">
                    <div className="fixed top-0 container mx-auto p-4">
                        <div />
                        <LocaleSwitcher />
                    </div>
                    {children}
                </div>
            </body>
        </html>
    );
}

export { generateMetadata };
export default Root;