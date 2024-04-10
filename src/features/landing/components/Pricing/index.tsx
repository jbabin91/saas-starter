import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/Button';
import { PLAN_ID } from '@/configs/pricingConfig';

import { PricingInformation } from './pricing-information';

export function Pricing() {
  const t = useTranslations('Pricing');

  return (
    <div className="px-3 py-16">
      <div className="mx-auto mb-12 max-w-screen-md text-center">
        <div className="bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 bg-clip-text text-sm font-bold text-transparent">
          {t('section_subtitle')}
        </div>
        <div className="mt-1 text-3xl font-bold">{t('section_title')}</div>
        <div className="mt-1 text-lg text-muted-foreground">
          {t('section_description')}
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl">
        <PricingInformation
          buttonList={{
            [PLAN_ID.FREE]: (
              <Link
                className={buttonVariants({
                  className: 'mt-5 w-full',
                  size: 'sm',
                })}
                href="/sign-up"
              >
                {t('button_text')}
              </Link>
            ),
            [PLAN_ID.PREMIUM]: (
              <Link
                className={buttonVariants({
                  className: 'mt-5 w-full',
                  size: 'sm',
                })}
                href="/sign-up"
              >
                {t('button_text')}
              </Link>
            ),
            [PLAN_ID.ENTERPRISE]: (
              <Link
                className={buttonVariants({
                  className: 'mt-5 w-full',
                  size: 'sm',
                })}
                href="/sign-up"
              >
                {t('button_text')}
              </Link>
            ),
          }}
        />
      </div>
    </div>
  );
}
