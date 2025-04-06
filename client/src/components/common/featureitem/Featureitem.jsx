import React, { useEffect } from "react";
import "./Featureitem.scss"; // Import SCSS file

const Featureitem = () => {

    useEffect(() => {
        const elements = document.querySelectorAll(".slide-in-left, .slide-in-right");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                    }
                });
            },
            { threshold: 0.2 }
        );

        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <section className="logistics">
            {/* Header Section */}
            <div className="text-center header slide-in-left">
                <h2>
                    <span className="highlight">Welcome To</span> <strong>Starlite Global International Trading Limited.</strong>
                </h2>
                <p>
                    Starlite Global International Trading Limited is one of the leading shipping and logistics company in Singapore.
                    We have amongst the most diversified and highly regarded business houses in the East and South Asia region and bay.
                </p>
            </div>

            {/* Features Section */}
            <div className="features">
                <div className="feature slide-in-left">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path fill="#ff6600" d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z"></path>
                        </svg>
                    </div>
                    <p className="feature-text">Best Logistics</p>
                </div>

                <div className="feature slide-in-right">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="#ff6600" d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path>
                        </svg>
                    </div>
                    <p className="feature-text">Secured Services</p>
                </div>

                <div className="feature slide-in-left">
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="#ff6600" d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path>
                        </svg>
                    </div>
                    <p className="feature-text">Fast Delivery</p>
                </div>
            </div>

        </section>
    );
};

export default Featureitem;