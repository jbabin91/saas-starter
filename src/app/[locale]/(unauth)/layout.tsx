import { Footer } from './_components/footer';
import { SiteHeader } from './_components/SiteHeader';

export default function UnAuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader />
      {children}
      <Footer />
    </>
  );
}
