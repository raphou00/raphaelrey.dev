import createMiddleware from "next-intl/middleware";
import { pathnames, defaultLocale, locales, localePrefix } from "@/libs/navigation";

export default createMiddleware({
    defaultLocale,
    locales,
    pathnames,
    localePrefix
});

export const config = {
    matcher: [
      "/",
      "/(en|fr|de|ru|ja|pl|es|ar)/:path*",
      "/((?!_next|_vercel|.*\\..*).*)"
    ]
  };