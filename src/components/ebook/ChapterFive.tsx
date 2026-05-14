import React from 'react';
import { motion } from 'framer-motion';
import CustomerServiceIcon from '../../assets/customer-service.svg';

import SustainabilityImg from '../../assets/chap 5.jpeg';

const sustainabilityPoints = [
  'Reducing material waste through precise planning',
  'Optimizing energy performance during design',
  'Supporting lifecycle asset management'
];

const ChapterFive: React.FC = () => {
  return (
    <section className="bg-white py-0 px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl"
      >
        <h2 className="text-[#1F2937] font-sora font-bold text-xl md:text-2xl lg:text-2xl mb-8 lg:mb-10">
          Chapter 5: BIM and <span className="text-[#0A9E59]">Sustainability</span> — Beyond Compliance
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-10 lg:mb-12">
          {/* Left Column */}
          <div className="lg:w-1/2 space-y-4">
            <p className="text-[#4B5563] font-inter text-base lg:text-lg">
              In the UAE, sustainability is not optional.
            </p>
            <p className="text-[#4B5563] font-inter text-base lg:text-lg">
              With initiatives like <span className="font-bold text-black">Net Zero 2050</span>, infrastructure must deliver long-term efficiency.
            </p>
            <p className="text-[#4B5563] font-inter text-base lg:text-lg pt-4">
              BIM Contributes to Sustainability by: 👉🏻
            </p>
            <p className="text-[#4B5563] font-inter text-base lg:text-lg italic font-medium pt-4">
              "Sustainability isn’t a certificate. It’s a performance timeline."
            </p>
          </div>

          {/* Right Column - Timeline Style */}
          <div className="lg:w-1/2 relative pl-8">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gray-100" />
            <div className="space-y-4 lg:space-y-6">
              {sustainabilityPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[37px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white border-2 border-[#10B981] z-10" />
                  <div className="bg-white border border-gray-50 rounded-full py-2.5 px-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <p className="text-[#1F2937] font-sora font-semibold text-[13px] lg:text-[14px]">
                      {point}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Graphic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gray-50 aspect-[16/9] lg:aspect-[21/8] border border-gray-100 flex items-center justify-center overflow-hidden w-full max-w-6xl mx-auto"
        >
          <img
            src={SustainabilityImg}
            alt="Sustainability Visual"
            className="w-full h-full object-cover transition-all duration-1000"
          />
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-8 py-6 mt-4 border-t border-gray-50"
        >
          <div className="flex items-center gap-4 flex-1">
            <img src={CustomerServiceIcon} alt="Customer Service" className="w-14 h-14 shrink-0 object-contain ml-6" />
            <p className="text-lg md:text-lg font-sora font-bold text-[#1F2937] leading-tight ml-6">
              Align Your Project with UAE <br /> Sustainability Goals
            </p>
          </div>

          <button className="bg-[#926B15] text-white px-10 py-3 rounded-md font-sora font-bold transition-all shadow-md hover:shadow-lg whitespace-nowrap">
            Consult For FREE
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ChapterFive;
