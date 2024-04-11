import { createSharedPathnamesNavigation } from 'next-intl/navigation';

import { AllLocales, siteConfig } from '@/configs/siteConfig';

export const { usePathname, useRouter } = createSharedPathnamesNavigation({
  localePrefix: siteConfig.localePrefix,
  locales: AllLocales,
});
