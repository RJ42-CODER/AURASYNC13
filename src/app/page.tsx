import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] px-6 py-20 text-center bg-gradient-to-b from-black via-gray-900 to-black">
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-6 uppercase">
          Unleash Your <span className="text-pink-500">Aura</span>
        </h1>
        <p className="text-xl sm:text-2xl max-w-2xl mb-8 font-medium text-gray-200">
          Fashion that matches your personality. Stand out. Be bold. Be you.
        </p>
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-all">
          Shop the Collection
        </button>
        <div className="mt-12">
          <Image src="/fashion-hero.jpg" alt="Bold fashion" width={600} height={400} className="rounded-2xl shadow-2xl object-cover mx-auto" />
        </div>
      </section>

      {/* Personality Quiz Teaser */}
      <section className="py-16 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 uppercase tracking-wide">
          What's Your Fashion Personality?
        </h2>
        <p className="text-lg text-gray-300 mb-6 max-w-xl mx-auto">
          Take our quick quiz to discover your unique style and get personalized recommendations.
        </p>
        <button className="bg-white text-black font-bold py-2 px-6 rounded-full text-lg shadow hover:bg-gray-200 transition-all">
          Take the Quiz
        </button>
      </section>

      {/* Featured Collections */}
      <section className="py-20 px-6 bg-black">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center uppercase tracking-wide">
          Featured Collections
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-800 rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform">
            <Image src="/collection1.jpg" alt="Street Bold" width={300} height={400} className="rounded-lg mb-4 object-cover" />
            <h3 className="text-xl font-semibold mb-2">Street Bold</h3>
            <p className="text-gray-300">Urban looks for the fearless trendsetter.</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform">
            <Image src="/collection2.jpg" alt="Chic Rebel" width={300} height={400} className="rounded-lg mb-4 object-cover" />
            <h3 className="text-xl font-semibold mb-2">Chic Rebel</h3>
            <p className="text-gray-300">Edgy elegance for the modern iconoclast.</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform">
            <Image src="/collection3.jpg" alt="Vivid Dreamer" width={300} height={400} className="rounded-lg mb-4 object-cover" />
            <h3 className="text-xl font-semibold mb-2">Vivid Dreamer</h3>
            <p className="text-gray-300">Colorful, creative, and unapologetically you.</p>
          </div>
        </div>
      </section>

      {/* About/Brand Section */}
      <section className="py-16 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 uppercase tracking-wide">
          About AuraSync
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          AuraSync is more than fashion—it's a movement. We believe in bold self-expression, fearless individuality, and style that speaks louder than words. Join us and let your aura shine.
        </p>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-6 bg-black text-center border-t border-gray-800">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 uppercase tracking-wide">
          Join the Movement
        </h2>
        <p className="text-gray-300 mb-6">Sign up for exclusive drops, style tips, and more.</p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-full w-full sm:w-auto text-black focus:outline-none focus:ring-2 focus:ring-pink-500"
            required
          />
          <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
