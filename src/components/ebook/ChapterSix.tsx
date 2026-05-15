import React from 'react';
import { motion } from 'framer-motion';
import CustomerServiceIcon from '../../assets/customer-service.svg';
import Icon1 from '../../assets/chap 6.png';
import Icon2 from '../../assets/chap 6 (2).png';
import Icon3 from '../../assets/chap 6 (3).png';
import Icon4 from '../../assets/chP 6 (4).png';



const costs = [
  {
    title: '30-40% increase in material waste',
    icon: Icon1
  },
  {
    title: 'Significant project delays',
    icon: Icon2
  },
  {
    title: 'Escalating costs due to rework',
    icon: Icon3
  },
  {
    title: 'Increased operational risks',
    icon: Icon4
  }
];

const ChapterSix: React.FC = () => {
  return (
    <section className="bg-white py-0 px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl"
      >
        <h2 className="text-[#1F2937] font-sora font-bold text-xl md:text-2xl lg:text-2xl mb-4">
          Chapter 6: The Cost of Not Using BIM
        </h2>
        <p className="text-[#4B5563] font-inter text-base mb-12">
          Without BIM, projects face:
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 lg:gap-x-10 mb-16 mt-12">
          {costs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-full h-10 md:h-10 mb-6">
                {/* Box with Border (Rounded top, sharp bottom) */}
                <div className="absolute inset-0 border-[3px] border-[#E5E7EB] rounded-t-md md:rounded-t-xl rounded-b-none bg-white"></div>

                {/* Icon sitting on top border */}
                <div className="absolute -top-5 md:-top-6 left-1/2 -translate-x-1/2 bg-white px-2 md:px-3 z-10">
                  <img src={item.icon} alt={item.title} className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                </div>
              </div>

              {/* Text Content Below Box */}
              <p className="text-[#1F2937] font-sora font-bold text-center text-xs md:text-sm lg:text-base leading-[1.3] max-w-[180px]">
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
          className="flex flex-col sm:flex-row items-center justify-between gap-6 py-4 mt-4 border-t border-gray-50"
        >
          <img src={CustomerServiceIcon} alt="Customer Service" className="w-14 h-14 shrink-0 object-contain" />
          
          <p className="text-lg md:text-lg font-sora font-bold text-[#1F2937] leading-tight text-center flex-1 px-4">
            Understand the Cost Impact <br /> on Your Project
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

export default ChapterSix;
