import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Icons } from '@/components/icons';
import { siteConfig } from '@/configs/siteConfig';

export function Footer() {
  const t = useTranslations('Footer');

  return (
    <div className="mx-10 max-w-screen-sm pb-16 pt-0 md:max-w-screen-lg lg:mx-auto">
      <div className="flex flex-col items-center text-center ">
        <div className="flex items-center space-x-2">
          <Icons.Logo className="mr-1 size-5" />
          <span className="inline-block font-bold">{siteConfig.name}</span>
        </div>
        <ul className="mt-4 flex flex-row gap-x-8 text-sm md:text-lg [&_li:hover]:opacity-100 [&_li]:opacity-60">
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
        <div className="mt-6 w-full border-b" />
        <div className="flex pb-2 pt-3 text-sm text-muted-foreground md:w-full">
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
    </div>
  );
}
