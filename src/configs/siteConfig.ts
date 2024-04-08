type LocalePrefix = 'as-needed' | 'always' | 'never';

const localePrefix: LocalePrefix = 'as-needed';

export const siteConfig = {
  defaultLocale: 'en',
  localePrefix,
  locales: [
    {
      id: 'en',
      name: 'English',
    },
    {
      id: 'fr',
      name: 'Français',
    },
  ],
  name: 'SaaS Starter',
};

export const AllLocales = siteConfig.locales.map((locale) => locale.id);
