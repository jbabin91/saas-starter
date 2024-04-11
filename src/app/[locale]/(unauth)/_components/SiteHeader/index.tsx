import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { LocaleSwitcher } from '@/components/locale-switcher';
import { ModeToggle } from '@/components/mode-toggle';
import { buttonVariants } from '@/components/ui/Button';

import { Nav } from './main-nav';
import { MobileNav } from './mobile-nav';

export function SiteHeader() {
  const t = useTranslations('Navbar');
  return (
    <header className="flex items-center justify-between px-4 py-6 @container md:px-2">
      <div>
        <Nav />
        <MobileNav />
      </div>
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
    </header>
  );
}
