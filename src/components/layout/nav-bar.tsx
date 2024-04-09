import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { LocaleSwitcher } from '../locale-switcher';
import { Logo } from '../logo';
import { ModeToggle } from '../mode-toggle';
import { buttonVariants } from '../ui/Button';

export function Navbar() {
  const t = useTranslations('Navbar');

  return (
    <div className="mx-auto max-w-screen-lg px-3 py-6">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <nav>
          <ul className="flex flex-row items-center gap-x-6 text-lg font-medium [&_li:hover]:opacity-100 [&_li]:opacity-60">
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
          </ul>
        </nav>
        <div>
          <ul className="flex flex-row items-center gap-x-4 text-lg font-medium [&_li:not(:last-child):hover]:opacity-100 [&_li:not(:last-child)]:opacity-60">
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
          </ul>
        </div>
      </div>
    </div>
  );
}
