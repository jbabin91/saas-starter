import './src/libs/env.mjs';

import withBundleAnalyzer from '@next/bundle-analyzer';
import withNextIntl from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
};

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withNextIntlConfig = withNextIntl('./src/libs/i18n.ts');

export default bundleAnalyzer(withNextIntlConfig(nextConfig));
