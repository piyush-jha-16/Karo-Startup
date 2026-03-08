import { BookOpen, Users, Compass } from 'lucide-react';

const PoweredBy = () => {
  const stats = [
    {
      title: 'Thousands of Startup Stories',
      icon: <BookOpen className="w-6 h-6 text-karo-blue" />,
    },
    {
      title: 'Large Founder Community',
      icon: <Users className="w-6 h-6 text-karo-blue" />,
    },
    {
      title: 'Active Startup Ecosystem Coverage',
      icon: <Compass className="w-6 h-6 text-karo-blue" />,
    }
  ];

  return (
    <section className="py-24 bg-karo-grayLight/50">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center pt-8 border-t border-gray-200">
        
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Powered by KaroStartup
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
            KaroStartup is one of India's leading startup media platforms covering founders, startups, and innovation across the country. With thousands of startup stories published and a growing community of founders and investors, KaroStartup supports the next generation of entrepreneurs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 border border-gray-100 card-shadow flex flex-col items-center justify-center text-center hover:card-shadow-hover transition-all duration-300"
            >
              <div className="w-12 h-12 bg-karo-blue/10 rounded-xl flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <h4 className="font-bold text-gray-900 leading-snug">
                {stat.title}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PoweredBy;
