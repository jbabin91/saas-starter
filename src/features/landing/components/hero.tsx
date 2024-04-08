import { useTranslations } from 'next-intl';

import { Icons } from '@/components/icons';
import { CenteredHero } from '@/components/layout/centered-hero';
import { Section } from '@/components/layout/section';
import { buttonVariants } from '@/components/ui/Button';

export function Hero() {
  const t = useTranslations('Hero');

  return (
    <Section className="py-48 pb-72">
      <CenteredHero
        banner={{
          href: 'https://twitter.com/jbabin91',
          text: (
            <>
              <Icons.X className="mr-1 size-5" />
              {t('follow_on_x')}
            </>
          ),
        }}
        buttons={
          <>
            <a
              className={buttonVariants({ size: 'lg' })}
              href="https://github.com/jbabin91/saas-starter"
            >
              {t('primary_button')}
            </a>
            <a
              className={buttonVariants({ size: 'lg', variant: 'outline' })}
              href="https://github.com/jbabin91/saas-starter"
            >
              {t('secondary_button')}
            </a>
          </>
        }
        description={t('description')}
        title={t.rich('title', {
          important: (chunks) => (
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {chunks}
            </span>
          ),
        })}
      />
    </Section>
  );
}
