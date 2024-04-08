import Link from 'next/link';

export function CenteredMenu({
  children,
  logo,
  rightMenu,
}: {
  children: React.ReactNode;
  logo: JSX.Element;
  rightMenu: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between">
      <Link href="/">{logo}</Link>
      <nav>
        <ul className="flex flex-row items-center gap-x-6 text-lg font-medium [&_li:hover]:opacity-100 [&_li]:opacity-60">
          {children}
        </ul>
      </nav>
      <div>
        <ul className="flex flex-row items-center gap-x-4 text-lg font-medium [&_li:not(:last-child):hover]:opacity-100 [&_li:not(:last-child)]:opacity-60">
          {rightMenu}
        </ul>
      </div>
    </div>
  );
}
