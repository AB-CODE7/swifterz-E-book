import React from 'react';
import { motion } from 'framer-motion';
import CustomerServiceIcon from '../../assets/customer-service.svg';


const costs = [
  {
    title: '30-40% increase in material waste'
  },
  {
    title: 'Significant project delays'
  },
  {
    title: 'Escalating costs due to rework'
  },
  {
    title: 'Increased operational risks'
  }
];

const ChapterSix: React.FC = () => {
  return (
    <section className="bg-white py-0 px-8 lg:px-12 mb-6">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl"
      >
        <h2 className="text-[#1F2937] font-sora font-bold text-xl md:text-2xl lg:text-3xl mb-4">
          Chapter 6: The Cost of Not Using BIM
        </h2>
        <p className="text-[#4B5563] font-inter text-base mb-12">
          Without BIM, projects face:
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20 lg:gap-x-14 mb-24 mt-16">
          {costs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-full h-12 md:h-14 mb-8">
                {/* Tab/Box Shape */}
                <div className="absolute inset-0 border-[1.5px] border-gray-200 rounded-xl md:rounded-2xl bg-white"></div>
                
                {/* Empty Circle Indicator */}
                <div className="absolute -top-7 md:-top-8 left-1/2 -translate-x-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border-[4px] md:border-[5px] border-gray-300 z-10">
                </div>
              </div>
              
              {/* Text Content Below Box */}
              <p className="text-[#1F2937] font-sora font-bold text-center text-sm md:text-base lg:text-lg leading-[1.3] max-w-[220px]">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-[#1F2937] font-inter italic font-bold text-lg lg:text-xl mt-12"
        >
          If it's not coordinated in design, it will fail on site.
        </motion.p>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-8 py-6 mt-4 border-t border-gray-50"
        >
          <div className="flex items-center gap-4 flex-1">
            <img src={CustomerServiceIcon} alt="Customer Service" className="w-12 h-12 shrink-0 object-contain" />
            <p className="text-lg md:text-xl font-sora font-bold text-[#1F2937] leading-tight">
              Understand the Cost Impact <br /> on Your Project
            </p>
          </div>
          
          <button className="bg-[#926B15] text-white px-16 py-4 rounded-md font-sora font-bold transition-all shadow-md hover:shadow-lg whitespace-nowrap">
            Consult For FREE
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ChapterSix;
