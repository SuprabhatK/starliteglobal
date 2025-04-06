import React, { useEffect } from 'react';
import './Services.scss';

const servicesData = [
    {
        title: 'Sea Freight',
        description: 'Sea freight solutions, which delivers highly flexible services through partnerships with leading carriers and third parties.',
        variant: 'orange',
        iconKey: () => (
            <svg className="svg-inline--fa fa-dolly-flatbed fa-w-20 text-white fa-2x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dolly-flatbed" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M208 320h384c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16H448v128l-48-32-48 32V32H208c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16zm416 64H128V16c0-8.8-7.2-16-16-16H16C7.2 0 0 7.2 0 16v32c0 8.8 7.2 16 16 16h48v368c0 8.8 7.2 16 16 16h82.9c-1.8 5-2.9 10.4-2.9 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1.2-11-2.9-16H451c-1.8 5-2.9 10.4-2.9 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1.2-11-2.9-16H624c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"></path></svg>
        ),
    },
    {
        title: 'Road Services',
        description: 'Full Truck Loading (FTL) | Less than Truck Loading (LTL) | Door to Door Service',
        variant: 'transparent',
        iconKey: () => (
            <svg className="svg-inline--fa fa-road fa-w-18 text-white fa-2x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="road" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M573.19 402.67l-139.79-320C428.43 71.29 417.6 64 405.68 64h-97.59l2.45 23.16c.5 4.72-3.21 8.84-7.96 8.84h-29.16c-4.75 0-8.46-4.12-7.96-8.84L267.91 64h-97.59c-11.93 0-22.76 7.29-27.73 18.67L2.8 402.67C-6.45 423.86 8.31 448 30.54 448h196.84l10.31-97.68c.86-8.14 7.72-14.32 15.91-14.32h68.8c8.19 0 15.05 6.18 15.91 14.32L348.62 448h196.84c22.23 0 36.99-24.14 27.73-45.33zM260.4 135.16a8 8 0 0 1 7.96-7.16h39.29c4.09 0 7.53 3.09 7.96 7.16l4.6 43.58c.75 7.09-4.81 13.26-11.93 13.26h-40.54c-7.13 0-12.68-6.17-11.93-13.26l4.59-43.58zM315.64 304h-55.29c-9.5 0-16.91-8.23-15.91-17.68l5.07-48c.86-8.14 7.72-14.32 15.91-14.32h45.15c8.19 0 15.05 6.18 15.91 14.32l5.07 48c1 9.45-6.41 17.68-15.91 17.68z"></path></svg>
        ),

    },
    {
        title: 'Air Freight',
        description: 'Full range of air transport services and streamlined visibility and monitoring via our management system.',
        variant: 'orange',
        iconKey: () => (
            <svg className="svg-inline--fa fa-plane fa-w-18 text-white fa-2x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z"></path></svg>
        ),
    },
    {
        title: 'Warehouse',
        description: 'Inventory Management | Order Management | Consolidation Service | Supply Chain Solution',
        variant: 'transparent',
        iconKey: () => (
            <svg className="svg-inline--fa fa-warehouse fa-w-20 text-white fa-2x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="warehouse" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M504 352H136.4c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0 96H136.1c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm0-192H136.6c-4.4 0-8 3.6-8 8l-.1 48c0 4.4 3.6 8 8 8H504c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm106.5-139L338.4 3.7a48.15 48.15 0 0 0-36.9 0L29.5 117C11.7 124.5 0 141.9 0 161.3V504c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V256c0-17.6 14.6-32 32.6-32h382.8c18 0 32.6 14.4 32.6 32v248c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V161.3c0-19.4-11.7-36.8-29.5-44.3z"></path></svg>
        ),

    },
    {
        title: 'ODC',
        description: 'Extensive range of global contacts amongst carriers and local partners to arrange to ship for over-size cargo such as Heavy Lifts | Vehicles | Breakbulk, etc.',
        variant: 'orange',
        iconKey: () => (
            <svg className="svg-inline--fa fa-shuttle-van fa-w-20 text-white fa-2x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shuttle-van" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M628.88 210.65L494.39 49.27A48.01 48.01 0 0 0 457.52 32H32C14.33 32 0 46.33 0 64v288c0 17.67 14.33 32 32 32h32c0 53.02 42.98 96 96 96s96-42.98 96-96h128c0 53.02 42.98 96 96 96s96-42.98 96-96h32c17.67 0 32-14.33 32-32V241.38c0-11.23-3.94-22.1-11.12-30.73zM64 192V96h96v96H64zm96 240c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm160-240h-96V96h96v96zm160 240c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm-96-240V96h66.02l80 96H384z"></path></svg>
        ),
    },
    {
        title: 'Delivery',
        description: 'Provides the additional valued service to our customers for buying the goods and ship to their doorstep.',
        variant: 'transparent',
        iconKey: () => (
            <svg className="svg-inline--fa fa-truck-loading fa-w-20 text-white fa-2x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="truck-loading" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M50.2 375.6c2.3 8.5 11.1 13.6 19.6 11.3l216.4-58c8.5-2.3 13.6-11.1 11.3-19.6l-49.7-185.5c-2.3-8.5-11.1-13.6-19.6-11.3L151 133.3l24.8 92.7-61.8 16.5-24.8-92.7-77.3 20.7C3.4 172.8-1.7 181.6.6 190.1l49.6 185.5zM384 0c-17.7 0-32 14.3-32 32v323.6L5.9 450c-4.3 1.2-6.8 5.6-5.6 9.8l12.6 46.3c1.2 4.3 5.6 6.8 9.8 5.6l393.7-107.4C418.8 464.1 467.6 512 528 512c61.9 0 112-50.1 112-112V0H384zm144 448c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"></path></svg>
        ),
    }
];

export default function Services({ bgcolor }) {

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.2 }
        );

        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.observe(el));

        return () => {
            elements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return (
        <section className={`services ${bgcolor === 'black' ? 'black' : 'white'}`} /* style={{ backgroundColor: bgcolor || '#fff' }} */>
            <div className="container">
                <div className="heading">
                    <h1>Our Services</h1>
                </div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className={`service-card service-card animate-on-scroll ${service.variant}`}
                        >
                            <div className="icon">
                                {service.iconKey()}
                            </div>
                            <h5>{service.title}</h5>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
