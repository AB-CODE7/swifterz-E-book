import React from 'react';
import { motion } from 'framer-motion';

import CustomerServiceIcon from '../../assets/customer-service.svg';


import FullyDigitalIcon from '../../assets/chap 7.png';
import IntegratedProjectIcon from '../../assets/chap 7 integrated project.jpg';
import DataDrivenIcon from '../../assets/chap7 decision making.png';


const benchmarks = [
  {
    title: <>Fully digital <br /> planning</>,
    icon: FullyDigitalIcon
  },
  {
    title: 'Integrated project delivery',
    icon: IntegratedProjectIcon
  },
  {
    title: <>Data-driven <br /> decision-making</>,
    icon: DataDrivenIcon
  }
];

const ChapterSeven: React.FC = () => {
  return (
    <section className="bg-white py-0 px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl"
      >
        <h2 className="text-[#1F2937] font-sora font-bold text-xl md:text-2xl lg:text-2xl mb-4 leading-tight">
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
              <div className="aspect-[16/9] bg-[#F3F4F6] rounded-sm mb-4 overflow-hidden">
                <img
                  src={item.icon}
                  alt={typeof item.title === 'string' ? item.title : 'Benchmark'}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
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
          className="flex flex-col sm:flex-row items-center justify-between gap-6 py-4 mt-4 border-t border-gray-50"
        >
          <img src={CustomerServiceIcon} alt="Customer Service" className="w-14 h-14 shrink-0 object-contain" />
          
          <p className="text-lg md:text-lg font-sora font-bold text-[#1F2937] leading-tight text-center flex-1 px-4">
            Future-Proof Your Project with BIM Strategy
          </p>

          <a href="https://swifterz.ae/book-a-consultation" target="_blank" rel="noopener noreferrer">
            <button className="bg-[#926B15] text-white px-10 py-3 rounded-md font-sora font-bold transition-all shadow-md hover:shadow-lg whitespace-nowrap">
              Consult For FREE
            </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ChapterSeven;
