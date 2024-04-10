import { useTranslations } from 'next-intl';

import { PricingPlanList } from '@/configs/pricingConfig';
import type { PlanId } from '@/types/Subscription';

import { PricingCard } from './pricing-card';
import { PricingFeature } from './pricing-feature';

export function PricingInformation({
  buttonList,
}: {
  buttonList: Record<PlanId, React.ReactNode>;
}) {
  const t = useTranslations('PricingPlan');

  return (
    <div className="grid grid-cols-3 gap-x-6">
      {PricingPlanList.map((plan) => (
        <PricingCard
          key={plan.id}
          button={buttonList[plan.id]}
          interval={plan.interval}
          planId={plan.id}
          price={plan.price}
        >
          <PricingFeature>
            {t('feature_team_member', {
              number: plan.features.teamMember,
            })}
          </PricingFeature>
          <PricingFeature>
            {t('feature_website', {
              number: plan.features.website,
            })}
          </PricingFeature>
          <PricingFeature>
            {t('feature_storage', {
              number: plan.features.storage,
            })}
          </PricingFeature>
          <PricingFeature>
            {t('feature_transfer', {
              number: plan.features.transfer,
            })}
          </PricingFeature>
          <PricingFeature>{t('feature_email_support')}</PricingFeature>
        </PricingCard>
      ))}
    </div>
  );
}
