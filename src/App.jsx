import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PackagesSection from './components/PackagesSection';
import TeamSection from './components/TeamSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <PackagesSection />
      <TeamSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default App;
