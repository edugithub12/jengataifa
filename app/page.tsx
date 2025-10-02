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
    }, 5000); // Change every 5 seconds for better engagement

    return () => clearInterval(interval); // Cleanup on unmount
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

        {/* Updated Background Overlay with green, black, and red theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-black/70 to-red-900/50"></div>

        {/* Updated Particles Background */}
        <div className="absolute inset-0 opacity-40">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-green-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
          {[...Array(15)].map((_, i) => (
            <div
              key={i + 20}
              className="absolute w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
          {/* Main Heading with Animation */}
          <div className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Gigateam Solutions Limited
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Building Your Trust <span className="text-green-300 font-semibold">Brick by Brick</span>
            </p>
          </div>

          {/* Animated Subtitle */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
            <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
              Professional construction services with excellence, reliability, and unmatched expertise in building and infrastructure development.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
            >
              Get Started
            </Link>
            <Link
              href="/projects"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm hover:border-red-500 hover:bg-red-50 hover:text-red-900 w-full sm:w-auto text-center"
            >
              View Our Work
            </Link>
          </div>

          {/* Progress Indicator */}
          <div className="mt-12 flex justify-center space-x-2">
            {backgroundImages.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${index === currentImageIndex
                  ? 'bg-green-400 w-8'
                  : 'bg-white/50'
                  }`}
              />
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Services</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Comprehensive construction solutions for residential and commercial projects
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Residential", icon: "🏠", count: "25+" },
              { name: "Commercial", icon: "🏢", count: "15+" },
              { name: "Renovation", icon: "🔨", count: "30+" },
              { name: "Consultation", icon: "📋", count: "50+" }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-green-100">
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{service.name}</h3>
                <p className="text-green-600 font-semibold">{service.count} Projects</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-green-600">Gigateam</span>?
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              We deliver excellence in every project with our commitment to quality and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                description: "Timely project completion without compromising on quality and safety standards.",
                features: ["On-time Delivery", "Project Management", "Efficient Processes"]
              },
              {
                icon: "🔒",
                title: "Trusted Partner",
                description: "Building lasting relationships through reliability and exceptional service delivery.",
                features: ["24/7 Support", "Transparent Pricing", "After-service Care"]
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 group hover:border-green-300 cursor-pointer"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 w-12 h-1 bg-red-500 transform group-hover:scale-x-150 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Updated to green and red theme */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "15+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} className="transform hover:scale-110 transition-transform duration-300 group">
                <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:text-green-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90 group-hover:text-red-300 transition-colors duration-300">
                  {stat.label}
                </div>
                <div className="mt-2 w-8 h-0.5 bg-red-500 mx-auto transform group-hover:scale-x-150 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="text-green-600">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Do not just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John Kamau",
                company: "Residential Client",
                text: "Gigateam transformed our dream home into reality. Their attention to detail was exceptional.",
                rating: 5
              },
              {
                name: "Sarah Mwangi",
                company: "Commercial Project",
                text: "Professional, timely, and within budget. Highly recommended for any construction project.",
                rating: 5
              },
              {
                name: "David Ochieng",
                company: "Office Renovation",
                text: "The team delivered beyond our expectations. Will definitely work with them again.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-green-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Build <span className="text-green-600">Together</span>?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Let us discuss your project and start building your vision today.
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-green-700 hover:to-green-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}