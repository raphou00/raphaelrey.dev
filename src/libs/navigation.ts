import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "fr", "de", "ru", "ja", "pl", "es", "ar", "ko"];

export const defaultLocale = locales[0];

export const localePrefix = "always";

export const pathnames = {
    "/": "/"
}

export const { Link, redirect, usePathname, useRouter } =
    createLocalizedPathnamesNavigation({
        locales,
        pathnames,
        localePrefix
    });