import { ShoppingBag, Rocket, Briefcase, Cloud, Factory, MapPin } from 'lucide-react';

const StartupsLookingFor = () => {
  const categories = [
    {
      title: 'D2C Brands',
      description: 'Submit your startup D2C brends.',
      icon: <ShoppingBag className="w-5 h-5 text-indigo-700" />,
      bgClass: 'bg-[#EDEDFC]'
    },
    {
      title: 'Consumer Startups',
      description: 'Ceeate rescrtets and consumer startups.',
      icon: <Rocket className="w-5 h-5 text-[#E66228]" />,
      bgClass: 'bg-[#FEEDE3]'
    },
    {
      title: 'MSMEs',
      description: 'Oreats empesities and menisroring and MSMEs.',
      icon: <Briefcase className="w-5 h-5 text-[#2B5DE2]" />,
      bgClass: 'bg-[#E6EEFD]'
    },
    {
      title: 'SaaS Startups',
      description: 'Secure funding and sxts emetice startups.',
      icon: <Cloud className="w-5 h-5 text-[#2B5DE2]" />,
      bgClass: 'bg-[#E6EEFD]'
    },
    {
      title: 'Manufacturing Businesses',
      description: 'Manufactoriehes and maruItectoring businasces.',
      icon: <Factory className="w-5 h-5 text-[#63359D]" />,
      bgClass: 'bg-[#EFE8F6]'
    },
    {
      title: 'Bharat-Focused Startups',
      description: 'Secure funktmy and Bhsser-Toouced Stertops.',
      icon: <MapPin className="w-5 h-5 text-[#E66228]" />,
      bgClass: 'bg-[#FEEDE3]'
    }
  ];

  return (
    <section id="startups" className="py-24 bg-[#F8F9FB]">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-[40px] font-bold text-gray-900 tracking-tight">
            Startups We're Looking For
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-7 flex flex-col items-start border border-gray-100/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center mb-5 ${category.bgClass}`}>
                {category.icon}
              </div>
              <h3 className="text-[19px] font-bold text-gray-900 mb-2.5 tracking-tight">
                {category.title}
              </h3>
              <p className="text-gray-600 text-[14px] leading-[1.4] font-medium pr-4">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartupsLookingFor;
