import React from 'react';
import { motion } from 'framer-motion';
import CustomerServiceIcon from '../../assets/customer-service.svg';

import Chap1Img from '../../assets/chap 1.png';
import StakeImg from '../../assets/chap1stake.png';
import TimeImg from '../../assets/chap1time compressed.png';
import HeroImg from '../../assets/hero.img.png';

const risks = [
  {
    title: 'Dense Urban Interference',
    image: Chap1Img,
    points: [
      'Existing utilities, foundations, and unknown subsurface conditions',
      'Limited room for error during tunneling'
    ]
  },
  {
    title: 'Multi-Stakeholder Complexity',
    image: StakeImg,
    points: [
      'Contractors, consultants, authorities, and vendors',
      'Fragmented decision-making'
    ]
  },
  {
    title: 'Time-Compressed Execution',
    image: TimeImg,
    points: [
      'Fast-track timelines',
      'Parallel workstreams with interdependencies'
    ]
  },
  {
    title: 'Long-Term Operational Expectations',
    image: HeroImg,
    points: [
      'Infrastructure designed to last decades',
      'Performance matters beyond project delivery'
    ]
  }
];

const ChapterOne: React.FC = () => {
  return (
    <section className="bg-white py-0 px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl space-y-4"
      >
        <h2 className="text-lg md:text-xl lg:text-2xl font-sora font-bold text-[#1F2937]">
          Chapter 1: Why Projects Like the Gold Line Are High-<br></br>Risk by Design
        </h2>

        <p className="text-[#4B5563] font-inter text-base mb-6">
          Large-scale underground infrastructure introduces a unique combination of risks:
        </p>

        <div className="space-y-3">
          {risks.map((risk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-6 group"
            >
              <div className="w-32 lg:w-48 aspect-[16/10] rounded-lg overflow-hidden shrink-0 shadow-sm border border-gray-100">
                <img
                  src={risk.image}
                  alt={risk.title}
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-[#926B15] font-sora font-bold text-base lg:text-lg mb-1">
                  {risk.title}
                </h3>
                <ul className="space-y-0.5">
                  {risk.points.map((point, idx) => (
                    <li key={idx} className="text-[#000000] font-inter text-sm lg:text-[15px] flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#000000]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-[#353535] font-sora italic text-md lg:text-md pt-1 border-t border-gray-50"
        >
          These risks don’t appear suddenly—they accumulate silently.
        </motion.p>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-8 py-4 mt-4 border-t border-gray-50"
        >
          <div className="flex items-center gap-4 flex-1">
            <img src={CustomerServiceIcon} alt="Customer Service" className="w-14 h-14 shrink-0 object-contain ml-6" />
            <p className="text-lg md:text-lg font-sora font-bold text-[#1F2937] leading-tight ml-6">
              Review Your Project’s Coordination <br /> Challenges
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

export default ChapterOne;
