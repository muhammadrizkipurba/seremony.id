import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer';
import NewsletterCard from './NewsletterCard';

type Props = {
  children: ReactNode;
};

const MainLayout = ({
  children
}: Props) => {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>

      <NewsletterCard />
      <Footer />
    </>
  )
}

export default MainLayout