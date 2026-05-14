import React from 'react';
import { motion } from 'framer-motion';
import CustomerServiceIcon from '../../assets/customer-service.svg';


import DesignIcon from '../../assets/chap 3 4D Planning Time.svg';
import ClashIcon from '../../assets/chap 3clash detection.svg';
import DigitalTwinIcon from '../../assets/chap 3 Digital Twin Readiness.svg';
import Cost5DIcon from '../../assets/chap 3 5D controll.svg';
import Planning4DIcon from '../../assets/chap 3-4D.svg';

const bimCapabilities = [
  {
    title: 'Integrated Design Coordination',
    description: 'All disciplines aligned in one federated model',
    icon: DesignIcon
  },
  {
    title: 'Clash Detection Before Construction',
    description: 'Problems solved digitally—not physically',
    icon: ClashIcon
  },
  {
    title: '5D Cost Control',
    description: 'Real-time alignment between design and budget',
    icon: Cost5DIcon
  },
  {
    title: 'Digital Twin Readiness',
    description: 'Operational intelligence beyond handover',
    icon: DigitalTwinIcon
  },
  {
    title: '4D Planning (Time)',
    description: 'Visual simulation of construction sequencing',
    icon: Planning4DIcon
  }
];

const ChapterThree: React.FC = () => {
  return (
    <section className="bg-white py-0 px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl space-y-4"
      >
        <h2 className="text-xl md:text-2xl lg:text-3xl font-sora font-bold text-[#1F2937]">
          Chapter 3: BIM — From Design Tool to Decision Engine
        </h2>

        <div className="space-y-2 mb-6">
          <p className="text-[#4B5563] font-inter text-base lg:text-lg">
            Building Information Modelling (BIM) has evolved.
          </p>
          <p className="text-[#4B5563] font-inter text-base lg:text-lg leading-relaxed">
            It's no longer just about 3D models. It's about <span className="font-bold text-black">creating a single source of truth for the entire project lifecycle.</span>
          </p>
        </div>

        <h3 className="text-[#1F2937] font-sora font-bold text-lg mb-4">
          BIM Enables:
        </h3>

        <div className="space-y-3 lg:space-y-4">
          {bimCapabilities.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-5 group"
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gray-50 rounded-xl shrink-0 border border-gray-100 shadow-sm flex items-center justify-center transition-colors group-hover:bg-[#926B15]/5">
                <img src={item.icon} alt={item.title} className="w-7 h-7 lg:w-8 lg:h-8 object-contain" />
              </div>
              <div>
                <h4 className="text-[#1F2937] font-sora font-bold text-base lg:text-lg">
                  {item.title}
                </h4>
                <p className="text-[#6B7280] font-inter text-xs lg:text-sm">
                  {item.description}
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
            <img src={CustomerServiceIcon} alt="Customer Service" className="w-12 h-12 shrink-0 object-contain" />
            <p className="text-lg md:text-xl font-sora font-bold text-[#1F2937] leading-tight">
              Discuss BIM Implementation for <br /> Your Project Lifecycle
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

export default ChapterThree;
