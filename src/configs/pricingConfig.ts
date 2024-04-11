/* eslint-disable sort-keys-fix/sort-keys-fix */
import { BILLING_INTERVAL, type PricingPlan } from '@/types/Subscription';

export const PLAN_ID = {
  ENTERPRISE: 'enterprise',
  FREE: 'free',
  PREMIUM: 'premium',
} as const;

export const PricingPlanList = [
  {
    id: PLAN_ID.FREE,
    price: 0,
    interval: BILLING_INTERVAL.MONTH,
    devPriceId: '',
    prodPriceId: '',
    features: {
      teamMember: 2,
      website: 2,
      storage: 2,
      transfer: 2,
    },
  },
  {
    id: PLAN_ID.PREMIUM,
    price: 79,
    interval: BILLING_INTERVAL.MONTH,
    devPriceId: '',
    prodPriceId: '',
    features: {
      teamMember: 5,
      website: 5,
      storage: 5,
      transfer: 5,
    },
  },
  {
    id: PLAN_ID.ENTERPRISE,
    price: 199,
    interval: BILLING_INTERVAL.MONTH,
    devPriceId: '',
    prodPriceId: '',
    features: {
      teamMember: 100,
      website: 100,
      storage: 100,
      transfer: 100,
    },
  },
] satisfies PricingPlan[];
