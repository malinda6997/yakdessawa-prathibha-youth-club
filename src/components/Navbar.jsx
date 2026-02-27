import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from("nav", {
        y: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-16 py-6 bg-black/10 backdrop-blur-2xl border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center font-black text-black">
            Y
          </div>
          <span className="font-black text-2xl tracking-tighter uppercase">
            Yakdessawa
          </span>
        </div>

        <ul className="hidden md:flex gap-12 text-[11px] font-bold uppercase tracking-[4px]">
          {["මුල් පිටුව", "වැඩසටහන්", "අප ගැන"].map((item) => (
            <li
              key={item}
              className="hover:text-yellow-400 cursor-pointer transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-yellow-400 group-hover:w-full transition-all duration-500"></span>
            </li>
          ))}
        </ul>

        <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all active:scale-90">
          සෙට් වෙන්න
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
