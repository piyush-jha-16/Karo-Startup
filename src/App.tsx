import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import WhatIsKaro from './components/WhatIsKaro';
import HowItWorks from './components/HowItWorks';
import StartupsLookingFor from './components/StartupsLookingFor';
import Investors from './components/Investors';
import FeaturedStartups from './components/FeaturedStartups';
import PoweredBy from './components/PoweredBy';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white selection:bg-karo-blue selection:text-white pb-0">
      <Navbar />
      
      <main>
        <Hero />
        <WhatIsKaro />
        <HowItWorks />
        <StartupsLookingFor />
        <Investors />
        <FeaturedStartups />
        <PoweredBy />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
