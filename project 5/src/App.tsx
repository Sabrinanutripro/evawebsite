import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProgramIntroSection } from './components/ProgramIntroSection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { ProgramDetailsSection } from './components/ProgramDetailsSection';
import { ContentGuidesSection } from './components/ContentGuidesSection';
import { ForWhoSection } from './components/ForWhoSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { BonusSection } from './components/BonusSection';
import { FAQSection } from './components/FAQSection';
import { CoachIntroShort } from './components/CoachIntroShort';
import { PricingSection } from './components/PricingSection';
import { CallToActionFinal } from './components/CallToActionFinal';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';
import { EvaStoryPage } from './components/EvaStoryPage';
import { ChatWidget } from './components/ChatWidget';
import { MobileFixedCTA } from './components/MobileFixedCTA';

function HomePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar />
      <HeroSection />
      <div id="programme-intro">
        <ProgramIntroSection />
      </div>
      <WhatYouGetSection />
      <div id="programme-details">
        <ProgramDetailsSection />
      </div>
      <div id="content-guides">
        <ContentGuidesSection />
      </div>
      <div id="for-who">
        <ForWhoSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
        <BeforeAfterSection />
      </div>
      <BonusSection />
      <FAQSection />
      <div id="coach">
        <CoachIntroShort />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <CallToActionFinal />
      <NewsletterSection />
      <Footer />
      <ChatWidget />
      <MobileFixedCTA />
    </main>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mon-histoire" element={<EvaStoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;