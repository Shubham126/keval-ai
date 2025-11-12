'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeInUp } from '@/lib/motionVariants';

const services = [
  {
    id: '001',
    title: 'HIGH CONVERSION WEBSITE',
    text: 'Keval AI creates websites that look great and convert visitors into customers. Fast, user-friendly, and optimized for growth.',
  },
  {
    id: '002',
    title: 'INVENTORY MANAGEMENT SYSTEMS',
    text: "Simplify your stock operations with Keval AI's inventory systems. Track, manage, and optimize efficiently with minimal errors.",
  },
  {
    id: '003',
    title: 'MVP DEVELOPMENT',
    text: "Turn ideas into reality quickly with Keval AI's MVP development. Launch scalable prototypes that validate your concept with real users.",
  },
  {
    id: '004',
    title: 'CRM AND ERP',
    text: "Manage clients, resources, and workflows effortlessly with Keval AI's CRM & ERP solutions. Gain insights and automate business operations.",
  },
  {
    id: '005',
    title: 'MARKETING SOLUTIONS',
    text: "Drive growth with Keval AI's marketing services. Plan, execute, and target the right audience for measurable results.",
  },
];

export default function ServiceSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Title */}
        <motion.h2
          variants={fadeInUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-4xl font-heading font-semibold mb-14"
        >
          Our Services
        </motion.h2>

        {/* List */}
        <ul className="border-t border-border divide-y divide-border">

          {services.map((service, i) => (
            <motion.li
              key={service.id}
              variants={fadeInUp(0.2 + i * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="py-10 grid md:grid-cols-2 gap-10 items-center"
            >
              {/* Left Content (for odd items) */}
              {i % 2 === 0 ? (
                <>
                  <div className="space-y-2">
                    <h4 className="text-theme2 text-2xl font-heading font-semibold">
                      {service.id}
                    </h4>
                    <h3 className="text-header text-3xl font-heading font-bold hover:text-theme transition-colors">
                      <Link href="/service-details">{service.title}</Link>
                    </h3>
                  </div>

                  <p className="text-text max-w-lg">{service.text}</p>
                </>
              ) : (
                <>
                  {/* Right first for even items */}
                  <p className="text-text max-w-lg">{service.text}</p>

                  <div className="space-y-2 md:text-right md:ml-auto">
                    <h4 className="text-theme2 text-2xl font-heading font-semibold">
                      {service.id}
                    </h4>
                    <h3 className="text-header text-3xl font-heading font-bold hover:text-theme transition-colors">
                      <Link href="/service-details">{service.title}</Link>
                    </h3>
                  </div>
                </>
              )}
            </motion.li>
          ))}

        </ul>

        {/* View All Services Button */}
        <motion.div
          variants={fadeInUp(0.8)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/service"
            className="theme-btn inline-flex items-center gap-2"
          >
            View All Services
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
