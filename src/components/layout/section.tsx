import { cn } from '@/libs/utils';

export function Section({
  children,
  title,
  subtitle,
  description,
  className,
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
}) {
  return (
    <section className={cn('px-3 py-16', className)}>
      {(title ?? subtitle ?? description) && (
        <div className="mx-auto mb-12 max-w-screen-md text-center">
          {subtitle ? (
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-sm font-bold text-transparent">
              {subtitle}
            </div>
          ) : null}
          {title ? (
            <div className="mt-1 text-3xl font-bold">{title}</div>
          ) : null}
          {description ? (
            <div className="mt-2 text-lg text-muted-foreground">
              {description}
            </div>
          ) : null}
        </div>
      )}
      <div className="mx-auto max-w-screen-lg">{children}</div>
    </section>
  );
}
