export default function HeroSection() {
    return (
        <section className="h-screen flex flex-col items-center justify-center text-center bg-[url('/construction-bg.jpg')] bg-cover bg-center">
            <h1 className="text-5xl font-bold text-white drop-shadow-lg">Building the Future</h1>
            <p className="mt-4 text-xl text-white">Trusted Construction & Engineering Services</p>
            <a
                href="/contact"
                className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition"
            >
                Get a Quote
            </a>
        </section>
    )
}
