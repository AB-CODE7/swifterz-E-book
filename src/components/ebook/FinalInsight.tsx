import React from 'react';
import { motion } from 'framer-motion';
import HeroImg from '../../assets/hero.img.png';

const FinalInsight: React.FC = () => {
  return (
    <section className="bg-white py-2 px-8 lg:px-12 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full space-y-1 text-center flex flex-col items-center"
      >
        {/* Main Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="rounded-md overflow-hidden shadow-sm border border-gray-100 aspect-[21/8] w-full max-w-6xl mx-auto"
        >
          <img
            src={HeroImg}
            alt="Dubai Metro Gold Line Concept"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content Container */}
        <div className="w-full max-w-4xl space-y-1 flex flex-col items-center">
          {/* Core Message */}
          <div className="space-y-1 pt-8">
            <h2 className="text-2xl md:text-1xl font-sora font-extrabold text-[#1F2937]">
              For a project like the <span className="text-[#926B15]">Gold Line</span>
            </h2>

            <div className="text-[#1F2937] font-medium text-base md:text-lg leading-tight space-y-1 mx-auto">
              <p>
                BIM is not one strategy—it’s a layered system of controls.
              </p>
              <p>
                Each strategy reduces a specific risk.
              </p>
              <p>
                Together, they create predictable execution at scale.
              </p>
            </div>
          </div>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto pt-6 pb-1"
          >
            <p className="text-lg md:text-lg font-inter font-medium italic text-[#1F2937] leading-tight px-12">
              “In infrastructure of this scale, BIM isn’t just about modeling—it’s about <br />
              controlling complexity before it becomes risk.”
            </p>
          </motion.div>

          {/* Final CTA Area */}
          <div className="space-y-1 pt-12 w-full">
            <div className="space-y-0 max-w-4xl mx-auto">
              <h3 className="text-lg md:text-1xl font-sora  text-[#1F2937] leading-tight">
                Planning a complex infrastructure project in the UAE?
              </h3>
              <h4 className="text-xl md:text-1xl font-sora font-extrabold text-[#1F2937]">
                Get your BIM consultation
              </h4>

              <div className="pt-0">
                <a
                  href="https://swifterz.ae/book-a-consultation"
                  className=" md:text-xl font-inter font-bold text-[#1F2937] underline decoration-[2px] decoration-[#1F2937] underline-offset-8  transition-colors"
                >
                  https://swifterz.ae/book-a-consultation
                </a>
              </div>
            </div>

            <div className="pt-16 pb-1">
              <button className="bg-[#926B15] text-white px-14 py-4 rounded-md font-sora font-bold text-xl transition-all shadow-md hover:shadow-lg">
                Book A Consultation For FREE
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalInsight;
