import { Leaf } from 'lucide-react';

const FeaturedStartups = () => {
  const startups = Array.from({ length: 3 }).map((_, i) => ({
    id: i,
    name: 'EcoKart',
    category: 'D2C Sustainability',
    description: 'Sustainable consumer products made for modern India.',
    iconColor: i === 0 ? 'text-green-500 bg-green-50' : i === 1 ? 'text-blue-500 bg-blue-50' : 'text-purple-500 bg-purple-50'
  }));

  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center pt-8 border-t border-gray-100">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {startups.map((startup) => (
            <div 
              key={startup.id} 
              className="bg-white rounded-2xl p-8 border border-gray-100 card-shadow hover:card-shadow-hover transition-all duration-300 group text-left"
            >
              <div className={`w-12 h-12 rounded-full mb-6 flex items-center justify-center ${startup.iconColor}`}>
                <Leaf className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {startup.name}
              </h3>
              
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                  {startup.category}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {startup.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default FeaturedStartups;
