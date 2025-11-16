'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeInUp } from '@/lib/motionVariants';
import { ChevronRight } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    id: '01',
    title: 'HIGH CONVERSION WEBSITE',
    description: 'Keval AI creates websites that look great and convert visitors into customers. Fast, user-friendly, and optimized for growth.',
    features: ['User Friendly', 'Fast Loading', 'Conversion'],
  },
  {
    id: '02',
    title: 'INVENTORY MANAGEMENT SYSTEMS',
    description: "Simplify your stock operations with Keval AI's inventory systems. Track, manage, and optimize efficiently with minimal errors.",
    features: ['Stock Track', 'Auto Update', 'Error Free'],
  },
  {
    id: '03',
    title: 'MVP DEVELOPMENT',
    description: "Turn ideas into reality quickly with Keval AI's MVP development. Launch scalable prototypes that validate your concept with real users.",
    features: ['Quick Launch', 'Scalable MVP', 'User Test'],
  },
  {
    id: '04',
    title: 'CRM AND ERP',
    description: "Manage clients, resources, and workflows effortlessly with Keval AI's CRM & ERP solutions. Gain insights and automate business operations.",
    features: ['Client Data', 'Workflow', 'Insights'],
  },
  {
    id: '05',
    title: 'MARKETING SOLUTIONS',
    description: "Drive growth with Keval AI's marketing services. Plan, execute, and target the right audience for measurable results.",
    features: ['Strategy', 'Campaigns', 'Targeting'],
  },
];

export default function ServiceSection() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section className="py-[120px] md:py-[100px] sm:py-[80px] bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        
        {/* Section Title */}
        <div className="section-title mb-[30px]">
          <motion.h3
            variants={fadeInUp(0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-montserrat text-[45px] font-bold text-center text-[#17012C]"
          >
            Services we offer
          </motion.h3>
        </div>

        {/* Services Accordion */}
        <div className="service-wrapper-4 mt-4 md:mt-0">
          <div className="space-y-0">
            {services.map((service, index) => {
              const delay = index === 0 ? 0.2 : index === 1 ? 0.4 : index === 2 ? 0.6 : 0.7;
              const isActive = activeAccordion === index;

              return (
                <motion.div
                  key={service.id}
                  variants={fadeInUp(delay)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group accordion-single border-t border-[#D9D9D9] py-5 min-h-[250px] overflow-hidden transition-all duration-[800ms]"
                >
                  <div className="header-area">
                    <div className="accordion-btn flex flex-wrap lg:flex-nowrap justify-between items-start gap-4 lg:gap-6 text-start relative w-full cursor-pointer">
                      
                      {/* Service Title */}
                      <div className="mtitle-ara flex-shrink-0 w-full lg:w-auto">
                        <span className="mtitle block mt-6">
                          <Link
                            href="/service-details"
                            className="font-montserrat text-[25px] font-semibold leading-[40px] text-left text-[#1E1E1E] hover:text-white transition-colors duration-400"
                          >
                            {service.id}.{' '}
                            {service.title.split(' ').map((word, i, arr) => (
                              <span key={i}>
                                {word}
                                {i < arr.length - 1 && <br />}
                              </span>
                            ))}
                          </Link>
                        </span>
                      </div>

                      {/* Hover Text (Description) - Visible by default, changes color on hover */}
                        <div className="hover_text w-full lg:w-[500px] min-h-[120px] flex items-center order-3 lg:order-2 flex-shrink-0">
                        <p className="font-source-sans text-base font-normal leading-[30px] text-white group-hover:text-black transition-colors duration-400 ease-in-out">
                          {service.description}
                        </p>
                      </div>

                      {/* Modern List (Features) - Desktop Only */}
                      <div className="hidden lg:flex items-center gap-4 xl:gap-8 order-2 lg:order-3">
                        <ul className="grid gap-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <ChevronRight className="w-[14px] h-[14px] text-[#0B2546] flex-shrink-0" />
                              <span className="font-montserrat text-[20px] font-semibold text-[#1E1E1E]">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Learn More Button */}
                      <div className="custom-btn-wrapper order-4">
                        <div className="header-button">
                          <Link
                            href="/service-details"
                            className="inline-block font-montserrat text-[13px] font-medium uppercase 
                                       bg-[#0B2546] text-white border border-[#17012C] 
                                       px-5 py-[15px] min-w-[160px] rounded-[5px] leading-none
                                       transition-all duration-500 ease-in-out
                                       hover:bg-[#FD7E31] hover:border-[#FD7E31]"
                          >
                            Learn more
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* View All Services Button */}
          <motion.div
            variants={fadeInUp(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/service"
              className="inline-block font-montserrat text-[13px] font-medium uppercase 
                         bg-[#0B2546] text-white border border-[#17012C] 
                         px-5 py-[15px] min-w-[160px] rounded-[5px] leading-none
                         transition-all duration-500 ease-in-out
                         hover:bg-[#FD7E31] hover:border-[#FD7E31]"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
