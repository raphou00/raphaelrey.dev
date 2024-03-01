import { locales, defaultLocale } from "@/libs/navigation";
import Link from "next/link";

const LocaleSwitcher = () => {
    return (
        <label className="relative text-gray-400">
            <div
                className="flex flex-col gap-2 appearance-none bg-transparent py-3 pl-2 pr-6"
            >
                {
                    locales.map((cur: string) => (
                        <Link
                            key={cur}
                            href={"/" + cur}
                            locale={cur}
                            className="uppercase"
                        >
                            {cur}
                        </Link>
                    ))
                }
            </div>
        </label>
    );
}

export default LocaleSwitcher;