// page.tsx - Contact Page
"use client";
import { useState, useEffect } from "react";

export default function Contact() {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [submitMessage, setSubmitMessage] = useState('');

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setSubmitMessage('');

        try {
            // Add timeout to the fetch request
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            const result = await response.json();

            if (response.ok && result.success) {
                setSubmitStatus('success');
                setSubmitMessage('Your message has been sent successfully! We will get back to you within 24 hours.');
                setFormData({ name: '', email: '', phone: '', service: '', message: '' });

                console.log('✅ Message saved to database with ID:', result.data?.id);
            } else {
                setSubmitStatus('error');
                setSubmitMessage(result.error || 'Failed to send message. Please try again.');
                console.error('❌ Form submission error:', result.error);
            }
        } catch (error: unknown) {
            setSubmitStatus('error');
            if (error instanceof Error && error.name === 'AbortError') {
                setSubmitMessage('Request timed out. Please try again.');
            } else {
                setSubmitMessage('Network error. Please check your connection and try again.');
            }
            console.error('❌ Network error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactMethods = [
        {
            icon: "📧",
            title: "Email Us",
            details: "sales@gigateamsystemsltd.com",
            subtitle: "Send us an email anytime",
            link: "mailto:sales@gigateamsystemsltd.com"
        },
        {
            icon: "📞",
            title: "Call Us",
            details: "+254 718 811661",
            subtitle: "Mon to Fri, 8AM to 6PM",
            link: "tel:+254718811661"
        },
        {
            icon: "📍",
            title: "Visit Us",
            details: "Nairobi, Kenya",
            subtitle: "Come say hello at our office",
            link: "#"
        },
        {
            icon: "💬",
            title: "WhatsApp",
            details: "+254 718 811661",
            subtitle: "Quick responses via WhatsApp",
            link: "https://wa.me/254718811661"
        }
    ];

    const services = [
        "Residential Construction",
        "Commercial Construction",
        "Renovations & Remodeling",
        "Architectural Design",
        "Project Management",
        "Consultation Services"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <section
                className="relative py-32 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('/images/Residential.jpg')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/50 to-blue-900/30"></div>
                <div className="relative z-10 container mx-auto px-6">
                    <div className={`max-w-4xl transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                            Get In <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Touch</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
                            Ready to start your construction project? Let us discuss how we can bring your vision to life with our expert services.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Multiple Ways to <span className="text-blue-600">Connect</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Choose the most convenient way to reach out to our team
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactMethods.map((method, index) => (
                            <a
                                key={index}
                                href={method.link}
                                target={method.link.startsWith('http') ? '_blank' : '_self'}
                                rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center group"
                            >
                                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                    {method.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                    {method.title}
                                </h3>
                                <p className="text-gray-700 font-semibold text-lg mb-2">
                                    {method.details}
                                </p>
                                <p className="text-gray-500 text-sm">
                                    {method.subtitle}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section id="contact-form" className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                Send Us a <span className="text-blue-600">Message</span>
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Fill out the form below and our team will get back to you within 24 hours.
                            </p>

                            {/* Success Notification */}
                            {submitStatus === 'success' && (
                                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 animate-fade-in">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-white text-lg">✓</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-green-800 font-semibold">Message Sent Successfully!</p>
                                            <p className="text-green-600 text-sm mt-1">{submitMessage}</p>
                                        </div>
                                        <button
                                            onClick={() => setSubmitStatus('idle')}
                                            className="text-green-600 hover:text-green-800 transition-colors text-xl font-bold"
                                        >
                                            ×
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Error Notification */}
                            {submitStatus === 'error' && (
                                <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 animate-fade-in">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-white text-lg">!</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-red-800 font-semibold">Error Sending Message</p>
                                            <p className="text-red-600 text-sm mt-1">{submitMessage}</p>
                                        </div>
                                        <button
                                            onClick={() => setSubmitStatus('idle')}
                                            className="text-red-600 hover:text-red-800 transition-colors text-xl font-bold"
                                        >
                                            ×
                                        </button>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                            placeholder="Your full name"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                            placeholder="your.email@example.com"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                            placeholder="+254 XXX XXX XXX"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
                                            Service Interested In
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                                            disabled={isSubmitting}
                                        >
                                            <option value="">Select a service</option>
                                            {services.map((service, index) => (
                                                <option key={index} value={service}>{service}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                                        Project Details *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
                                        placeholder="Tell us about your project, requirements, timeline, and budget..."
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center space-x-3">
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span>Sending Message...</span>
                                        </div>
                                    ) : (
                                        "Send Message"
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                                    Visit Our <span className="text-blue-600">Office</span>
                                </h2>
                                <p className="text-gray-600 mb-8 text-lg">
                                    Feel free to visit our office for a face-to-face consultation about your construction project.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-xl">📍</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Our Location</h3>
                                        <p className="text-gray-600">Nairobi, Kenya</p>
                                        <p className="text-gray-500 text-sm mt-1">Main office located in the heart of Nairobi</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-xl">📞</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Phone Numbers</h3>
                                        <a
                                            href="tel:+254718811661"
                                            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 block"
                                        >
                                            +254 718 811661
                                        </a>
                                        <p className="text-gray-500 text-sm mt-1">Available Mon-Fri, 8:00 AM - 6:00 PM</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-xl">📧</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Email Address</h3>
                                        <a
                                            href="mailto:sales@gigateamsystemsltd.com"
                                            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 block"
                                        >
                                            sales@gigateamsystemsltd.com
                                        </a>
                                        <p className="text-gray-500 text-sm mt-1">We respond within 24 hours</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-xl">🕒</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">Business Hours</h3>
                                        <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                                        <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                                        <p className="text-gray-500 text-sm mt-1">Emergency services available 24/7</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Add custom animation */}
            <style jsx global>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }
            `}</style>
        </div>
    );
}