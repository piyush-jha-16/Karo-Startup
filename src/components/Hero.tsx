import { motion } from 'framer-motion';
import { Presentation, TrendingUp, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden hero-gradient text-white min-h-[600px] flex items-center">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-karo-purpleLight opacity-50 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-karo-purpleDark opacity-30 blur-3xl"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6">
              Pitch Your Startup to India's Top Investors.
            </h1>
            <p className="text-gray-200 text-base md:text-lg mb-8 leading-relaxed">
              Karo Pitch is a platform where founders across India showcase their startups, connect with investors, and raise funding through curated pitch events and a discovery platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-karo-blue hover:bg-karo-blueHover text-white px-8 py-3.5 rounded-lg font-medium transition-all shadow-lg hover:shadow-karo-blue/30 w-full sm:w-auto text-center">
                Apply to Pitch
              </button>
              <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3.5 rounded-lg font-medium transition-all backdrop-blur-sm w-full sm:w-auto text-center">
                Explore Startups
              </button>
            </div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[500px] flex items-center justify-center mt-10 lg:mt-0"
          >
            {/* Main Illustration placeholder (using a stylized div mimicking an illustration) */}
            <div className="relative w-full max-w-[450px] aspect-square">
              {/* Main character / board backdrop */}
              <div className="absolute inset-x-8 inset-y-12 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl overflow-hidden flex items-end justify-center">
                 <div className="w-48 h-64 bg-karo-purpleLight/40 rounded-t-[40px] border border-white/20 flex items-center justify-center">
                    <Presentation className="w-16 h-16 text-white/50" />
                 </div>
              </div>
              
              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-[10%] left-0 bg-white rounded-xl shadow-xl p-3 flex items-center gap-3 w-40"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Section</div>
                  <div className="text-sm font-bold text-gray-900">Startup</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute top-[20%] right-[-5%] bg-white rounded-xl shadow-xl p-3 flex items-center gap-3 w-40"
              >
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <span className="font-bold text-sm">$</span>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Capital</div>
                  <div className="text-sm font-bold text-gray-900">Funding</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [-8, 8, -8] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-[20%] left-[-5%] bg-white rounded-xl shadow-xl p-3 flex items-center gap-3 w-40 z-20"
              >
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Network</div>
                  <div className="text-sm font-bold text-gray-900">Investors</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Curved bottom separator -> handled by standard section spacing or a custom svg */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[50px] lg:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#ffffff"></path>
            <path d="M0,0V15.81C13.47,23.32,28.7,30,44.22,35.61,102.39,56.55,166.4,66.19,228.6,63.1c61.4-3.08,121.2-19.78,179.8-34.9,56-14.47,112.5-28.7,171-[37],57.2-7.85,115.1-9.45,171.7-5.3,55.9,4.09,110.8,12.79,165.1,17.4,56,4.72,111.4-1.74,166.3-15.6C1138.1,13.71,1169.5,4.7,1200,0Z" opacity=".5" fill="#ffffff"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
