import { badgeVariants } from '../ui/badge';

export function CenteredHero({
  banner,
  title,
  description,
  buttons,
}: {
  banner: {
    href: string;
    text: React.ReactNode;
  };
  title: React.ReactNode;
  description: string;
  buttons: React.ReactNode;
}) {
  return (
    <>
      <div className="text-center">
        <a
          className={badgeVariants()}
          href={banner.href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {banner.text}
        </a>
      </div>
      <div className="mt-3 text-center text-5xl font-bold tracking-tight">
        {title}
      </div>
      <div className="mx-auto mt-5 max-w-screen-md text-center text-xl text-muted-foreground">
        {description}
      </div>
      <div className="mt-8 flex flex-row justify-center gap-x-5">{buttons}</div>
    </>
  );
}
