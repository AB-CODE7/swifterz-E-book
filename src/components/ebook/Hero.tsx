import React from 'react';
import { motion } from 'framer-motion';
import HeroImage from '../../assets/hero.img.png';
import HeadsetImg from '../../assets/headset.jpeg';

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-12 px-8 lg:px-12 flex flex-col items-center">
      <div className="w-full max-w-4xl space-y-6">

        {/* Main Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="rounded-none overflow-hidden shadow-lg border border-gray-100 aspect-[21/8] w-full max-w-3xl ml-0"
        >
          <img
            src={HeroImage}
            alt="Dubai Metro Gold Line"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          {/* Heading */}
          <h1 className=" md:text-2xl lg:text-xl font-sora  font-extrabold leading-tight text-[#1F2937]">
            <span className="text-[#926B15]">Dubai’s Gold Line</span> :
            The Hidden Engineering Risks — And <br className="hidden md:block" />  How BIM Turns Them Into Predictable Outcomes
          </h1>

          {/* Sub Heading */}
          <h2 className="text-lg md:text-xl font-sora font-bold text-[#1F2937]">
            The Project That Will Redefine Urban Infrastructure
          </h2>

          {/* Paragraph Content */}
          <div className="text-[#353535] font-inter text-[16px] lg:text-[17px] leading-relaxed">
            <p>
              Dubai has never built small.
            </p>

            <p className="max-w-none">
              From skyline-defining towers to world-class infrastructure, every project reflects <br className="hidden md:block" />
              ambition at scale. The upcoming <span className="font-bold text-[#926B15]">Dubai Metro Gold Line</span> is no different—it’s a <br className="hidden md:block" />
              <span className="font-bold text-[#1F2937]">fully underground, multi-billion-dollar transit corridor</span> designed to connect old <br className="hidden md:block" />
              Dubai with rapidly expanding urban zones.
            </p>

            <p>
              But here’s the reality most don’t talk about:
            </p>

            <p>
              The bigger the project, the smaller the margin for error.
            </p>

            <p>
              At this scale, projects don’t fail because of bad engineering.
            </p>

            <p className="pt-4">
              They fail because <span className="font-bold text-[#1F2937]">systems don’t align when execution begins.</span>
            </p>
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
              <img src={HeadsetImg} alt="Headset" className="w-12 h-12 shrink-0 object-contain mix-blend-multiply" />
              <p className="text-lg md:text-xl font-sora font-bold text-[#1F2937] leading-tight">
                Get a Professional Assessment of <br /> Your Project Risks
              </p>
            </div>

            <button className="bg-[#926B15] text-white px-16 py-4 rounded-md font-sora font-bold  transition-all shadow-md hover:shadow-lg whitespace-nowrap">
              Consult For FREE
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;