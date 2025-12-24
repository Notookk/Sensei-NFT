import { useEffect } from "react";
import { SakuraParticles } from "../components/SakuraParticles";
import heroImage from "@assets/samurai_1766554648375.jpeg";
import { motion } from "framer-motion";

export default function Landing() {
  useEffect(() => {
    document.title = "DIGITAL KENSEI | Cyberpunk NFT";
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#0b0b0d] text-[#f5f5f5] overflow-hidden selection:bg-[#e10600] selection:text-white font-sans">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(225,6,0,0.05),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
      
      {/* Sakura Particles */}
      <SakuraParticles />

      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-8 md:px-12">
        <div className="flex items-center gap-2">
          <div className="text-white font-display font-bold text-xl tracking-wider flex items-center gap-1">
            <span className="text-[#e10600] text-2xl">✤</span> NEXON
          </div>
        </div>

        <div className="flex items-center gap-8">
          <button className="hidden md:block group relative px-6 py-2 bg-white text-black font-sans font-semibold text-xs rounded-full hover:bg-[#e10600] hover:text-white transition-all duration-300 ease-out shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(225,6,0,0.6)] tracking-wide cursor-pointer">
            EXPLORE COLLECTION
          </button>
          <button className="text-xs font-sans font-semibold tracking-widest text-white/80 hover:text-white transition-colors cursor-pointer">
            MENU <span className="ml-1 text-[10px]">••</span>
          </button>
        </div>
      </nav>

      {/* Main Content Grid */}
      <main className="relative z-20 grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        
        {/* Left Typography Section */}
        <div className="col-span-1 lg:col-span-5 flex flex-col justify-center px-8 md:px-16 pt-24 lg:pt-0 relative">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-30"
          >
            <div className="flex flex-col">
              <h1 className="font-display font-black leading-[0.85] tracking-tighter select-none">
                <span className="block text-white text-[15vw] lg:text-[9rem] xl:text-[11rem]">DIGI</span>
                <span className="block text-white text-[15vw] lg:text-[9rem] xl:text-[11rem] relative">
                  TAL
                  <span className="absolute -top-4 -right-8 opacity-20 text-white font-jp text-4xl rotate-12 hidden lg:block">未来</span>
                </span>
              </h1>
              
              <div className="mt-2 lg:mt-4 relative">
                <h1 className="font-bebas font-normal leading-[0.85] tracking-normal text-[#e10600] text-glow select-none">
                  <span className="block text-[18vw] lg:text-[12rem] xl:text-[14rem]">KEN</span>
                  <span className="block text-[18vw] lg:text-[12rem] xl:text-[14rem]">SEI</span>
                </h1>
                
                {/* Vertical Text Decoration */}
                <div className="absolute top-0 right-0 lg:-right-12 h-full flex flex-col justify-between py-4 pointer-events-none">
                  <div className="w-8 h-24 border border-white/20 rounded-sm flex items-center justify-center overflow-hidden bg-black/20 backdrop-blur-sm">
                    <div className="w-full h-[120%] bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(255,255,255,0.1)_2px,rgba(255,255,255,0.1)_4px)] animate-slide-bg" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-4">
               <div className="h-2 w-2 rounded-full bg-[#e10600] animate-pulse" />
               <span className="text-white/60 font-sans text-sm tracking-widest uppercase">Unique NFT Collection</span>
            </div>
          </motion.div>
          
          {/* Small decorative text */}
          <div className="absolute top-[30%] left-8 text-[10px] text-white/40 font-sans rotate-90 origin-left hidden lg:block tracking-[0.3em]">
            CYBER ERA • SAMURAI WAY
          </div>
        </div>

        {/* Right Image Section */}
        <div className="col-span-1 lg:col-span-7 relative h-[60vh] lg:h-screen w-full flex items-end lg:items-center justify-center overflow-visible">
          
          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 lg:-left-[10%] w-full lg:w-[120%] h-full z-10"
          >
             {/* Gradient Mask for smooth blending */}
             <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#0b0b0d] via-transparent to-transparent z-20 pointer-events-none" />
             <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d]/50 via-transparent to-[#0b0b0d] z-20 pointer-events-none" />
             
             <img 
              src={heroImage} 
              alt="Cyberpunk Samurai" 
              className="w-full h-full object-cover object-top lg:object-center select-none"
             />
          </motion.div>

          {/* Floating Japanese Text */}
          <div className="absolute top-24 right-8 lg:top-32 lg:right-24 z-20 mix-blend-overlay opacity-80 pointer-events-none">
            <h2 className="font-jp font-bold text-white text-6xl lg:text-8xl tracking-widest vertical-rl lg:horizontal-tb">
              サムライ
            </h2>
          </div>

          {/* Glass Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-8 right-8 lg:bottom-16 lg:right-16 z-30 w-[85%] lg:w-80 glass-card p-6 rounded-2xl group hover:-translate-y-2 transition-transform duration-500 cursor-default"
          >
            <div className="flex justify-between items-start mb-8">
              <span className="text-3xl font-bold text-white font-display">⌘</span>
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-white/20 to-transparent border border-white/10" />
            </div>
            
            <h3 className="text-white font-sans font-medium text-lg mb-2">Exclusivity</h3>
            <p className="text-white/50 font-sans text-xs leading-relaxed">
              Only 500 warriors. Not one more. Each digital soul is unique and will never be created again.
            </p>
            
            {/* Card glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#e10600]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>

        </div>
      </main>
    </div>
  );
}
