import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Lenis from "lenis"; // අලුත් Lenis import එක
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
        <main className="bg-[#080808] text-white min-h-screen">
          <Navbar />
          <Hero />

          {/* අමතර සෙක්ෂන් */}
          <section className="h-screen flex items-center justify-center p-10">
            <h2 className="text-4xl md:text-7xl font-bold text-center">
              යක්දෙස්සාව තාරුණ්‍යයේ <br />{" "}
              <span className="text-yellow-400">නව ගමන ඇරඹේ.</span>
            </h2>
          </section>
        </main>
      )}
    </>
  );
}

export default App;
