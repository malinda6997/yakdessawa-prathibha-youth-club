import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Lenis from "lenis";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      const lenis = new Lenis();
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <main className="bg-[#050505] text-white selection:bg-[#FFCB05] selection:text-black">
          <Navbar />
          <Hero />

          {/* About Section with Logo Colors */}
          <section className="py-24 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                title="සමගිය"
                desc="යක්දෙස්සාව තාරුණ්‍යයේ එකමුතුකම."
                color="border-[#FFCB05]"
                textColor="text-[#FFCB05]"
              />
              <FeatureCard
                title="ජවය"
                desc="හෙට දවස දිනන තරුණ ශක්තිය."
                color="border-[#F4511E]"
                textColor="text-[#F4511E]"
              />
              <FeatureCard
                title="නායකත්වය"
                desc="ගමට ආදර්ශමත් නායකත්වයක්."
                color="border-[#1B75BB]"
                textColor="text-[#1B75BB]"
              />
            </div>
          </section>

          <footer className="py-10 text-center border-t border-white/5 opacity-50 text-sm italic">
            © 2026 Yakdessawa Youth Club - The Future Is Ours to Lead
          </footer>
        </main>
      )}
    </>
  );
}

const FeatureCard = ({ title, desc, color, textColor }) => (
  <div
    className={`p-10 rounded-[2rem] border-2 ${color} bg-white/5 hover:bg-white/10 transition-all duration-500 group`}
  >
    <h3 className={`text-3xl font-black mb-4 ${textColor}`}>{title}</h3>
    <p className="opacity-70 leading-relaxed">{desc}</p>
  </div>
);

export default App;
