import React from 'react';
import { motion } from 'framer-motion';
import CustomerServiceIcon from '../../assets/customer-service.svg';

import ReactiveIcon from '../../assets/chap 2.svg';
import MisalignedIcon from '../../assets/chap 2 misalinged.svg';
import CostIcon from '../../assets/chap 2 costescalation.svg';
import HandoverIcon from '../../assets/chap 2 handoverdata.svg';

const failurePoints = [
  {
    title: 'Misaligned Designs',
    description: 'Disciplines working in isolation, clashes on site occur',
    icon: MisalignedIcon,
    align: 'left'
  },
  {
    title: 'Cost Escalation',
    description: 'Rework, delays, and variation orders',
    icon: CostIcon,
    align: 'right'
  },
  {
    title: 'Reactive Decision-Making',
    description: 'Issues identified only during execution',
    icon: ReactiveIcon,
    align: 'left'
  },
  {
    title: 'Incomplete Handover Data',
    description: 'Operations teams inherit uncertainty',
    icon: HandoverIcon,
    align: 'right'
  }
];

const ChapterTwo: React.FC = () => {
  return (
    <section className="bg-white py-0 px-8 lg:px-12 mb-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl"
      >
        <h2 className="text-[#1F2937] font-sora font-bold text-xl md:text-2xl lg:text-2xl mb-8 lg:mb-12">
          Chapter 2: Where Most Infrastructure Projects Go Wrong
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {failurePoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center gap-6 lg:gap-10 ${point.align === 'left' ? 'justify-end' : 'justify-start'}`}
            >
              {point.align === 'right' && (
                <div className="w-20 h-20 lg:w-28 lg:h-28 bg-gray-50 rounded-3xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm transition-transform hover:scale-105 duration-300">
                  <img src={point.icon} alt={point.title} className="w-10 h-10 lg:w-16 lg:h-16 object-contain" />
                </div>
              )}

              <div className="w-full max-w-[280px] lg:max-w-[320px] text-left">
                <h3 className="text-[#1F2937] font-sora font-bold text-lg lg:text-xl mb-1">
                  {point.title}
                </h3>
                <p className="text-[#4B5563] font-inter text-sm lg:text-[15px] leading-relaxed">
                  {point.description}
                </p>
              </div>

              {point.align === 'left' && (
                <div className="w-20 h-20 lg:w-28 lg:h-28 bg-gray-50 rounded-3xl flex items-center justify-center shrink-0 border border-gray-100 shadow-sm transition-transform hover:scale-105 duration-300">
                  <img src={point.icon} alt={point.title} className="w-10 h-10 lg:w-16 lg:h-16 object-contain" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

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
              Get Expert Insights on Your Current <br /> Execution Strategy
            </p>
          </div>

<<<<<<< HEAD
          <button className="bg-[#926B15] text-white px-10 py-3 rounded-md font-sora font-bold transition-all shadow-md hover:shadow-lg whitespace-nowrap">
            Consult For FREE
          </button>
=======
          <a href="https://swifterz.ae/book-a-consultation" target="_blank" rel="noopener noreferrer">
            <button className="bg-[#926B15] text-white px-16 py-4 rounded-md font-sora font-bold transition-all shadow-md hover:shadow-lg whitespace-nowrap">
              Consult For FREE
            </button>
          </a>
>>>>>>> ad84e18fff4d34c13e7731e4204a793d10dc289a
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ChapterTwo;
