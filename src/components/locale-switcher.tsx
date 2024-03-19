"use client";

import { locales, useRouter, usePathname } from "@/libs/navigation";
import { cn } from "@/libs/utils";
import { Globe2 } from "lucide-react";
import { useLocale } from "next-intl";

const LocaleSwitcher = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLocale = (locale: string) => {
        router.push(pathname, { locale });
        router.refresh();
    }

    return (
        <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn btn-sm uppercase font-bold">
                <Globe2 />
                {locale}
            </div>
            <div tabIndex={0} className="dropdown-content z-[1] p-2 bg-base-200 rounded-box">
                <div className="flex flex-row flex-wrap w-[200px] gap-2">
                    {
                        locales.map((cur: string) => (
                            <button
                                key={cur}
                                onClick={() => switchLocale(cur)}
                                className={cn("btn btn-sm uppercase", cur === locale ? "btn-primary" : "")}
                                disabled={cur === locale}
                            >
                                {cur}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default LocaleSwitcher;