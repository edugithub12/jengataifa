// page.tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentBackground, setCurrentBackground] = useState('tractor.jpg');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Array of background images
  const backgroundImages = [
    'tractor.jpg',
    'Apartment.jpg',
    'classrooms.jpg',
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

    // Preload background images
    backgroundImages.forEach((image) => {
      const img = new Image();
      img.src = `/images/${image}`;
      img.onload = () => setIsImageLoaded(true);
    });

    // Background slideshow effect
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % backgroundImages.length;
      setCurrentImageIndex(currentIndex);
      setCurrentBackground(backgroundImages[currentIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed transition-all duration-1000"
        style={{ backgroundImage: `url('/images/${currentBackground}')` }}
      >
        {/* Loading Overlay */}
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gray-900 z-20 flex items-center justify-center">
            <div className="text-white text-xl">Loading...</div>
          </div>
        )}

        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-black/70 to-red-900/50"></div>

        {/* Simplified Particles */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          {/* Simplified Main Heading */}
          <div className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Gigateam Solutions
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-200 max-w-2xl mx-auto">
              Building Your Trust <span className="text-green-300 font-semibold">Brick by Brick</span>
            </p>
          </div>

          {/* Streamlined Subtitle */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <p className="text-base md:text-lg mb-8 text-gray-300 max-w-xl mx-auto leading-relaxed">
              Professional construction services with excellence and reliability.
            </p>
          </div>

          {/* Cleaner CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-3 justify-center items-center transform transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full font-semibold text-base hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto text-center"
            >
              Get Started
            </Link>
            <Link
              href="/projects"
              className="border border-white text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center"
            >
              View Our Work
            </Link>
          </div>

          {/* Simplified Progress Indicator */}
          <div className="mt-10 flex justify-center space-x-1">
            {backgroundImages.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${index === currentImageIndex
                  ? 'bg-green-400 w-4'
                  : 'bg-white/40'
                  }`}
              />
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-5 h-8 border border-white rounded-full flex justify-center">
              <div className="w-1 h-2 bg-green-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - More Spacious */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our <span className="text-green-600">Services</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-xl mx-auto">
              Comprehensive construction solutions for residential and commercial projects
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { name: "Residential", icon: "🏠", count: "25+" },
              { name: "Commercial", icon: "🏢", count: "15+" },
              { name: "Renovation", icon: "🔨", count: "30+" },
              { name: "Consultation", icon: "📋", count: "50+" }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-green-100">
                <div className="text-2xl mb-2">{service.icon}</div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{service.name}</h3>
                <p className="text-green-600 text-xs font-medium">{service.count} Projects</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Better Spacing */}
      <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Why Choose <span className="text-green-600">Gigateam</span>?
            </h2>
            <p className="text-lg text-gray-700 max-w-xl mx-auto">
              Excellence in every project with quality and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "🏗️",
                title: "Expert Construction",
                description: "Professional building services with attention to detail and quality craftsmanship.",
                features: ["Structural Design", "Quality Materials", "Expert Team"]
              },
              {
                icon: "⚡",
                title: "Fast & Efficient",
                description: "Timely project completion without compromising on quality and safety.",
                features: ["On-time Delivery", "Project Management", "Efficient Processes"]
              },
              {
                icon: "🔒",
                title: "Trusted Partner",
                description: "Building lasting relationships through reliability and exceptional service.",
                features: ["24/7 Support", "Transparent Pricing", "After-service Care"]
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 group"
              >
                <div className="text-3xl mb-3 transform group-hover:scale-105 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-1">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-600">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Cleaner */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
            {[
              { number: "50+", label: "Projects" },
              { number: "15+", label: "Years Experience" },
              { number: "100%", label: "Satisfaction" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} className="transform hover:scale-105 transition-transform duration-300 group">
                <div className="text-3xl md:text-4xl font-bold mb-1 group-hover:text-green-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-sm opacity-90 group-hover:text-red-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Less Crowded */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Client <span className="text-green-600">Testimonials</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-xl mx-auto">
              Hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "John Kamau",
                company: "Residential Client",
                text: "Gigateam transformed our dream home into reality. Exceptional attention to detail.",
                rating: 5
              },
              {
                name: "Sarah Mwangi",
                company: "Commercial Project",
                text: "Professional, timely, and within budget. Highly recommended.",
                rating: 5
              },
              {
                name: "David Ochieng",
                company: "Office Renovation",
                text: "Delivered beyond our expectations. Will definitely work with them again.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm italic mb-4 leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                    <p className="text-green-600 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Start Your <span className="text-green-600">Project</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6 max-w-md mx-auto">
            Lets discuss your vision and build something amazing together.
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-full font-semibold text-base hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-300 shadow-lg inline-block"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}