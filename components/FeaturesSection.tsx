'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/motionVariants';

const features = [
  {
    id: '01',
    title: 'High Conversion Websites',
    text: 'Fast, modern websites designed to convert visitors into customers.',
  },
  {
    id: '02',
    title: 'Inventory & ERP Systems',
    text: 'Powerful internal systems that streamline operations and reduce errors.',
  },
  {
    id: '03',
    title: 'MVP Development',
    text: 'Rapid prototypes that validate ideas with real users.',
  },
];

export default function FeatureSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        <motion.h2
          variants={fadeInUp(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-4xl font-heading font-semibold mb-14"
        >
          Why Brands Choose Us
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, index) => (
            <motion.div
              key={f.id}
              variants={fadeInUp(0.2 + index * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-bg shadow-custom hover:shadow-lg transition-all"
            >
              <h4 className="text-theme2 font-heading text-xl mb-3">{f.id}</h4>
              <h3 className="text-header text-2xl font-medium mb-3">{f.title}</h3>
              <p className="text-text2">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
