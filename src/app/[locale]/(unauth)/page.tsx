import { getTranslations } from 'next-intl/server';

import { CTA } from '@/app/[locale]/(unauth)/_components/cta';
import { FAQ } from '@/app/[locale]/(unauth)/_components/faq';
import { Features } from '@/app/[locale]/(unauth)/_components/Features';
import { Hero } from '@/app/[locale]/(unauth)/_components/hero';
import { Pricing } from '@/app/[locale]/(unauth)/_components/Pricing';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'Home',
  });

  return {
    description: t('meta_description'),
    title: t('meta_title'),
  };
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
}
