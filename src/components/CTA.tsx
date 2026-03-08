import { Rocket } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        
        <div className="hero-gradient rounded-[2rem] p-10 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">
          
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-karo-purpleLight opacity-20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-karo-blue opacity-20 blur-3xl rounded-full"></div>

          {/* Left Content */}
          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Pitch Your Startup?
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              Join the next generation of founders building the future of India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-karo-blue hover:bg-karo-blueHover text-white px-8 py-3.5 rounded-lg font-medium transition-all shadow-md w-full sm:w-auto text-center">
                Apply Now
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3.5 rounded-lg font-medium transition-all backdrop-blur-sm w-full sm:w-auto text-center">
                Partner With Us
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative z-10 hidden md:flex items-center justify-center">
             <div className="relative w-64 h-64 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center">
                <div className="w-32 h-32 bg-orange-500 rounded-full flex items-center justify-center animate-bounce shadow-[0_0_40px_rgba(249,115,22,0.4)]">
                   <Rocket className="w-16 h-16 text-white" />
                </div>
                
                {/* Growth Chart */}
                <svg className="absolute bottom-4 left-6 right-6 w-[80%] h-16 opacity-50" viewBox="0 0 100 50">
                  <path d="M0 50 L20 30 L40 40 L60 10 L80 20 L100 0" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;
