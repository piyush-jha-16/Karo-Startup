const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Apply with Your Pitch Deck',
      description: 'Submit your startup details and pitch deck.',
      badgeColor: 'bg-[#4338CA] shadow-[0_4px_14px_rgba(67,56,202,0.3)]'
    },
    {
      number: '2',
      title: 'Get Shortlisted by KaroStartup',
      description: 'Our team reviews applications and selects promising startups.',
      badgeColor: 'bg-[#7E22CE] shadow-[0_4px_14px_rgba(126,34,206,0.3)]'
    },
    {
      number: '3',
      title: 'Pitch Live to Investors',
      description: 'Present your startup directly to a panel of investors.',
      badgeColor: 'bg-[#3B82F6] shadow-[0_4px_14px_rgba(59,130,246,0.3)]'
    },
    {
      number: '4',
      title: 'Raise Funding & Scale',
      description: 'Secure funding and grow your startup.',
      badgeColor: 'bg-[#F97316] shadow-[0_4px_14px_rgba(249,115,22,0.3)]'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-slate-50/50">
      {/* Soft Blurred Abstract Background Gradients */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 transform -translate-x-1/4 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-pink-100/80 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 transform translate-x-1/4 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative z-20">
          <h2 className="text-4xl lg:text-[42px] font-bold text-gray-900 tracking-tight">
            How It Works
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-indigo-100 hidden lg:block z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step) => (
              <div 
                key={step.number} 
                className="bg-white rounded-[24px] p-8 hover:-translate-y-2 transition-all duration-300 relative group border border-gray-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]"
              >
                <div className={`w-14 h-14 rounded-2xl text-white flex items-center justify-center text-xl font-bold mb-8 ${step.badgeColor}`}>
                  {step.number}
                </div>
                <h3 className="text-[22px] font-bold text-gray-900 mb-4 leading-[1.3] tracking-tight">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
