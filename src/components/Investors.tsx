import { User } from 'lucide-react';

const Investors = () => {
  return (
    <section id="investors" className="py-24 bg-white">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-[36px] lg:text-[42px] font-bold text-gray-900 tracking-tight leading-[1.1] mb-5">
            Meet Investors Looking for<br/>
            the Next Big Startup
          </h2>
          <p className="text-gray-800 text-[15px] max-w-[650px] mx-auto font-medium leading-[1.6]">
            Top angel investors, venture capitalists, and startup mentors attend<br/>
            Karo Pitch events to discover high-potential founders.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Left Column (Span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            
            {/* Logos Box */}
            <div className="border border-gray-200 rounded-[20px] p-8 flex justify-around items-center bg-white h-[180px] shadow-sm">
               {/* Investor K Logo */}
               <div className="flex flex-col items-center justify-center pt-2">
                 <div className="flex items-center justify-center mb-4">
                   <div className="w-[3px] h-[26px] bg-[#EA773B] rounded-full mr-[3px]"></div>
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#EA773B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-90">
                     <path d="M19 5L9 12L19 19"/>
                   </svg>
                 </div>
                 <span className="font-semibold text-gray-800 text-[14px]">Investor</span>
               </div>
               
               {/* AngelList Logo */}
               <div className="flex flex-col items-center justify-center pt-2">
                 <div className="mb-4">
                   <svg className="w-[34px] h-[34px] text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                     <circle cx="12" cy="12" r="10" />
                     <path d="M12 2v20" />
                     <path d="M12 12 5 19" />
                     <path d="M12 12l7 7" />
                   </svg>
                 </div>
                 <span className="font-semibold text-gray-800 text-[14px]">AngelList</span>
               </div>
               
               {/* Producthunt Logo */}
               <div className="flex flex-col items-center justify-center pt-2">
                 <div className="w-[38px] h-[38px] rounded-full bg-[#EA532A] text-white flex items-center justify-center font-bold text-[20px] mb-4 pb-[1px]">
                   P
                 </div>
                 <span className="font-semibold text-gray-800 text-[14px]">Producthunt</span>
               </div>
            </div>

            {/* Bottom Left Avatars Box */}
            <div className="border border-gray-200 rounded-[20px] p-6 flex justify-around items-center bg-white h-[140px] shadow-sm">
               <img src="https://i.pravatar.cc/150?u=12" alt="Investor" className="w-[84px] h-[84px] rounded-full object-cover shadow-sm bg-gray-100" />
               <img src="https://i.pravatar.cc/150?u=22" alt="Investor" className="w-[84px] h-[84px] rounded-full object-cover shadow-sm bg-gray-100" />
               <img src="https://i.pravatar.cc/150?u=32" alt="Investor" className="w-[84px] h-[84px] rounded-full object-cover shadow-sm bg-gray-100" />
            </div>

          </div>

          {/* Right Column (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* Top Right Avatars */}
            <div className="border border-gray-200 rounded-[20px] p-6 flex justify-around items-center bg-white h-[140px] shadow-sm">
               <img src="https://i.pravatar.cc/150?u=42" alt="Investor" className="w-[84px] h-[84px] rounded-full object-cover shadow-sm bg-gray-100" />
               <div className="w-[84px] h-[84px] rounded-full bg-[#1A2E35] text-white/60 text-xs flex items-center justify-center font-bold tracking-[0.2em] shadow-inner">
                 TECH
               </div>
               <img src="https://i.pravatar.cc/150?u=52" alt="Investor" className="w-[84px] h-[84px] rounded-full object-cover shadow-sm bg-gray-100" />
            </div>

            {/* Bottom Right Vertical Cards */}
            <div className="grid grid-cols-3 gap-4 h-[180px]">
               {/* Card 1: Actual Person */}
               <div className="border border-gray-200 rounded-[20px] p-5 flex flex-col items-center justify-center bg-white shadow-sm">
                 <img src="https://i.pravatar.cc/150?u=62" alt="Investor" className="w-[60px] h-[60px] rounded-[18px] object-cover mb-4 shadow-sm bg-gray-100" />
                 <div className="font-bold text-gray-900 text-[11px] mb-3 w-full text-center truncate px-1">Piezon Gevion</div>
                 <div className="w-full h-1.5 bg-gray-200 rounded-full mb-2"></div>
                 <div className="w-3/4 h-1.5 bg-gray-200 rounded-full"></div>
               </div>
               
               {/* Card 2: Placeholder */}
               <div className="border border-gray-200 rounded-[20px] p-5 flex flex-col items-center justify-center bg-white shadow-sm">
                 <div className="w-[60px] h-[60px] rounded-[18px] bg-[#E5E7EB] mb-4 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]">
                    <User className="text-gray-400 w-8 h-8" strokeWidth={1.5} />
                 </div>
                 <div className="w-full h-2 bg-[#E5E7EB] rounded-full mb-3 mt-1"></div>
                 <div className="w-full h-1.5 bg-[#E5E7EB] rounded-full mb-2.5"></div>
                 <div className="w-4/5 h-1.5 bg-[#E5E7EB] rounded-full"></div>
               </div>
               
               {/* Card 3: Placeholder */}
               <div className="border border-gray-200 rounded-[20px] p-5 flex flex-col items-center justify-center bg-white shadow-sm">
                 <div className="w-[60px] h-[60px] rounded-[18px] bg-[#E5E7EB] mb-4 flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]">
                    <User className="text-gray-400 w-8 h-8" strokeWidth={1.5} />
                 </div>
                 <div className="w-full h-2 bg-[#E5E7EB] rounded-full mb-3 mt-1"></div>
                 <div className="w-full h-1.5 bg-[#E5E7EB] rounded-full mb-2.5"></div>
                 <div className="w-4/5 h-1.5 bg-[#E5E7EB] rounded-full"></div>
               </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Investors;
