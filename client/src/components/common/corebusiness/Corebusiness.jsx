import React, { useState } from 'react';
import './Corebusiness.scss';
import { airShipping, buyship, landTransport, oceanTransport, projectlogistics, wareHouse } from '../../../assets';

const services = [
  {
    id: 'ocean-transport',
    title: 'Ocean Transport',
    content: 'Starlite Global International Trading Limited as the regional leading provider of sea freight solutions, which delivers highly flexible services through partnerships with leading carriers and third parties.',
    points: [
      'Full Container Loading (FCL)',
      'Less than Container Loading (LCL)',
      'Buyer\'s Consolidation',
      'Custom Clearance',
      'Local Delivery',
    ],
    image: oceanTransport,
  },
  {
    id: 'air-transport',
    title: 'Air Transport',
    content: 'Starlite Global International Trading Limited offers a full range of air transport service and streamlined visibility and monitoring via our operation system.',
    points: [
      'Airport to Airport',
      'Door to Door',
      'Consolidations',
      'Full Charter Services',
      'Sea/air & Sea/land Services',
      'Custom Clearance',
      'Local Delivery',
    ],
    image: airShipping,
  },
  {
    id: 'land-transport',
    title: 'Land Transport',
    content: 'Starlite Global International Trading Limited provides time-definite land transport services in GCC countries.',
    points: [
      'Full Truck Loading (FTL)',
      'Less than Tuck Loading (LTL)',
      'Door to Door Service',
      'Proof of Delivery',
      'Reliable Lead Time',
    ],
    image: landTransport,
  },
  {
    id: 'warehousing-distribution',
    title: 'Warehousing & Distribution',
    content: 'Starlite Global International Trading Limited provides warehousing and distribution services.',
    points: [
      'Inventory Management',
      'Ordering Management',
      'Consolidation Service',
      'Supply Chain Solution',
      'Other Value–Added',
      'Service',
    ],
    image: wareHouse,
  },
  {
    id: 'buy-and-ship',
    title: 'Buy & Ship',
    content: 'Starlite Global International Trading Limited through group trading company, provide the additional valued service to our customer for buying the goods and ship to his door.',
    points: [
      'Customer For Buying The Goods',
      'Ship To Their Doorstep',
      'One Point Contact For Procurement And Shipping',
    ],
    image: buyship,
  },
  {
    id: 'project-logistics',
    title: 'Project Logistics',
    content: 'Using our extensive range of global contacts amongst carriers and local partners to arrange shipping for over-size cargo.',
    points: [
      'Project Quotation',
      'Project Delivery',
      'Cargo Clearance',
      'Project Installation',
      'Project Inspection',
    ],
    image: projectlogistics,
  },
];

const Corebusinesssection = () => {
  const [activeTab, setActiveTab] = useState(services[0].id);

  return (
    <section className="core-business-section">
      <div className="core-container">
        <div className="core-business-header text-center">
          <h1>
            Core <span className="highlight">Business</span>
          </h1>
        </div>

        <ul className="core-tabs">
          {services.map((service) => (
            <li key={service.id}>
              <button
                className={`core-tab-btn ${activeTab === service.id ? 'active' : ''}`}
                onClick={() => setActiveTab(service.id)}
              >
                {service.title}
              </button>
            </li>
          ))}
        </ul>

        <div className="tab-contents">
          {services.map((service) => (
            <div
              key={service.id}
              className={`tab-pane ${activeTab === service.id ? 'active' : ''}`}
            >
              <div className="service-content">
                <div className="service-text">
                  <h3 className="service-title">{service.title}</h3>
                  <p>{service.content}</p>
                  <h6 className="sub-title">Key Service Portfolio:</h6>
                  <ul>
                    {service.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="service-image-wrapper">
                  <img
                    className="service-image"
                    src={service.image}
                    alt={service.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Corebusinesssection;
