import '@/styles/globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider, useMessages } from 'next-intl';

import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Using internationalization in Client Components
  const messages = useMessages();

  return (
    <html suppressHydrationWarning lang={params.locale}>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute="class"
          defaultTheme="system"
        >
          <NextIntlClientProvider locale={params.locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

// Enables edge runtime
// export const runtime = 'edge';
