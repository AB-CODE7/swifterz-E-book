import React from 'react';
import { motion } from 'framer-motion';
import CustomerServiceIcon from '../../assets/customer-service.svg';
import CheckMarkIcon from '../../assets/check-mark.svg';
import mdImg from '../../assets/EbookImg/MDimg.jpg';

const deliverables = [
  'Clash-free coordinated models (Architecture, Structure, MEP)',
  '4D & 5D BIM for schedule and cost control',
  'As-built BIM (LOD 500) for lifecycle management',
  'Digital twin readiness for operations'
];

const ChapterEight: React.FC = () => {
  return (
    <>
      <section className="bg-white py-0 px-8 lg:px-12 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl"
        >
          <h2 className="text-[#1F2937] font-sora font-bold text-xl md:text-2xl lg:text-2xl mb-4 leading-tight">
            Chapter 8: How Swifterz Delivers BIM That Performs
          </h2>

          <div className="mb-8">
            <p className="text-[#1F2937] font-inter text-base md:text-md lg:text-md mb-4">
              At <span className="font-bold">Swifterz Creative Engineering Services LLC</span>, BIM is not just a service—it’s a <span className="font-bold"><br />decision-making framework.</span>
            </p>
            <p className="text-[#1F2937] font-sora font-bold text-base md:text-md lg:text-md mb-6">
              What We Deliver:
            </p>
          </div>

          <ul className="space-y-4 mb-0 ml-14">
            {deliverables.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="flex-shrink-0">
                  <img src={CheckMarkIcon} alt="check" className="w-6 h-6 object-contain" />
                </div>
                <span className="text-[#1F2937] font-inter text-sm md:text-base lg:text-sm">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>


        </motion.div>

      </section>
      <section className='bg-white mt-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row items-start justify-start  lg:gap-0"
        >
          <div className="w-full md:w-[45%] lg:w-[40%] flex-shrink-0 lg:mt-0">
            <img
              src={mdImg}
              alt="Managing Director"
              className="w-full h-full object-contain lg:h-[0%]"
            />
          </div>

          <div className="flex-1 lg:ml-30 lg:mt-[20px]">
            <p className="text-[#1F2937] font-inter italic text-xs md:text-sm lg:text-md leading-[1.0] font-semibold mt-16">
              “Infrastructure doesn’t fail because of design—it fails when <br /> disconnected decisions meet site reality. BIM brings those <br /> decisions into a single, coordinated framework—turning<br /> complexity into controlled execution.”
            </p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-8 py-6 mt-4 border-t border-gray-50 max-w-4xl mx-auto px-8"
        >
          <div className="flex items-center gap-4 flex-1">
            <img src={CustomerServiceIcon} alt="Customer Service" className="w-14 h-14 shrink-0 object-contain ml-6" />
            <p className="text-lg md:text-lg font-sora font-bold text-[#1F2937] leading-tight ml-6">
              Start Your Project Coordination with Swifterz
            </p>
          </div>
          
          <a href="https://swifterz.ae/book-a-consultation" target="_blank" rel="noopener noreferrer">
            <button className="bg-[#926B15] text-white px-10 py-3 rounded-md font-sora font-bold transition-all shadow-md hover:shadow-lg whitespace-nowrap">
              Consult For FREE
            </button>
          </a>
        </motion.div>
      </section>
    </>
  );
};

export default ChapterEight;
