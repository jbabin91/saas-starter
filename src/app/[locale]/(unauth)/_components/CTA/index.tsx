import { useTranslations } from 'next-intl';

import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/Button';

import { Banner } from './Banner';

export function CTA() {
  const t = useTranslations('CTA');
  return (
    <div className="mx-10 px-3 py-16 md:max-w-screen-lg lg:mx-auto">
      <Banner
        buttons={
          <a
            className={buttonVariants({ size: 'lg', variant: 'outline' })}
            href="https://github.com/jbabin91/saas-starter"
            rel="noreferrer"
            target="_blank"
          >
            <Icons.Github className="mr-2 size-5" />
            {t('button_text')}
          </a>
        }
        description={t('description')}
        title={t('title')}
      />
    </div>
  );
}
