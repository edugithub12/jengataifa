// page.tsx - Services Page
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

interface Service {
    id: number;
    title: string;
    description: string;
    features: string[];
    image: string;
    color: string;
}

export default function Services() {
    const [activeService, setActiveService] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [currentBackground, setCurrentBackground] = useState('tractor.jpg');

    // Array of background images - same as homepage
    const backgroundImages = [
        'tractor.jpg',
        'Apartment.jpg',
        'classrooms.jpg',
        'construction-bg.jpg',
        'Kitale_hostels.jpg',
        'modern_kitchen.jpg',
        'office_designs.jpg',
        'office_partition.jpg',
        'residential_setup.jpg',
        'Residential.jpg',
        'Residential2.jpg'
    ];

    useEffect(() => {
        setIsVisible(true);

        // Background slideshow effect - same as homepage
        let currentIndex = 0;
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % backgroundImages.length;
            setCurrentBackground(backgroundImages[currentIndex]);
        }, 10000); // Change every 10 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [backgroundImages]); // Added backgroundImages to dependencies

    const services: Service[] = [
        {
            id: 1,
            title: "Residential Construction",
            description: "Custom home building and residential developments with exceptional craftsmanship and attention to detail. We specialize in creating dream homes that reflect your personality and lifestyle while ensuring structural integrity and modern amenities.",
            features: ["Custom Home Building", "Townhouse Development", "Residential Complexes", "Green Building Solutions", "Luxury Home Construction", "Sustainable Materials"],
            image: "/images/residential-construction.jpg",
            color: "from-blue-500 to-blue-600"
        },
        {
            id: 2,
            title: "Commercial Construction",
            description: "Professional commercial spaces designed for functionality, efficiency, and business success. Our commercial projects focus on creating environments that enhance productivity and reflect your brand identity.",
            features: ["Office Buildings", "Retail Spaces", "Industrial Facilities", "Mixed-Use Developments", "Commercial Renovations", "ADA Compliance"],
            image: "/images/commercial-construction.jpg",
            color: "from-blue-600 to-blue-700"
        },
        {
            id: 3,
            title: "Renovations & Remodeling",
            description: "Transform your existing spaces with our expert renovation and remodeling services. We breathe new life into your property while maintaining its character and improving functionality.",
            features: ["Home Renovations", "Office Remodeling", "Space Optimization", "Modernization Upgrades", "Kitchen & Bath Remodels", "Structural Improvements"],
            image: "/images/renovations-remodeling.jpg",
            color: "from-blue-400 to-blue-500"
        },
        {
            id: 4,
            title: "Architectural Design",
            description: "Innovative architectural solutions that blend aesthetics with functionality and sustainability. Our design team creates spaces that inspire while meeting practical requirements and budget constraints.",
            features: ["3D Modeling", "Space Planning", "Sustainable Design", "Building Information Modeling", "Concept Development", "Construction Documentation"],
            image: "/images/architectural-design.jpg",
            color: "from-blue-700 to-blue-800"
        },
        {
            id: 5,
            title: "Project Management",
            description: "Comprehensive project oversight ensuring timely delivery and quality execution. We coordinate all aspects of your construction project to ensure seamless progress from start to finish.",
            features: ["Site Supervision", "Budget Management", "Quality Control", "Timeline Coordination", "Vendor Management", "Risk Assessment"],
            image: "/images/project-management.jpg",
            color: "from-blue-300 to-blue-400"
        },
        {
            id: 6,
            title: "Consultation Services",
            description: "Expert advice and guidance for your construction projects from concept to completion. Leverage our industry expertise to make informed decisions and optimize your investment.",
            features: ["Feasibility Studies", "Cost Estimation", "Regulatory Compliance", "Technical Advisory", "Site Analysis", "Project Planning"],
            image: "/images/consultation-services.jpg",
            color: "from-blue-800 to-blue-900"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section with Slideshow Background */}
            <section
                className="relative py-32 bg-cover bg-center bg-fixed transition-all duration-1000"
                style={{ backgroundImage: `url('/images/${currentBackground}')` }}
            >
                {/* Updated Background Overlay to match homepage */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/60 to-gray-900/40"></div>

                {/* Updated Particles Background - same as homepage */}
                <div className="absolute inset-0 opacity-30">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${3 + Math.random() * 4}s`
                            }}
                        ></div>
                    ))}
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <div className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                            Our <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Services</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
                            Comprehensive construction solutions tailored to your vision and requirements
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                            >
                                Get Free Consultation
                            </Link>
                            <button
                                onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}
                                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
                            >
                                Explore Services
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section id="services-grid" className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            What We <span className="text-blue-600">Offer</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            From concept to completion, we provide end-to-end construction solutions with unmatched expertise
                        </p>
                    </div>

                    <div className="space-y-20">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className={`bg-white rounded-2xl shadow-lg overflow-hidden group ${activeService === service.id ? 'ring-2 ring-blue-500' : ''
                                    }`}
                                onMouseEnter={() => setActiveService(service.id)}
                                onMouseLeave={() => setActiveService(null)}
                            >
                                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                    }`}>
                                    {/* Image Side */}
                                    <div className="h-80 lg:h-96 relative overflow-hidden">
                                        <div
                                            className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                                            style={{ backgroundImage: `url('${service.image}')` }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                            <div className="absolute bottom-6 left-6 text-white">
                                                <h3 className="text-2xl font-bold">{service.title}</h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                                        <div className="space-y-6">
                                            <h3 className="text-3xl font-bold text-gray-800 lg:hidden mb-4">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 text-lg leading-relaxed">
                                                {service.description}
                                            </p>

                                            <div className="space-y-3">
                                                {service.features.map((feature, featureIndex) => (
                                                    <div key={featureIndex} className="flex items-center space-x-3">
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                                                        <span className="text-gray-700">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex gap-4 mt-6">
                                                <Link
                                                    href="/contact"
                                                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
                                                >
                                                    Start Project
                                                </Link>
                                                <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                                                    Learn More
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Service View */}
            {activeService && (
                <section className="py-16 bg-white border-t border-gray-200">
                    <div className="container mx-auto px-6">
                        <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <div className="grid lg:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-800 mb-4">
                                        {services.find(s => s.id === activeService)?.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                        {services.find(s => s.id === activeService)?.description}
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                        {services.find(s => s.id === activeService)?.features.map((feature, index) => (
                                            <div key={index} className="flex items-center space-x-3 bg-blue-50 p-3 rounded-lg">
                                                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                                                    <span className="text-white text-sm">✓</span>
                                                </div>
                                                <span className="text-gray-800 font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex space-x-4">
                                        <Link
                                            href="/contact"
                                            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                                        >
                                            Start Project
                                        </Link>
                                        <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                                            Download Brochure
                                        </button>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div
                                        className="w-full h-80 bg-cover bg-center rounded-2xl flex items-center justify-center"
                                        style={{ backgroundImage: `url('${services.find(s => s.id === activeService)?.image}')` }}
                                    >
                                        <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
                                        <div className="relative z-10 text-white text-center p-4">
                                            <span className="text-2xl font-bold">{services.find(s => s.id === activeService)?.title}</span>
                                        </div>
                                    </div>
                                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur-lg opacity-20 -z-10"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Process Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Our <span className="text-blue-600">Process</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Streamlined workflow ensuring quality and efficiency at every stage
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Consultation", description: "Understanding your vision and requirements" },
                            { step: "02", title: "Planning", description: "Detailed project planning and design development" },
                            { step: "03", title: "Execution", description: "Quality construction with precision and care" },
                            { step: "04", title: "Delivery", description: "Final inspection and project handover" }
                        ].map((process, index) => (
                            <div key={index} className="text-center group">
                                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <span className="text-white font-bold text-xl">{process.step}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                    {process.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {process.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-900 to-black text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Start Your <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Project</span>?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Let us discuss your construction needs and bring your vision to life with our expert services.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">

                        <Link
                            href="/projects"
                            className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
                        >
                            View Our Projects
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}