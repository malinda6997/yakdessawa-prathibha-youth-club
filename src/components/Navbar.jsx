import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-5 bg-black/20 backdrop-blur-xl border-b border-white/5">
      <div className="flex items-center gap-4">
        <img
          src="/logo.png"
          alt="Logo"
          className="h-12 w-auto shadow-lg shadow-[#FFCB05]/20"
        />
        <span className="font-black text-xl tracking-tighter uppercase text-white">
          Yakdessawa
        </span>
      </div>

      <div className="hidden md:flex gap-10 font-bold text-[11px] uppercase tracking-widest">
        <a href="#" className="hover:text-[#FFCB05] transition-colors">
          Home
        </a>
        <a href="#" className="hover:text-[#F4511E] transition-colors">
          Events
        </a>
        <a href="#" className="hover:text-[#1B75BB] transition-colors">
          About
        </a>
      </div>

      <button className="bg-[#FFCB05] text-black px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-tighter hover:bg-white transition-all active:scale-95">
        Join Now
      </button>
    </nav>
  );
};

export default Navbar;
