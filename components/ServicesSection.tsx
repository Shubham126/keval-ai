'use client';

import Link from 'next/link';
import { useState } from 'react';

const services = [
  {
    id: 1,
    number: '01',
    titleLines: ['HIGH', 'CONVERSION', 'WEBSITE'],
    description:
      'Keval AI creates websites that look great and convert visitors into customers. Fast, user-friendly, and optimized for growth.',
    features: ['User Friendly', 'Fast Loading', 'Conversion'],
  },
  {
    id: 2,
    number: '02',
    titleLines: ['INVENTORY', 'MANAGEMENT', 'SYSTEMS'],
    description:
      'Simplify your stock operations with Keval AI\'s inventory systems. Track, manage, and optimize efficiently with minimal errors.',
    features: ['Stock Track', 'Auto Update', 'Error Free'],
  },
  {
    id: 3,
    number: '03',
    titleLines: ['MVP', 'development'],
    description:
      'Turn ideas into reality quickly with Keval AI\'s MVP development. Launch scalable prototypes that validate your concept with real users.',
    features: ['Quick Launch', 'Scalable MVP', 'User Test'],
  },
  {
    id: 4,
    number: '04',
    titleLines: ['CRM AND', 'ERP'],
    description:
      'Manage clients, resources, and workflows effortlessly with Keval AI\'s CRM & ERP solutions. Gain insights and automate business operations.',
    features: ['Client Data', 'Workflow', 'Insights'],
  },
  {
    id: 5,
    number: '05',
    titleLines: ['Marketing', 'solutions'],
    description:
      'Drive growth with Keval AI\'s marketing services. Plan, execute, and target the right audience for measurable results.',
    features: ['Strategy', 'Campaigns', 'Targeting'],
  },
];

export default function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="service-section-4 section-padding section-bg">
      <div className="container">
        <div className="section-title style-4 title-anim">
          <h3 className="heading_text">Services we offer</h3>
        </div>
        <div className="service-wrapper-4 mt-4 mt-md-0">
          <div className="row g-xxl-6 g-4">
            <div className="service-tabing-wrap Faqs-section position-relative">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="accordion-single py-5 bt-border wow fadeInUp"
                  data-wow-delay={`${0.2 + service.id * 0.2}s`}
                >
                  <div className="header-area">
                    <div className="accordion-btn justify-content-between d-flex align-items-center text-start position-relative w-100">
                      <div className="mtitle-ara style2">
                        <span className="mtitle d-block mt-6">
                          <Link
                            href="/service-details"
                            className="white-clr whitehover"
                          >
                            {service.number}. {service.titleLines.map((line, idx) => (
                              <span key={idx}>
                                {line}
                                {idx < service.titleLines.length - 1 && <br />}
                              </span>
                            ))}
                          </Link>
                        </span>
                      </div>

                      <div
                        className="hover_text"
                        onMouseEnter={() => setHoveredId(service.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        style={{
                          color: hoveredId === service.id ? 'rgba(0, 0, 0, 1)' : 'transparent',
                          flex: 1,
                          marginLeft: '20px',
                          padding: '10px',
                          borderRadius: '4px',
                          transition: 'background-color 0.3s ease'
                        }}
                      >
                        <p>{service.description}</p>
                      </div>

                      <div className="d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                        <ul className="modern-list d-grid gap-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="d-flex align-items-center gap-2">
                              <i className="fas fa-chevron-right"></i> {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="custom-btn-wrapper">
                        <div className="header-button">
                          <Link href="/service-details" className="theme-btn2 border-white">
                            <span className="icon-1"></span>
                            Learn more
                            <span className="icon-2"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="text-center">
                <div className="header-button">
                  <Link href="/service" className="theme-btn2 border-white">
                    <span className="icon-1"></span>
                    View All Services
                    <span className="icon-2"></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
