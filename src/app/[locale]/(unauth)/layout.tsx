import { Footer } from './_components/footer';
import { Navbar } from './_components/nav-bar';

export default function UnAuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
