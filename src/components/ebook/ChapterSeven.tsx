import React from 'react';
import { motion } from 'framer-motion';

import { Headset } from 'lucide-react';

const benchmarks = [
  {
    title: <>Fully digital <br /> planning</>
  },
  {
    title: 'Integrated project delivery'
  },
  {
    title: <>Data-driven <br /> decision-making</>
  }
];

const ChapterSeven: React.FC = () => {
  return (
    <section className="bg-white py-0 px-8 lg:px-12 lg:mb-[-80px] lg:mt-[-120px]">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl"
      >
        <h2 className="text-[#1F2937] font-sora font-bold text-xl md:text-2xl lg:text-3xl mb-4 leading-tight">
          Chapter 7: The Future of Infrastructure Delivery in Dubai
        </h2>
        <p className="text-[#353535] font-sora text-base mb-10">
          Projects like the Gold Line are setting a new benchmark:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benchmarks.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-[16/9] bg-[#F3F4F6] rounded-sm mb-4 transition-colors duration-300" />
              <p className="text-[#1F2937] font-sora font-semibold text-center text-[15px] leading-snug max-w-[180px] mx-auto">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="space-y-1 mb-16"
        >
          <p className="text-[#1F2937] font-inter italic font-medium text-lg">
            BIM is no longer optional.
          </p>
          <p className="text-[#1F2937] font-inter italic font-medium text-lg">
            It's becoming the foundation of modern infrastructure execution.
          </p>
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
            <Headset className="w-12 h-12 text-[#926B15] shrink-0" />
            <p className="text-lg md:text-xl font-sora font-bold text-[#1F2937] leading-tight">
              Future-Proof Your Project <br /> with BIM Strategy
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

export default ChapterSeven;
