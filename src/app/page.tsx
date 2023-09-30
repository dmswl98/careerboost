'use client';

import Footer from '@/features/Home/Footer';
import Header from '@/features/Home/Header';
import Main from '@/features/Home/Main';

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-white">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
