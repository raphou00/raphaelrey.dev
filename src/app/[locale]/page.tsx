import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Title from "@/components/title";
import CheckoutForm from "@/components/checkout-form";

const Page = async () => {
    const t = await getTranslations();

    return (
        <div className="h-screen w-screen p-2 space-x-5 flex items-center justify-center">
            <div className="flex flex-col justify-center items-center gap-5 text-center">
                <div className="w-full max-w-72 aspect-square rounded-full group border-2 border-white overflow-hidden">
                    <Image
                        src="/raphaelrey.jpg"
                        alt={t("title")}
                        width={720}
                        height={720}
                        className=" w-full h-full transition duration-150 group-hover:hover:scale-105"
                    />
                </div>

                <Title text={t("title")} className="text-2xl" />

                <p>
                    {t("description")} <br />
                    <Link href="mailto:rey29raphael@gmail.com" className="underline">rey29raphael@gmail.com</Link> <br />
                    <Link href="tel:0786973555" className="underline">078 697 35 55</Link>
                </p>
            </div>
            <CheckoutForm />
        </div>
    );
}

export default Page;