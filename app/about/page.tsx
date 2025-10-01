// page.tsx - About Page
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function About() {
    const [activeTab, setActiveTab] = useState('mission');
    const [isVisible, setIsVisible] = useState(false);
    const [counter, setCounter] = useState({
        projects: 0,
        experience: 0,
        clients: 0,
        team: 0
    });

    useEffect(() => {
        setIsVisible(true);

        // Animated counters
        const duration = 3000;
        const steps = 60;
        const stepValues = {
            projects: 150,
            experience: 15,
            clients: 100,
            team: 25
        };

        Object.keys(stepValues).forEach(key => {
            let current = 0;
            const increment = stepValues[key as keyof typeof stepValues] / steps;
            const timer = setInterval(() => {
                current += increment;
                if (current >= stepValues[key as keyof typeof stepValues]) {
                    current = stepValues[key as keyof typeof stepValues];
                    clearInterval(timer);
                }
                setCounter(prev => ({
                    ...prev,
                    [key]: Math.floor(current)
                }));
            }, duration / steps);
        });
    }, []);

    const teamMembers = [
        {
            name: "Charles Mwangi Wambugu",
            role: "Founder & CEO",
            image: "/images/team/ceo.jpg",
            experience: "20+ years",
            specialty: "Strategic Planning"
        },
        {
            name: "Sarah Johnson",
            role: "Head Architect",
            image: "/images/team/architect.jpg",
            experience: "15+ years",
            specialty: "Innovative Design"
        },
        {
            name: "Mike Chen",
            role: "Construction Manager",
            image: "/images/team/manager.jpg",
            experience: "12+ years",
            specialty: "Project Execution"
        },
        {
            name: "Emily Davis",
            role: "Design Consultant",
            image: "/images/team/designer.jpg",
            experience: "10+ years",
            specialty: "Client Relations"
        }
    ];

    const values = [
        {
            icon: "🏆",
            title: "Excellence",
            description: "We never compromise on quality and always strive for perfection in every project."
        },
        {
            icon: "🤝",
            title: "Integrity",
            description: "Honest communication and transparent processes build lasting trust with our clients."
        },
        {
            icon: "💡",
            title: "Innovation",
            description: "Embracing new technologies and creative solutions to overcome construction challenges."
        },
        {
            icon: "🌱",
            title: "Sustainability",
            description: "Building for the future with eco-friendly practices and sustainable materials."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <section
                className="relative py-32 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('/images/tractor.jpg')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/50 to-blue-900/30"></div>
                <div className="relative z-10 container mx-auto px-6">
                    <div className={`max-w-4xl transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                            About <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Gigateam</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                            Building dreams into reality with over {counter.experience}+ years of excellence in construction and innovation
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                            >
                                Get In Touch
                            </Link>
                            <button
                                onClick={() => document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })}
                                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
                            >
                                Our Story
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="transform hover:scale-110 transition-transform duration-300">
                            <div className="text-4xl md:text-5xl font-bold mb-2">
                                {counter.projects}+
                            </div>
                            <div className="text-lg opacity-90">Projects Completed</div>
                        </div>
                        <div className="transform hover:scale-110 transition-transform duration-300">
                            <div className="text-4xl md:text-5xl font-bold mb-2">
                                {counter.experience}+
                            </div>
                            <div className="text-lg opacity-90">Years Experience</div>
                        </div>
                        <div className="transform hover:scale-110 transition-transform duration-300">
                            <div className="text-4xl md:text-5xl font-bold mb-2">
                                {counter.clients}+
                            </div>
                            <div className="text-lg opacity-90">Happy Clients</div>
                        </div>
                        <div className="transform hover:scale-110 transition-transform duration-300">
                            <div className="text-4xl md:text-5xl font-bold mb-2">
                                {counter.team}+
                            </div>
                            <div className="text-lg opacity-90">Expert Team</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section id="our-story" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                                Our <span className="text-blue-600">Story</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Founded in 2008, Gigateam Solutions began as a small family-run business with a big vision: to transform the construction industry through innovation, quality, and unwavering commitment to client satisfaction.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Today, we have grown into a trusted leader in construction services, but our core values remain the same. We believe that every project, no matter the size, deserves the highest level of craftsmanship and attention to detail.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/projects"
                                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center"
                                >
                                    View Our Work
                                </Link>
                                <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                                    Download Company Profile
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 h-48 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                                        <span className="text-4xl">🏗️</span>
                                    </div>
                                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 h-32 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                                        <span className="text-3xl">📈</span>
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 h-32 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                                        <span className="text-3xl">🌟</span>
                                    </div>
                                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 h-48 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                                        <span className="text-4xl">🔧</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur-lg opacity-20 -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Tabs */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Our <span className="text-blue-600">Purpose</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Driving construction excellence through clear vision and unwavering mission
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {/* Tab Headers */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {[
                                { id: 'mission', label: 'Our Mission', icon: '🎯' },
                                { id: 'vision', label: 'Our Vision', icon: '🔭' },
                                { id: 'approach', label: 'Our Approach', icon: '🚀' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center space-x-3 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${activeTab === tab.id
                                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transform scale-105'
                                        : 'bg-white text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                                        }`}
                                >
                                    <span className="text-xl">{tab.icon}</span>
                                    <span>{tab.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
                            {activeTab === 'mission' && (
                                <div className="text-center">
                                    <div className="text-6xl mb-6">🎯</div>
                                    <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h3>
                                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                        To deliver exceptional construction solutions that exceed client expectations through innovative design, superior craftsmanship, and unwavering commitment to quality and safety.
                                    </p>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        We are dedicated to building lasting relationships with our clients by providing reliable, efficient, and cost-effective construction services that stand the test of time.
                                    </p>
                                </div>
                            )}

                            {activeTab === 'vision' && (
                                <div className="text-center">
                                    <div className="text-6xl mb-6">🔭</div>
                                    <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h3>
                                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                        To be the most trusted and innovative construction partner, recognized for transforming landscapes and communities through sustainable building practices and cutting-edge technology.
                                    </p>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        We envision a future where every construction project contributes positively to the environment and enhances the quality of life for generations to come.
                                    </p>
                                </div>
                            )}

                            {activeTab === 'approach' && (
                                <div className="text-center">
                                    <div className="text-6xl mb-6">🚀</div>
                                    <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Approach</h3>
                                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                        We combine traditional craftsmanship with modern technology, ensuring every project benefits from the perfect blend of time-tested techniques and innovative solutions.
                                    </p>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        Our collaborative approach involves clients at every stage, ensuring transparency, communication, and alignment with your vision from concept to completion.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Our <span className="text-blue-600">Values</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            The principles that guide every decision we make and every project we undertake
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center group"
                            >
                                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                    {value.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Meet Our <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Team</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            The passionate professionals behind Gigateam Solutions success
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-700 text-center group"
                            >
                                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl">
                                    👤
                                </div>
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                                    {member.name}
                                </h3>
                                <p className="text-blue-400 font-semibold mb-3">{member.role}</p>
                                <div className="space-y-2 text-gray-300">
                                    <p className="text-sm">Experience: {member.experience}</p>
                                    <p className="text-sm">Specialty: {member.specialty}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Build <span className="text-blue-300">Together</span>?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join the growing family of satisfied clients who trust Gigateam Solutions for their construction needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                        >
                            Start Your Project
                        </Link>
                        <Link
                            href="/services"
                            className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
                        >
                            Explore Services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}