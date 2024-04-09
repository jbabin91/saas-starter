import { useTranslations } from 'next-intl';

import { Icons } from '@/components/icons';
import { badgeVariants } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/Button';

export function Hero() {
  const t = useTranslations('Hero');

  return (
    <div className="mx-auto max-w-screen-lg py-48 pb-72">
      <div className="text-center">
        <a
          className={badgeVariants()}
          href="https://twitter.com/jbabin91"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Icons.X className="mr-1 size-5" />
          {t('follow_on_x')}
        </a>
      </div>
      <div className="mt-3 text-center text-5xl font-bold tracking-tight">
        {t.rich('title', {
          important: (chunks) => (
            <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              {chunks}
            </span>
          ),
        })}
      </div>
      <div className="mx-auto mt-5 max-w-screen-md text-center text-xl text-muted-foreground">
        {t('description')}
      </div>
      <div className="mt-8 flex flex-row justify-center gap-x-5">
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
      </div>
    </div>
  );
}
