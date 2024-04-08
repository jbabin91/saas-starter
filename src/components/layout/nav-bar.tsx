import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { LocaleSwitcher } from '../locale-switcher';
import { Logo } from '../logo';
import { ModeToggle } from '../mode-toggle';
import { buttonVariants } from '../ui/Button';
import { CenteredMenu } from './centered-menu';
import { Section } from './section';

export function Navbar() {
  const t = useTranslations('Navbar');

  return (
    <Section className="px-3 py-6">
      <CenteredMenu
        logo={<Logo />}
        rightMenu={
          <>
            <li>
              <LocaleSwitcher />
            </li>
            <li>
              <ModeToggle />
            </li>
            <li>
              <Link href="/sign-in">{t('sign_in')}</Link>
            </li>
            <li>
              <Link className={buttonVariants()} href="/sign-up">
                {t('sign_up')}
              </Link>
            </li>
          </>
        }
      >
        <li>
          <Link href="/">{t('product')}</Link>
        </li>
        <li>
          <Link href="/">{t('docs')}</Link>
        </li>
        <li>
          <Link href="/">{t('blog')}</Link>
        </li>
        <li>
          <Link href="/">{t('community')}</Link>
        </li>
        <li>
          <Link href="/">{t('company')}</Link>
        </li>
      </CenteredMenu>
    </Section>
  );
}
