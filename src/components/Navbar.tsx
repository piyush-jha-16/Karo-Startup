import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link tracking based on scroll position mapping to sections
      const sections = ['home', 'about', 'how-it-works', 'startups', 'investors', 'apply'];
      let current = 'Home';
      
      if (window.scrollY < 100) {
        current = 'Home';
      } else {
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Check if section is well within viewport
            if (rect.top <= 200 && rect.bottom >= 200) {
              const formattedName = section.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
              current = formattedName;
              if (current === 'How It Works') current = 'How It Works';
              break;
            }
          }
        }
      }
      setActiveLink(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    'Home', 'About', 'How It Works', 'Startups', 'Investors', 'Apply'
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-karo-purpleLight to-karo-purple flex items-center justify-center text-white font-bold text-xl">
            K
          </div>
          <span className={`font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            Karo Pitch
          </span>
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
             const isActive = activeLink === link;
             const linkHref = link.toLowerCase().replace(/ /g, '-');
             
             return (
              <a 
                key={link} 
                href={`#${linkHref}`}
                onClick={(e) => {
                  const target = document.getElementById(linkHref);
                  if (target) {
                    e.preventDefault();
                    window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
                  } else if (linkHref === 'home') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                  setActiveLink(link);
                }}
                className={`relative text-sm font-semibold transition-all duration-300 pb-1 ${
                  isActive 
                    ? (isScrolled ? 'text-karo-blue' : 'text-white') 
                    : (isScrolled ? 'text-gray-600 hover:text-karo-blue' : 'text-gray-300 hover:text-white')
                }`}
              >
                {link}
                <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 bg-current ${isActive ? 'w-full' : 'w-0'}`}></span>
              </a>
             )
          })}
        </div>

        {/* CTA Button */}
        <div>
          <button className="bg-karo-blue hover:bg-karo-blueHover text-white px-6 py-2.5 rounded-lg font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
