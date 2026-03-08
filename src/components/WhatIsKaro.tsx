import { BarChart3, LineChart, PieChart } from 'lucide-react';

const WhatIsKaro = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[70px] items-center">
          
          {/* Left Text */}
          <div className="max-w-[540px]">
            <h2 className="text-[36px] lg:text-[42px] font-bold text-[#111827] mb-7 tracking-tight">
              What is Karo Pitch?
            </h2>
            <p className="text-[#4B5563] leading-[1.7] text-[16px] lg:text-[17px] mb-8 font-medium">
              Karo Pitch is a platform built to connect India's most promising founders with investors. Thousands of founders are building incredible businesses but lack access to capital and networks.
            </p>
            <p className="text-[#4B5563] leading-[1.7] text-[16px] lg:text-[17px] font-medium">
              Karo Pitch bridges that gap by creating curated pitch opportunities and a discovery platform for investors to find the next big startup.
            </p>
          </div>

          {/* Right Illustration Dashboard Mockup */}
          <div className="relative flex justify-center lg:justify-end w-full">
            <div className="bg-[#F8F9FB] rounded-[24px] p-10 w-full max-w-[520px] relative overflow-hidden flex flex-col items-center">
                
                {/* White Dashboard Card */}
                <div className="bg-white rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-[#F3F4F6] p-8 w-[90%] mb-12 relative z-0">
                  
                  {/* Top Bar Mockup */}
                  <div className="flex justify-between items-center mb-8 px-1">
                    <div className="w-[85px] h-[10px] bg-[#E5E7EB] rounded-full"></div>
                    <div className="w-[45px] h-[10px] bg-[#DBEAFE] rounded-full"></div>
                  </div>
                  
                  {/* Three Square Icons */}
                  <div className="grid grid-cols-3 gap-5 mb-8">
                    {/* Green Box */}
                    <div className="aspect-square bg-[#F0FDF4] rounded-[16px] flex items-center justify-center text-[#22C55E]">
                      <BarChart3 strokeWidth={1.5} className="w-[28px] h-[28px]" />
                    </div>
                    {/* Blue Box */}
                    <div className="aspect-square bg-[#EFF6FF] rounded-[16px] flex items-center justify-center text-[#3B82F6]">
                      <LineChart strokeWidth={1.5} className="w-[28px] h-[28px]" />
                    </div>
                    {/* Purple Box */}
                    <div className="aspect-square bg-[#FAF5FF] rounded-[16px] flex items-center justify-center text-[#A855F7]">
                      <PieChart strokeWidth={1.5} className="w-[28px] h-[28px]" />
                    </div>
                  </div>
                  
                  {/* Bottom Rectangle Mockup */}
                  <div className="h-[110px] bg-[#FAFAFA] rounded-[16px] border border-[#F3F4F6]"></div>

                </div>

                {/* Overlapping Abstract Shapes (People & Table) */}
                <div className="absolute bottom-[-2px] left-1/2 transform -translate-x-1/2 flex items-end gap-4 z-10 w-max">
                    {/* Blue person */}
                    <div className="w-[48px] h-[100px] bg-[#1D4ED8] rounded-t-full rounded-b-sm shadow-[0_4px_10px_rgba(0,0,0,0.1)]"></div>
                    
                    {/* Black table */}
                    <div className="w-[64px] h-[64px] bg-[#1F2937] rounded-t-[16px] rounded-b-sm shadow-[0_4px_10px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center">
                      <span className="text-[#6B7280] text-[10px] font-semibold tracking-wider">Table</span>
                    </div>
                    
                    {/* Dark purple person */}
                    <div className="w-[48px] h-[120px] bg-[#2E184D] rounded-t-full rounded-b-sm shadow-[0_4px_10px_rgba(0,0,0,0.1)]"></div>
                </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatIsKaro;
