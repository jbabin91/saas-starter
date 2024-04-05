import createMiddleware from 'next-intl/middleware';

import { AllLocales, siteConfig } from './configs/siteConfig';

const intlMiddleware = createMiddleware({
  defaultLocale: siteConfig.defaultLocale,
  localePrefix: siteConfig.localePrefix,
  locales: AllLocales,
});

export default intlMiddleware;

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
