import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Loader = ({ onComplete }) => {
  const loaderRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => {
          // 🚀 ලෝගෝ එක තිබ්බ තැනම මැකිලා යන ඇනිමේෂන් එක
          gsap.to(loaderRef.current, {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            onComplete: onComplete, // මේකෙන් තමයි සයිට් එකේ Content ටික පෙන්වන්නේ
          });
        },
      });

      // ආරම්භක සැකසුම් (සඟවා තැබීම)
      gsap.set(".logo-shape, .logo-text, .logo-motto", { opacity: 0 });
      gsap.set(".logo-shape", { scale: 0.5, transformOrigin: "center" });

      // 1. මිනිස් රූප කොටස් 3 එකින් එක මතු වීම
      tl.to(".logo-shape", {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
      });

      // 2. "Yakdessawa Youth" නම මතු වීම
      tl.to(
        ".logo-text",
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          startAt: { y: 20 },
          ease: "power3.out",
        },
        "-=0.4",
      );

      // 3. පාඨය (Motto) මතු වීම
      tl.to(
        ".logo-motto",
        {
          opacity: 0.6,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.3",
      );

      // පේජ් එක මැකෙන්න කලින් පොඩි තත්පරයක විරාමයක් (Logo එක පෙන්වා තැබීමට)
      tl.to({}, { duration: 0.8 });
    },
    { scope: loaderRef },
  );

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[100] bg-[#080808] flex items-center justify-center p-5 pointer-events-none"
    >
      <div className="w-full max-w-[550px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2000 2200"
          className="w-full h-auto"
        >
          <g>
            {/* Shapes - ලෝගෝ එකේ රූප */}
            <path
              className="logo-shape fill-[#ffca05]"
              d="M1142.19,791.49c-19,21.93-69.54,60.94-145.83,62.2S869.5,817.55,860.74,809.5c-141.06-110-287.42-336.61-287.42-336.61l416.78,724L1419.54,459S1275.73,652.08,1142.19,791.49Z"
            />
            <circle
              className="logo-shape fill-[#ffca05]"
              cx="995.28"
              cy="718.54"
              r="105.5"
            />

            <path
              className="logo-shape fill-[#f05a28]"
              d="M714.18,864.6c9.48,27.46,18,90.7-19,157.39s-94.73,91.8-106.09,95.36C423.27,1184.51,153.84,1198,153.84,1198l835.35,1L564.88,458.14S660.22,679.24,714.18,864.6Z"
            />
            <circle
              className="logo-shape fill-[#f05a28]"
              cx="594"
              cy="915"
              r="90"
            />

            <path
              className="logo-shape fill-[#1b75bb]"
              d="M1419.51,1125.59c-28.52-5.52-87.55-29.75-126.78-95.19s-32.14-127.93-29.54-139.55C1287.92,713.7,1411,473.64,1411,473.64L992.41,1196.56l853.75,3S1607,1171.54,1419.51,1125.59Z"
            />
            <circle
              className="logo-shape fill-[#1b75bb]"
              cx="1400"
              cy="950"
              r="95"
            />

            {/* Text - නම */}
            <text
              className="logo-text fill-[#2b3980] font-bold"
              x="1000"
              y="1450"
              textAnchor="middle"
              style={{ fontSize: "180px", fontFamily: "Arial, sans-serif" }}
            >
              Yakdessawa Youth
            </text>

            {/* Motto - පාඨය */}
            <text
              className="logo-motto fill-white opacity-60"
              x="1000"
              y="1620"
              textAnchor="middle"
              style={{ fontSize: "75px", fontFamily: "serif" }}
            >
              “The Future Is Ours to Lead”
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
