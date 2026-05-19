import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center md:items-start md:pl-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/heroo.png" 
          alt="Abstract Background" 
          fill 
          className="object-cover opacity-60"
          priority 
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
      </div>
      <div className="relative z-10 text-center md:text-start space-y-6 flex flex-col items-center md:items-start mt-12">
        <ScrollReveal delay={0.1}>
          <h3 className="text-2xl md:text-4xl font-white tracking-tighter text-white drop-shadow-2xl">SEASON 1</h3>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl">
            MINIMAL
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.5}>
          <p className="text-base md:text-lg text-gray-300 tracking-wider max-w-md mx-auto px-4 md:px-0  font-light">
            Minimalist design. Maximum impact. Redefining everyday essentials.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.5}>
          <button className="relative px-8 py-3 mt-8 text-white transition-all duration-300 text-sm tracking-widest uppercase backdrop-blur-[2px] hover:backdrop-blur-sm bg-white/5 font-bold group">
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect 
                x="0" 
                y="0" 
                width="100%" 
                height="100%" 
                fill="none" 
                stroke="white" 
                strokeWidth="4" 
                strokeDasharray="10, 10" 
                className="svg-trail"
              />
            </svg>
            <span className="relative z-10">Shop the Drop</span>
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
