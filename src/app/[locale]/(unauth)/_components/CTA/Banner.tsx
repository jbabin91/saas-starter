export function Banner({
  title,
  description,
  buttons,
}: {
  title: string;
  description: string;
  buttons: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-muted bg-gradient-to-br from-red-400 via-purple-400 to-blue-400 px-6 py-10 text-center">
      <div className="text-3xl font-bold text-primary-foreground">{title}</div>
      <div className="mt-2 text-lg font-medium text-muted">{description}</div>
      <div className="mt-6">{buttons}</div>
    </div>
  );
}
