import React from 'react';
import { motion } from 'framer-motion';
import CustomerServiceIcon from '../../assets/customer-service.svg';


import BimStrategiesImg from '../../assets/bimstratergies.jpg';

const BimStrategies: React.FC = () => {
  return (
    <section className="bg-white py-0 px-8 lg:px-12 mb-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl space-y-4 mx-auto"
      >
        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="rounded-md overflow-hidden shadow-lg border border-gray-100 aspect-[21/8] w-full"
        >
          <img
            src={BimStrategiesImg}
            alt="BIM Strategies Visual"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        {/* Header Section */}
        <div className="space-y-6">
          <h2 className="text-lg md:text-lg lg:text-xl font-sora font-bold text-[#353535]">
            BIM Strategies for Large-Scale Underground <br /> Infrastructure
          </h2>

          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-sora font-extrabold text-[#926B15]">
              Federated Model Strategy (Single Source of Truth)
            </h3>

            {/* Strategy Table 1 */}
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                    <th className="px-5 py-4 text-sm font-sora font-bold text-[#1F2937] border-r border-[#E5E7EB] w-1/2">
                      What to Implement:
                    </th>
                    <th className="px-5 py-4 text-sm font-sora font-bold text-[#1F2937] w-1/2">
                      Why It Matters:
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E7EB]">
                  <tr className="align-top">
                    <td className="px-5 py-6 border-r border-[#E5E7EB] min-h-[140px]">
                      <ul className="space-y-1 text-[#1F2937] font-inter text-[15px] leading-snug">
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-[#1F2937] shrink-0" />
                          <span>
                            Integrate Architecture, Structure, MEP, Utilities, and Civil into a <span className="font-bold">single federated model.</span>
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-[#1F2937] shrink-0" />
                          <span>
                            Use a Common Data Environment (CDE) like ACC or Aconex.
                          </span>
                        </li>
                      </ul>
                    </td>
                    <td className="px-5 py-6 min-h-[140px]">
                      <div className="space-y-1 text-[#1F2937] font-inter text-[15px] leading-snug">
                        <p>
                          Fragmented models = fragmented decisions.
                        </p>
                        <p>
                          <span className="font-bold">Outcome:</span> Every stakeholder works from the same coordinated reality.
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Strategy Section 2 */}
        <div className="space-y-4">
          <h3 className="text-lg md:text-xl font-sora font-extrabold text-[#926B15]">
            Advanced Clash Detection & Resolution Protocols
          </h3>

          <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                  <th className="px-5 py-4 text-sm font-sora font-bold text-[#1F2937] border-r border-[#E5E7EB] w-1/2">
                    What to Implement:
                  </th>
                  <th className="px-5 py-4 text-sm font-sora font-bold text-[#1F2937] w-1/2">
                    Why It Matters:
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                <tr className="align-top">
                  <td className="px-5 py-6 border-r border-[#E5E7EB] min-h-[140px]">
                    <ul className="space-y-1 text-[#1F2937] font-inter text-[15px] leading-snug">
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#1F2937] shrink-0" />
                        <span>
                          Weekly clash detection cycles using tools like <span className="font-bold">Navisworks / Revizto</span>
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#1F2937] shrink-0" />
                        <span>
                          Define clash severity levels + resolution timelines
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#1F2937] shrink-0" />
                        <span>
                          Assign ownership for each clash
                        </span>
                      </li>
                    </ul>
                  </td>
                  <td className="px-5 py-6 min-h-[140px]">
                    <div className="space-y-1 text-[#1F2937] font-inter text-[15px] leading-snug">
                      <p>
                        Clashes caught late = rework + delays.
                      </p>
                      <p>
                        <span className="font-bold">Outcome:</span> Issues resolved digitally before they reach site
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Strategy Section 3 */}
        <div className="space-y-4">
          <h3 className="text-lg md:text-xl font-sora font-extrabold text-[#926B15]">
            4D BIM for Construction Sequencing
          </h3>

          <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                  <th className="px-5 py-4 text-sm font-sora font-bold text-[#1F2937] border-r border-[#E5E7EB] w-1/2">
                    What to Implement:
                  </th>
                  <th className="px-5 py-4 text-sm font-sora font-bold text-[#1F2937] w-1/2">
                    Why It Matters:
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                <tr className="align-top">
                  <td className="px-5 py-6 border-r border-[#E5E7EB] min-h-[140px]">
                    <ul className="space-y-1 text-[#1F2937] font-inter text-[15px] leading-snug">
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#1F2937] shrink-0" />
                        <span>
                          Link BIM models with project schedules.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#1F2937] shrink-0" />
                        <span>
                          Simulate excavation, tunneling, station builds, and system installations.
                        </span>
                      </li>
                    </ul>
                  </td>
                  <td className="px-5 py-6 min-h-[140px]">
                    <div className="space-y-1 text-[#1F2937] font-inter text-[15px] leading-snug">
                      <p>
                        Underground + urban = zero room for sequencing errors.
                      </p>
                      <p>
                        <span className="font-bold">Outcome:</span> Predictable timelines and optimized resource planning.
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Strategy Section 4 */}
        <div className="space-y-4">
          <h3 className="text-lg md:text-xl font-sora font-extrabold text-[#926B15]">
            5D BIM for Real-Time Cost Intelligence
          </h3>

          <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                  <th className="px-5 py-4 text-sm font-sora font-bold text-[#1F2937] border-r border-[#E5E7EB] w-1/2">
                    What to Implement:
                  </th>
                  <th className="px-5 py-4 text-sm font-sora font-bold text-[#1F2937] w-1/2">
                    Why It Matters:
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                <tr className="align-top">
                  <td className="px-5 py-6 border-r border-[#E5E7EB] min-h-[140px]">
                    <ul className="space-y-1 text-[#1F2937] font-inter text-[15px] leading-snug">
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#1F2937] shrink-0" />
                        <span>
                          Integrate quantities with cost databases.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#1F2937] shrink-0" />
                        <span>
                          Enable live cost tracking based on design changes.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#1F2937] shrink-0" />
                        <span>
                          Scenario analysis for budget optimization.
                        </span>
                      </li>
                    </ul>
                  </td>
                  <td className="px-5 py-6 min-h-[140px]">
                    <div className="space-y-1 text-[#1F2937] font-inter text-[15px] leading-snug">
                      <p>
                        Late design changes = exponential cost impact.
                      </p>
                      <p>
                        <span className="font-bold">Outcome:</span> Cost predictability and early financial control.
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Strategy Section 5 */}
        <div className="space-y-4">
          <h3 className="text-lg md:text-xl font-sora font-extrabold text-[#926B15]">
            MEP Coordination & Systems Integration Strategy
          </h3>

          <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                  <th className="px-5 py-4 text-sm font-sora font-bold text-[#1F2937] border-r border-[#E5E7EB] w-1/2">
                    What to Implement:
                  </th>
                  <th className="px-5 py-4 text-sm font-sora font-bold text-[#1F2937] w-1/2">
                    Why It Matters:
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                <tr className="align-top">
                  <td className="px-5 py-6 border-r border-[#E5E7EB] min-h-[140px]">
                    <ul className="space-y-1 text-[#1F2937] font-inter text-[15px] leading-snug">
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#1F2937] shrink-0" />
                        <span>
                          Detailed <span className="font-bold">LOD 400 models</span> for all MEP systems.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#1F2937] shrink-0" />
                        <span>
                          Validate installation zones, maintenance access, and clearances.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#1F2937] shrink-0" />
                        <span>
                          Coordinate critical systems: HVAC, fire safety, drainage, power.
                        </span>
                      </li>
                    </ul>
                  </td>
                  <td className="px-5 py-6 min-h-[140px]">
                    <div className="space-y-1 text-[#1F2937] font-inter text-[15px] leading-snug">
                      <p>
                        MEP conflicts are the #1 cause of rework in infrastructure.
                      </p>
                      <p>
                        <span className="font-bold">Outcome:</span> Seamless system integration and operational readiness.
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Strategy Section 6 */}
        <div className="space-y-4">
          <h3 className="text-lg md:text-xl font-sora font-extrabold text-[#926B15]">
            Scan-to-BIM & As-Built Validation
          </h3>

          <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                  <th className="px-5 py-4 text-sm font-sora font-bold text-[#1F2937] border-r border-[#E5E7EB] w-1/2">
                    What to Implement:
                  </th>
                  <th className="px-5 py-4 text-sm font-sora font-bold text-[#1F2937] w-1/2">
                    Why It Matters:
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                <tr className="align-top">
                  <td className="px-5 py-6 border-r border-[#E5E7EB] min-h-[140px]">
                    <ul className="space-y-1 text-[#1F2937] font-inter text-[15px] leading-snug">
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#1F2937] shrink-0" />
                        <span>
                          Use 3D laser scanning during and post-construction.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#1F2937] shrink-0" />
                        <span>
                          Validate actual build vs design using <span className="font-bold">point cloud comparison.</span>
                        </span>
                      </li>
                    </ul>
                  </td>
                  <td className="px-5 py-6 min-h-[140px]">
                    <div className="space-y-1 text-[#1F2937] font-inter text-[15px] leading-snug">
                      <p>
                        What’s built often deviates from what’s designed.
                      </p>
                      <p>
                        <span className="font-bold">Outcome:</span> Accurate LOD 500 as-built models.
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Strategy Section 7 */}
        <div className="space-y-4">
          <h3 className="text-lg md:text-xl font-sora font-extrabold text-[#926B15]">
            Digital Twin Strategy for Operations
          </h3>

          <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                  <th className="px-5 py-4 text-sm font-sora font-bold text-[#1F2937] border-r border-[#E5E7EB] w-1/2">
                    What to Implement:
                  </th>
                  <th className="px-5 py-4 text-sm font-sora font-bold text-[#1F2937] w-1/2">
                    Why It Matters:
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                <tr className="align-top">
                  <td className="px-5 py-6 border-r border-[#E5E7EB] min-h-[140px]">
                    <ul className="space-y-1 text-[#1F2937] font-inter text-[15px] leading-snug">
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#1F2937] shrink-0" />
                        <span>
                          Convert BIM models into <span className="font-bold">operational digital twins.</span>
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#1F2937] shrink-0" />
                        <span>
                          Integrate with IoT and FM systems.
                        </span>
                      </li>
                    </ul>
                  </td>
                  <td className="px-5 py-6 min-h-[140px]">
                    <div className="space-y-1 text-[#1F2937] font-inter text-[15px] leading-snug">
                      <p>
                        Infrastructure success is measured over decades—not delivery day.
                      </p>
                      <p>
                        <span className="font-bold">Outcome:</span> Data-driven maintenance, performance, and lifecycle optimization.
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Strategy Section 8 */}
        <div className="space-y-4">
          <h3 className="text-lg md:text-xl font-sora font-extrabold text-[#926B15]">
            BIM Governance & Execution Framework
          </h3>

          <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F9FAFB] border-b border-[#E5E7EB]">
                  <th className="px-5 py-4 text-sm font-sora font-bold text-[#1F2937] border-r border-[#E5E7EB] w-1/2">
                    What to Implement:
                  </th>
                  <th className="px-5 py-4 text-sm font-sora font-bold text-[#1F2937] w-1/2">
                    Why It Matters:
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                <tr className="align-top">
                  <td className="px-5 py-6 border-r border-[#E5E7EB] min-h-[140px]">
                    <ul className="space-y-1 text-[#1F2937] font-inter text-[15px] leading-snug">
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#1F2937] shrink-0" />
                        <span>
                          Define a BIM Execution Plan (BEP) aligned with <span className="font-bold">ISO 19650.</span>
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#1F2937] shrink-0" />
                        <span>
                          Set roles, responsibilities, naming conventions, workflows.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#1F2937] shrink-0" />
                        <span>
                          Establish approval and version control protocols.
                        </span>
                      </li>
                    </ul>
                  </td>
                  <td className="px-5 py-6 min-h-[140px]">
                    <div className="space-y-1 text-[#1F2937] font-inter text-[15px] leading-snug">
                      <p>
                        Without governance, BIM becomes just another tool—not a system.
                      </p>
                      <p>
                        <span className="font-bold">Outcome:</span> Structured, scalable, and compliant project delivery.
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
              Get a Custom BIM Strategy <br /> Tailored to Your Scope
            </p>
          </div>

          <a href="https://swifterz.ae/book-a-consultation" target="_blank" rel="noopener noreferrer">
            <button className="bg-[#926B15] text-white px-16 py-4 rounded-md font-sora font-bold transition-all shadow-md hover:shadow-lg whitespace-nowrap">
              Consult For FREE
            </button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BimStrategies;
