// page.tsx - Projects Page
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    location: string;
    duration: string;
    size: string;
    status: 'completed' | 'ongoing' | 'upcoming';
    features: string[];
};

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [isVisible, setIsVisible] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const projects: Project[] = [
        {
            id: 1,
            title: "Modern Residential Homes",
            description: "A contemporary home complex built with sustainable materials, featuring energy-efficient designs and modern amenities for comfortable urban living.",
            image: "/images/Residential2.jpg",
            category: "residential",
            location: "Nairobi, Kenya",
            duration: "18 Months",
            size: "12,000 sq ft",
            status: "completed",
            features: ["Solar Power", "Water Recycling", "Smart Home", "Green Spaces"]
        },
        {
            id: 2,
            title: "Innovative Office Complex",
            description: "A state-of-the-art office building designed for maximum comfort, functionality, and collaboration with cutting-edge technology integration.",
            image: "/images/office_designs.jpg",
            category: "commercial",
            location: "Westlands, Nairobi",
            duration: "24 Months",
            size: "25,000 sq ft",
            status: "completed",
            features: ["LEED Certified", "Open Workspaces", "Conference Centers", "Cafeteria"]
        },
        {
            id: 3,
            title: "Hostel Construction",
            description: "Modern student accommodation facility designed to provide comfortable living and learning environments with enhanced security and amenities.",
            image: "/images/kitale_hostels.jpg",
            category: "educational",
            location: "Kitale, Kenya",
            duration: "14 Months",
            size: "8,500 sq ft",
            status: "completed",
            features: ["Study Rooms", "Common Areas", "Security", "Wi-Fi Ready"]
        },
        {
            id: 4,
            title: "Luxury Villa Development",
            description: "Exclusive residential villas featuring premium finishes, private gardens, and luxury amenities in a gated community setting.",
            image: "/images/Residential.jpg",
            category: "residential",
            location: "Karen, Nairobi",
            duration: "20 Months",
            size: "15,000 sq ft",
            status: "ongoing",
            features: ["Swimming Pool", "Smart Security", "Landscaped Gardens", "Garage"]
        },
        {
            id: 9,
            title: "Space-Efficient Modern Kitchen",
            description: "Innovative compact kitchen design maximizing functionality in limited space with clever storage solutions and multi-functional features.",
            image: "/images/modern_kitchen.jpg",
            category: "residential",
            location: "Nairobi Apartments",
            duration: "4 Weeks",
            size: "200 sq ft",
            status: "completed",
            features: ["Fold-down Counters", "Vertical Storage", "Compact Appliances", "Multi-purpose Island", "Sliding Pantry", "Space-saving Solutions"]
        },
        {
            id: 8,
            title: "Premium Glass Office Partitions",
            description: "Elegant glass partition installation creating bright, open-feel workspaces while maintaining acoustic privacy and modern aesthetic appeal throughout the office.",
            image: "/images/office_partition.jpg",
            category: "commercial",
            location: "Westlands, Nairobi",
            duration: "2 Months",
            size: "12,000 sq ft",
            status: "completed",
            features: ["Tempered Glass", "Aluminum Frames", "Acoustic Insulation", "Frosted Options", "Sliding Doors", "LED Integration"]
        },
        {
            id: 7,
            title: "Modern Classroom Complex",
            description: "State-of-the-art educational facility featuring spacious, well-lit classrooms designed to enhance learning experiences with modern amenities and technology integration.",
            image: "/images/classrooms.jpg",
            category: "educational",
            location: "Athiriver, Kenya",
            duration: "12 Months",
            size: "35,000 sq ft",
            status: "completed",
            features: ["Smart Boards", "Air Conditioning", "Natural Lighting", "Wi-Fi Enabled", "Storage Spaces", "Safety Features"]
        },
        {
            id: 8,
            title: "Mixed-Use Development",
            description: "Integrated development combining retail spaces, offices, and residential units in a sustainable urban environment.",
            image: "/images/office_setups.jpg",
            category: "mixed",
            location: "Thika, Kenya",
            duration: "30 Months",
            size: "50,000 sq ft",
            status: "ongoing",
            features: ["Retail Spaces", "Apartments", "Parking", "Recreation"]
        }
    ];

    const categories = [
        { id: 'all', label: 'All Projects', count: projects.length },
        { id: 'residential', label: 'Residential', count: projects.filter(p => p.category === 'residential').length },
        { id: 'commercial', label: 'Commercial', count: projects.filter(p => p.category === 'commercial').length },
        { id: 'educational', label: 'Educational', count: projects.filter(p => p.category === 'educational').length },
        { id: 'healthcare', label: 'Healthcare', count: projects.filter(p => p.category === 'healthcare').length },
        { id: 'industrial', label: 'Industrial', count: projects.filter(p => p.category === 'industrial').length },
        { id: 'mixed', label: 'Mixed Use', count: projects.filter(p => p.category === 'mixed').length }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed': return 'bg-green-500';
            case 'ongoing': return 'bg-blue-500';
            case 'upcoming': return 'bg-blue-400';
            default: return 'bg-gray-500';
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'completed': return 'Completed';
            case 'ongoing': return 'In Progress';
            case 'upcoming': return 'Coming Soon';
            default: return status;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <section className="relative py-32 bg-gradient-to-r from-blue-900 to-black text-white">
                <div className="absolute inset-0 bg-[url('/images/construction-pattern.png')] opacity-10"></div>
                <div className="relative z-10 container mx-auto px-6 text-center">
                    <div className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Our <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Projects</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                            Showcasing our commitment to excellence through a diverse portfolio of successful construction projects
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => document.getElementById('projects-grid')?.scrollIntoView({ behavior: 'smooth' })}
                                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                            >
                                Explore Portfolio
                            </button>
                            <Link
                                href="/contact"
                                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
                            >
                                Start Your Project
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white border-b border-gray-200">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: "50+", label: "Projects Completed" },
                            { number: "15+", label: "Cities Covered" },
                            { number: "98%", label: "Client Satisfaction" },
                            { number: "500+", label: "Team Members" }
                        ].map((stat, index) => (
                            <div key={index} className="transform hover:scale-110 transition-transform duration-300">
                                <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">{stat.number}</div>
                                <div className="text-lg text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section id="projects-grid" className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Project <span className="text-blue-600">Portfolio</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                            Discover our diverse range of construction projects across various sectors and locations
                        </p>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveFilter(category.id)}
                                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${activeFilter === category.id
                                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                                        }`}
                                >
                                    {category.label} ({category.count})
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                                style={{
                                    animationDelay: `${index * 100}ms`
                                }}
                            >
                                {/* Project Image */}
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={400}
                                        height={256}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />

                                    {/* Status Badge */}
                                    <div className={`absolute top-4 right-4 ${getStatusColor(project.status)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                                        {getStatusText(project.status)}
                                    </div>

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
                                        <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                            <button className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Project Meta */}
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                                            <span>📍</span>
                                            <span>{project.location}</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                                            <span>⏱️</span>
                                            <span>{project.duration}</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                                            <span>📐</span>
                                            <span>{project.size}</span>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                                            <span
                                                key={featureIndex}
                                                className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                        {project.features.length > 3 && (
                                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                                                +{project.features.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <div className="text-center py-16">
                            <div className="text-6xl mb-4">🏗️</div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">No Projects Found</h3>
                            <p className="text-gray-600 mb-6">We do not have any projects in this category yet, but were always working on new ones!</p>
                            <button
                                onClick={() => setActiveFilter('all')}
                                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                            >
                                View All Projects
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Project Modal */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6">
                    <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="relative">
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors duration-300 z-10"
                            >
                                <span className="text-2xl">×</span>
                            </button>

                            {/* Project Image */}
                            <div className="w-full h-80 relative">
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Project Details */}
                            <div className="p-8">
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                            {selectedProject.title}
                                        </h2>
                                        <div className={`inline-block ${getStatusColor(selectedProject.status)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                                            {getStatusText(selectedProject.status)}
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                    {selectedProject.description}
                                </p>

                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Project Information */}
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">Project Details</h3>
                                        <div className="space-y-3">
                                            <div className="flex justify-between border-b border-gray-200 pb-2">
                                                <span className="text-gray-600">Location:</span>
                                                <span className="font-semibold">{selectedProject.location}</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-200 pb-2">
                                                <span className="text-gray-600">Duration:</span>
                                                <span className="font-semibold">{selectedProject.duration}</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-200 pb-2">
                                                <span className="text-gray-600">Size:</span>
                                                <span className="font-semibold">{selectedProject.size}</span>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-200 pb-2">
                                                <span className="text-gray-600">Category:</span>
                                                <span className="font-semibold capitalize">{selectedProject.category}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features</h3>
                                        <div className="grid grid-cols-2 gap-2">
                                            {selectedProject.features.map((feature, index) => (
                                                <div key={index} className="flex items-center space-x-2 bg-blue-50 p-3 rounded-lg">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                    <span className="text-gray-700 text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex space-x-4 mt-8 pt-8 border-t border-gray-200">
                                    <Link
                                        href="/contact"
                                        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-center flex-1"
                                    >
                                        Start Similar Project
                                    </Link>
                                    <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex-1">
                                        Download Case Study
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Build Your <span className="text-blue-300">Dream Project</span>?
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Let us discuss how we can bring your vision to life with the same expertise and quality showcased in our portfolio.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                        >
                            Start Your Project
                        </Link>
                        <a
                            href="tel:+254718811661"
                            className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
                        >
                            Call Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}