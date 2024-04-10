import { useTranslations } from 'next-intl';

import type { BillingInterval, PlanId } from '@/types/Subscription';

export function PricingCard({
  children,
  planId,
  price,
  interval,
  button,
}: {
  children: React.ReactNode;
  planId: PlanId;
  price: number;
  interval: BillingInterval;
  button: React.ReactNode;
}) {
  const t = useTranslations('PricingPlan');

  return (
    <div className="rounded-xl border border-border px-6 py-8 text-center">
      <div className="text-lg font-semibold">{t(`${planId}_plan_name`)}</div>
      <div className="mt-3 flex items-center justify-center">
        <div className="text-5xl font-bold">{price}</div>
        <div className="ml-1 text-muted-foreground">
          / {t(`plan_interval_${interval}`)}
        </div>
      </div>
      <div className="mt-2 text-sm text-muted-foreground">
        {t(`${planId}_plan_description`)}
      </div>
      {button}
      <ul className="mt-8 space-y-3">{children}</ul>
    </div>
  );
}
