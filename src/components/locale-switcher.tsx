"use client";

import { useParams } from "next/navigation";
import { useTransition } from "react";
import { locales, defaultLocale, useRouter, usePathname } from "@/libs/navigation";
import { cn } from "@/libs/utils";

const LocaleSwitcher = () => {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();

    function onSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value;
        startTransition(() => {
            router.replace(
                // @ts-expect-error
                {pathname, params},
                {locale: nextLocale}
            );
        });
    }

    return (
        <label
            className={cn(
                "relative text-gray-400",
                isPending ? "transition-opacity [&:disabled]:opacity-30" : ""
            )}
        >
            <select
                className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
                defaultValue={defaultLocale}
                disabled={isPending}
                onChange={onSelectChange}
            >
                {
                    locales.map((cur: string) => (
                        <option key={cur} value={cur}>
                            {cur}
                        </option>
                    ))
                }
            </select>
        </label>
    );
}

export default LocaleSwitcher;