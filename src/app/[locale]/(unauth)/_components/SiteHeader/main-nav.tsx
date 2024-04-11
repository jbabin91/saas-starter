import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Icons } from '@/components/icons';
import { siteConfig } from '@/configs/siteConfig';

export function Nav() {
  const t = useTranslations('Navbar');

  return (
    <div className="hidden @[57rem]:flex md:justify-between md:space-x-8">
      <Link className="flex items-center space-x-2" href="/">
        <Icons.Logo className="mr-1 size-8" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
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
    </div>
  );
}
