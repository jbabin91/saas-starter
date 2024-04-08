import { getTranslations } from 'next-intl/server';

import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/nav-bar';
import { CTA } from '@/features/landing/components/cta';
import { FAQ } from '@/features/landing/components/faq';
import { Features } from '@/features/landing/components/features';
import { Hero } from '@/features/landing/components/hero';
import { Pricing } from '@/features/landing/components/pricing';

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
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
