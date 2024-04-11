import type { PLAN_ID } from '@/configs/pricingConfig';

import type { EnumValue } from './Enum';

export type PlanId = EnumValue<typeof PLAN_ID>;

export const BILLING_INTERVAL = {
  MONTH: 'month',
  YEAR: 'year',
} as const;

export type BillingInterval = EnumValue<typeof BILLING_INTERVAL>;

export type PricingPlan = {
  id: PlanId;
  price: number;
  interval: BillingInterval;
  devPriceId: string;
  prodPriceId: string;
  features: {
    teamMember: number;
    website: number;
    storage: number;
    transfer: number;
  };
};

export type IStripeSubscription = {
  stripeSubscriptionId: string | null;
  stripeSubscriptionPriceId: string | null;
  stripeSubscriptionStatus: string | null;
  stripeSubscriptionCurrentPeriodEnd: number | null;
};
