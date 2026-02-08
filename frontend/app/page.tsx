import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar Sederhana */}
      <nav className="p-6 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-2xl font-bold text-blue-500">Jasa Kimjong</h1>
        <button className="bg-blue-600 px-4 py-2 rounded-lg text-sm font-semibold">Login</button>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
        <div className="mb-6 px-4 py-1 bg-gray-800 rounded-full text-xs text-blue-400 border border-blue-900">
          Marketplace Coding No. #1
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Solusi Coding <br/> Tanpa Pusing.
        </h1>
        
        <p className="text-gray-400 text-lg max-w-xl mb-8">
          Jasa fix bug, bikin script game, bot Telegram, hingga website full-stack. 
          Aman, cepat, dan terpercaya by Kimjong.
        </p>

        <div className="flex gap-4">
          <button className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition">
            Cari Jasa
          </button>
          <button className="px-8 py-3 bg-gray-900 border border-gray-700 rounded-full font-bold hover:border-white transition">
            Daftar Seller
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-600 text-sm">
        &copy; 2026 Kimjong Store. All rights reserved.
      </footer>
    </div>
  );
}
