import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

const Hero = () => {
  const heroRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".animate-text", {
        y: 120,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: "power4.out",
        delay: 0.2,
      });
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      className="h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[50vw] h-[50vw] bg-yellow-500/5 blur-[120px] rounded-full -z-10 animate-pulse"></div>

      <div className="overflow-hidden">
        <h1 className="animate-text text-6xl md:text-[11rem] font-black leading-[0.85] uppercase tracking-tighter">
          යක්දෙස්සාව <br />
          <span className="text-yellow-400 italic">තරුණ ජවය</span>
        </h1>
      </div>

      <div className="overflow-hidden">
        <p className="animate-text mt-10 text-lg md:text-2xl max-w-3xl opacity-50 font-light leading-relaxed">
          යක්දෙස්සාව තාරුණ්‍යයේ බලය සහ සමගිය ලොවටම පෙන්වන නිල අවකාශය.
        </p>
      </div>

      <div className="animate-text mt-12 flex flex-col md:flex-row gap-6">
        <button className="px-12 py-5 bg-white text-black font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-yellow-400 transition-all shadow-2xl">
          අපේ වැඩසටහන්
        </button>
        <button className="px-12 py-5 border border-white/10 font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all">
          වැඩිදුර විස්තර
        </button>
      </div>
    </section>
  );
};

export default Hero;
