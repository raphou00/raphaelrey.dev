import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

type RootProps = {
    children: React.ReactNode;
}

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"],
});

const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "Raphaël Rey",
        description: "Hi, I am Raphaël Rey and I am a Web Developer.",
        keywords: "Raphaël Rey, Raphaël, Raphaël Rey Developer, Web Developer, Web Designer, Web Developer Portfolio, Web Designer Portfolio",
        metadataBase: new URL("https://raphaelrey.dev"),
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true
            }
        }
    };
}

const Root = async ({ children }: RootProps) => {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <div className="bg-black text-white">
                    {children}
                </div>
            </body>
        </html>
    );
}

export { generateMetadata };
export default Root;