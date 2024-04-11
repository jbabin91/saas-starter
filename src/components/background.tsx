import { cn } from '@/libs/utils';

export function Background({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return <div className={cn('w-full bg-secondary', className)}>{children}</div>;
}
