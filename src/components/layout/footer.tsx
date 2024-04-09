import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { siteConfig } from '@/configs/siteConfig';

import { Icons } from '../icons';
import { Logo } from '../logo';
import { Section } from './section';

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <Section className="pb-16 pt-0">
      <div className="flex flex-col items-center text-center">
        <Logo />
        <ul className="mt-4 flex flex-row gap-x-8 text-lg [&_li:hover]:opacity-100 [&_li]:opacity-60">
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
        <ul className="mt-4 flex flex-row gap-x-5 text-muted-foreground [&_svg:hover]:text-primary [&_svg:hover]:opacity-100 [&_svg]:size-5 [&_svg]:fill-current [&_svg]:opacity-60">
          <li>
            <Link href="/">
              <Icons.Github />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Icons.Facebook />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Icons.X />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Icons.Youtube />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Icons.LinkedIn />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Icons.At />
            </Link>
          </li>
          <li>
            <Link href="/">
              <Icons.RSSFeed />
            </Link>
          </li>
        </ul>
        <div className="mt-6 flex w-full justify-between border-t pt-3 text-sm text-muted-foreground">
          © Copyright {new Date().getFullYear()} {siteConfig.name}.
        </div>
        <ul className="flex gap-x-4 font-medium [&_a:hover]:opacity-100 [&_a]:opacity-60">
          <li>
            <Link href="/">{t('terms_of_service')}</Link>
          </li>
          <li>
            <Link href="/">{t('privacy_policy')}</Link>
          </li>
        </ul>
      </div>
    </Section>
  );
}
