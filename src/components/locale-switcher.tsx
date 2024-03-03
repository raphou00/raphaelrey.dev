"use client";

import { locales, useRouter } from "@/libs/navigation";

const LocaleSwitcher = () => {
    const router = useRouter();

    const switchLocale = (locale: string) => {
        router.push("/", { locale });
        router.refresh();
    }

    return (
        <label className=" text-gray-400">
            <div
                className="flex gap-2 appearance-none bg-transparent py-3 pl-2 pr-6"
            >
                {
                    locales.map((cur: string) => (
                        <button
                            key={cur}
                            onClick={() => switchLocale(cur)}
                            className="uppercase"
                        >
                            {cur}
                        </button>
                    ))
                }
            </div>
        </label>
    );
}

export default LocaleSwitcher;