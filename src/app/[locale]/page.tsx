import Image from "next/image";
import Title from "@/components/title";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

const Page = async () => {
    const t = await getTranslations();

    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center gap-5 text-center p-2">
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
    );
}

export default Page;