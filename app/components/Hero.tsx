import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
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

      {/* <nav className="absolute top-0 w-full p-6 md:px-12 flex justify-between items-center z-20">
        <h1 className="text-2xl font-bold tracking-widest text-white">TEE</h1>
        <div className="hidden md:flex space-x-8 text-sm tracking-widest text-gray-300">
          <a href="#" className="hover:text-white transition-colors">SHOP</a>
          <a href="#" className="hover:text-white transition-colors">COLLECTIONS</a>
          <a href="#" className="hover:text-white transition-colors">ABOUT</a>
        </div>
        <button className="md:hidden text-white">MENU</button>
      </nav> */}

      <div className="relative z-10 text-center space-y-6 flex flex-col items-center mt-12">
        <h3 className="text-2xl md:text-4xl font-white tracking-tighter text-white drop-shadow-2xl">SEASON 1</h3>
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl">
          MINIMAL
        </h2>
        <p className="text-base md:text-lg text-gray-300 tracking-wider max-w-md mx-auto px-4 font-light">
          Minimalist design. Maximum impact. Redefining everyday essentials.
        </p>
        <button className="px-8 py-3 mt-8 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-widest uppercase backdrop-blur-sm bg-white/5">
          Shop the Drop
        </button>
      </div>
    </section>
  );
}
