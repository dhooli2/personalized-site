// Main landing page layout component
import React from 'react';

export default function App() {
  return (
    <div className="text-gray-900 bg-white font-sans">
      <header className="flex flex-col items-center text-center py-10 px-4 bg-white shadow">
        <img src="https://cdn-icons-png.flaticon.com/512/10010/10010022.png" alt="Logo" className="w-16 h-16 mb-3" />
        <h1 className="text-3xl font-bold text-gray-900">Personalized AI Solutions</h1>
        <p className="text-sm text-gray-600">for small and micro businesses</p>
      </header>
      <section className="text-center py-12 px-4">
        <h2 className="text-4xl font-bold mb-4">Never Miss a Sale Again</h2>
        <p className="text-lg mb-6 text-gray-700">AI Sales Assistant that follows up with leads while you focus on the work.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium shadow hover:bg-blue-700">
            Start for $99
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-100">
            See How It Works
          </button>
        </div>
      </section>
    </div>
  );
}
