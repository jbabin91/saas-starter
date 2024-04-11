'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/Button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { siteConfig } from '@/configs/siteConfig';

export function MobileNav() {
  const t = useTranslations('Navbar');
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 @[57rem]:hidden"
          variant="ghost"
        >
          <Icons.Menu className="size-8" />
          <span className="sr-only">Toggle Nav</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <Icons.Logo className="size-8" />
            <span>{siteConfig.name}</span>
          </div>
          <nav>
            <ul className="flex flex-col gap-y-1 text-lg font-medium [&_li:hover]:opacity-100 [&_li]:opacity-60">
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
      </SheetContent>
    </Sheet>
  );
}
