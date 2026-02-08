import React from 'react';

// 1. Ini fungsi buat "nelfon" Backend abang
async function getBackendMessage() {
  try {
    // ⚠️ PENTING: GANTI Link di bawah ini dengan Link Backend Vercel Abang!
    // Jangan lupa pakai https:// dan jangan ada spasi
    const res = await fetch('https://backend-kimjongne.vercel.app/', { 
      cache: 'no-store' // Biar datanya selalu update (gak dicache)
    });
    
    if (!res.ok) {
      return 'Gagal mengambil data backend :(';
    }
    
    return res.text(); // Mengambil tulisan dari backend
  } catch (error) {
    console.error(error);
    return 'Backend sedang tidur...';
  }
}

export default async function Home() {
  // 2. Panggil fungsinya disini
  const message = await getBackendMessage();

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      {/* Navbar */}
      <nav className="p-6 flex justify-between items-center border-b border-gray-800 bg-gray-900/50 backdrop-blur">
        <h1 className="text-2xl font-bold text-blue-500 tracking-tighter">JASA KIMJONG</h1>
        <div className="flex gap-4 items-center">
          {/* Indikator Status Server */}
          <span className="flex items-center gap-2 text-xs font-mono bg-gray-800 px-3 py-1 rounded-full border border-gray-700">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Server: {message}
          </span>
          <button className="bg-blue-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-500 transition">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        {/* Background Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -z-10"></div>

        <div className="mb-6 px-4 py-1 bg-blue-900/30 rounded-full text-xs text-blue-400 border border-blue-800/50 uppercase tracking-widest">
          The #1 Coding Marketplace
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-blue-100 to-blue-900">
          Solusi Coding <br/> Tanpa Pusing.
        </h1>
        
        <p className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed">
          Platform jasa coding terpercaya. Fix bug, bikin bot, web app, hingga script game. 
          Semua transaksi aman dan instan.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition shadow-lg shadow-white/10">
            🚀 Cari Jasa Sekarang
          </button>
          <button className="px-8 py-4 bg-black border border-gray-700 rounded-full font-bold hover:border-blue-500 hover:text-blue-400 transition">
            Jadi Seller
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-600 text-sm border-t border-gray-900">
        &copy; 2026 Kimjong Store. Built with Next.js & NestJS.
      </footer>
    </div>
  );
}
