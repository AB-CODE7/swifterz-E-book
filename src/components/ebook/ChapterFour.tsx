import React from 'react';
import { motion } from 'framer-motion';

import CustomerServiceIcon from '../../assets/customer-service.svg';

import TunnelImg from '../../assets/chap 4 undergroundtunel.png';
import StationImg from '../../assets/chap 4 stationconstruction.png';
import OpsImg from '../../assets/chap 4 operations &maintainance.png';
import MultiImg from '../../assets/chap 4 multi contractor.png';
import BudgetImg from '../../assets/chap 4 budget overuns.png';

const scenarios = [
  {
    title: 'Underground Tunneling in Urban Zones',
    risk: 'Clash with existing utilities',
    solution: 'Integrated subsurface modelling + clash detection',
    image: TunnelImg
  },
  {
    title: 'Station Construction in Tight Environments',
    risk: 'Space conflicts between systems',
    solution: 'Coordinated MEP modelling with spatial validation',
    image: StationImg
  },
  {
    title: 'Multi-Contractor Execution',
    risk: 'Scheduling conflicts and delays',
    solution: '4D sequencing for synchronized workflows',
    image: MultiImg
  },
  {
    title: 'Budget Overruns',
    risk: 'Unplanned changes during construction',
    solution: '5D cost modelling with scenario analysis',
    image: BudgetImg
  },
  {
    title: 'Operations & Maintenance',
    risk: 'Lack of accurate as-built data',
    solution: 'LOD 500 models + digital twin integration',
    image: OpsImg
  }
];

const ChapterFour: React.FC = () => {
  return (
    <section className="bg-white py-0 px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl space-y-4"
      >
        <h2 className="text-[#1F2937] font-sora font-bold text-xl md:text-2xl lg:text-2xl text-left">
          Chapter 4: Applying BIM to the Gold Line — A Scenario Breakdown
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-4 lg:gap-y-6">
          {scenarios.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[1.5rem] mb-6 aspect-[2/1] bg-gray-50 shadow-sm border border-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>

              <h3 className="text-[#1F2937] font-sora font-bold text-sm md:text-[15px] lg:text-base mb-4 leading-tight whitespace-nowrap">
                {item.title}
              </h3>

              <div className="space-y-0.5">
                <p className="text-[#4B5563] font-inter text-xs lg:text-[13px] leading-relaxed">
                  <span className="font-bold text-black">Risk:</span> {item.risk}
                </p>
                <p className="text-[#4B5563] font-inter text-xs lg:text-[13px] leading-relaxed">
                  <span className="font-bold text-black">BIM Solution:</span> {item.solution}
                </p>
              </div>
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
              Walk Through Your Project <br /> Scenarios with Our Experts
            </p>
          </div>
          
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

export default ChapterFour;
