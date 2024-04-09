import { useTranslations } from 'next-intl';

import { Background } from '@/components/background';
import { Icons } from '@/components/icons';

import { FeatureCard } from './feature-card';

export function Features() {
  const t = useTranslations('Features');

  return (
    <Background>
      <div className="px-3 py-16">
        <div className="mx-auto mb-12 max-w-screen-md text-center">
          <div className="bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 bg-clip-text text-sm font-bold text-transparent">
            {t('section_subtitle')}
          </div>
          <div className="mt-1 text-3xl font-bold">{t('section_title')}</div>
          <div className="mt-1 text-lg text-muted-foreground">
            {t('section_description')}
          </div>
        </div>
        <div className="mx-auto grid max-w-screen-lg grid-cols-3 gap-x-3 gap-y-8">
          <FeatureCard icon={<Icons.Cube />} title={t('feature1_title')}>
            {t('feature_description')}
          </FeatureCard>
          <FeatureCard icon={<Icons.Cube />} title={t('feature2_title')}>
            {t('feature_description')}
          </FeatureCard>
          <FeatureCard icon={<Icons.Cube />} title={t('feature3_title')}>
            {t('feature_description')}
          </FeatureCard>
          <FeatureCard icon={<Icons.Cube />} title={t('feature4_title')}>
            {t('feature_description')}
          </FeatureCard>
          <FeatureCard icon={<Icons.Cube />} title={t('feature5_title')}>
            {t('feature_description')}
          </FeatureCard>
          <FeatureCard icon={<Icons.Cube />} title={t('feature6_title')}>
            {t('feature_description')}
          </FeatureCard>
        </div>
      </div>
    </Background>
  );
}
