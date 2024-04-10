export function FeatureCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="align-center flex w-60 flex-col items-center rounded-xl border border-border bg-card p-5 text-center sm:w-auto sm:items-start sm:text-start">
      <div className="size-12 rounded-lg bg-gradient-to-br from-red-400 via-purple-400 to-blue-400 p-2 [&_svg]:stroke-primary-foreground [&_svg]:stroke-2">
        {icon}
      </div>
      <div className="mt-2 text-lg font-bold">{title}</div>
      <div className="my-3 w-8 border-t border-purple-400" />
      <div className="mt-2 text-muted-foreground">{children}</div>
    </div>
  );
}
