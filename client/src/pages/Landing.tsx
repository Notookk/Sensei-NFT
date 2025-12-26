import { useEffect } from "react";
import { motion } from "framer-motion";
import heroImage from "@assets/samurai.jpeg";
import AudioPlayer from "@/components/AudioPlayer";

export default function Landing() {
  useEffect(() => {
    document.title = "AriXbots | Sensei NFT";
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-[#f5f5f5] overflow-hidden selection:bg-[#e10600] selection:text-white font-sans">

      {/* --- Advanced Atmospheric Effects --- */}

      {/* Scanline Overlay */}
      <div className="scanlines pointer-events-none" />

      {/* Vignette - heavily darkened edges to focus center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_60%,rgba(0,0,0,0.95)_100%)] pointer-events-none z-20" />

      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12] pointer-events-none mix-blend-overlay z-30" />

      {/* Fog Overlay */}
      <div className="fog-wrapper">
        <div className="fog-layer"></div>
        <div className="fog-layer-2"></div>
      </div>

      {/* Red ambient glow from bottom right */}
      <div className="absolute bottom-0 right-0 w-[80vw] h-[80vh] bg-[radial-gradient(circle_at_bottom_right,rgba(225,6,0,0.15),transparent_70%)] pointer-events-none z-10 blur-[100px]" />

      {/* Falling Snowflakes */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 25, overflow: 'hidden' }}>
        <span className="snowflake flake-1" style={{ left: '5%', fontSize: '12px' }}>❄</span>
        <span className="snowflake-red flake-2" style={{ left: '15%', fontSize: '10px' }}>✦</span>
        <span className="snowflake flake-3" style={{ left: '25%', fontSize: '14px' }}>❅</span>
        <span className="snowflake-red flake-4" style={{ left: '35%', fontSize: '8px' }}>✧</span>
        <span className="snowflake flake-5" style={{ left: '45%', fontSize: '11px' }}>❆</span>
        <span className="snowflake-red flake-6" style={{ left: '55%', fontSize: '9px' }}>✦</span>
        <span className="snowflake flake-7" style={{ left: '65%', fontSize: '13px' }}>❄</span>
        <span className="snowflake-red flake-8" style={{ left: '75%', fontSize: '10px' }}>✧</span>
        <span className="snowflake flake-9" style={{ left: '85%', fontSize: '12px' }}>❅</span>
        <span className="snowflake-red flake-10" style={{ left: '95%', fontSize: '8px' }}>✦</span>
        <span className="snowflake flake-11" style={{ left: '10%', fontSize: '9px' }}>❆</span>
        <span className="snowflake-red flake-12" style={{ left: '50%', fontSize: '11px' }}>✧</span>
      </div>

      {/* --- Navigation --- */}
      <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-6 md:px-12 mix-blend-difference">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <span className="text-[#e10600] text-3xl font-display group-hover:animate-pulse">✤</span>
            <div className="absolute inset-0 bg-[#e10600] blur-lg opacity-40 group-hover:opacity-80 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-display font-bold text-xl tracking-[0.2em] leading-none">AriXbots</span>
            <span className="text-white/40 font-sans text-[0.6rem] tracking-[0.4em] uppercase">Cybernetics</span>
          </div>
        </div>

        <div className="flex items-center gap-6 md:gap-10">
          <button className="hidden md:flex items-center gap-2 group relative px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-sans font-semibold text-xs rounded-full hover:bg-[#e10600] hover:border-[#e10600] transition-all duration-300 ease-out shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(225,6,0,0.6)] tracking-widest uppercase overflow-hidden">
            <span className="relative z-10">Explore Collection</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
          </button>

          {/* Hover Menu */}
          <div className="relative group">
            <button className="flex items-center gap-3 px-4 py-3 bg-black/40 backdrop-blur-xl border border-white/20 rounded-xl hover:bg-[#e10600]/30 hover:border-[#e10600] transition-all duration-300 cursor-pointer shadow-lg">
              {/* Hamburger Icon - 3 Lines */}
              <div className="flex flex-col justify-center gap-[5px] w-5 h-5">
                <span className="block w-5 h-[3px] bg-white rounded-full group-hover:bg-[#e10600] group-hover:w-4 transition-all" />
                <span className="block w-4 h-[3px] bg-white rounded-full group-hover:bg-[#e10600] group-hover:w-5 transition-all" />
                <span className="block w-3 h-[3px] bg-white rounded-full group-hover:bg-[#e10600] group-hover:w-4 transition-all" />
              </div>
              <span className="text-sm font-sans font-bold tracking-widest text-white group-hover:text-[#e10600] transition-colors">MENU</span>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute top-full right-0 mt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[100]">
              <div className="menu-glass p-1 border-l-2 border-[#e10600]">
                {/* Menu Header */}
                <div className="px-4 py-3 border-b border-white/20 bg-white/5 relative z-10">
                  <span className="text-[11px] text-[#e10600] font-mono tracking-widest font-bold drop-shadow-[0_0_10px_rgba(225,6,0,0.8)]">NAVIGATION</span>
                </div>

                {/* Menu Items */}
                <div className="py-2">
                  {[
                    { label: 'HOME', jp: 'ホーム', icon: '◈', href: 'https://t.me/x_support_chat' },
                    { label: 'DEV', jp: '開発者', icon: '◆ ', href: 'https://t.me/xazoc' },
                    { label: 'TEAM', jp: 'チーム', icon: '◈', href: 'https://t.me/your_support_channel' },
                    { label: 'COLLECTION', jp: 'コレクション', icon: '◇', href: 'https://morning.is-a.dev' },
                    // { label: 'MINT', jp: 'ミント', icon: '◇', href: '#mint' },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/item flex items-center justify-between px-4 py-3.5 hover:bg-black/50 transition-all duration-200 border-l-2 border-transparent hover:border-[#e10600] relative z-10"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[#e10600] text-sm opacity-80 group-hover/item:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(225,6,0,0.6)]">
                          {item.icon}
                        </span>

                        <div className="flex flex-col">
                          <span className="text-white text-sm font-extrabold tracking-widest group-hover/item:text-[#e10600] transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                            {item.label}
                          </span>
                          <span className="text-white/50 text-[11px] font-jp drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                            {item.jp}
                          </span>
                        </div>
                      </div>

                      <span className="text-white/50 text-base font-bold group-hover/item:text-[#e10600] group-hover/item:translate-x-1 transition-all drop-shadow-[0_0_4px_rgba(225,6,0,0.4)]">
                        →
                      </span>
                    </a>
                  ))}
                </div>


                {/* Menu Footer */}
                <div className="px-4 py-3 border-t border-white/20 flex items-center justify-between bg-white/5 relative z-10">
                  <span className="text-[11px] text-white/70 font-mono font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">SYS.ONLINE</span>
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#e10600] animate-pulse" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                  </div>
                </div>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#e10600]/50" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#e10600]/50" />
            </div>
          </div>
        </div>
      </nav>

      {/* --- Main Content Grid --- */}
      <main className="relative z-20 w-full min-h-screen flex items-center">

        {/* Background Hero Image - Positioned to match the composition */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src={heroImage}
            alt="Sensei Samurai"
            className="w-full h-full object-cover object-[70%_center] md:object-center lg:scale-105"
          />
          {/* Mobile Optimized Gradients - Less opacity on mobile for clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-[#050505]/20 to-transparent z-10 md:from-[#050505] md:via-[#050505]/40 lg:via-[#050505]/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/30 via-transparent to-[#050505]/90 z-10 lg:hidden" />
        </div>

        {/* Content Container */}
        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 h-full relative z-20">

          {/* Left Typography Section - MASSIVE & TIGHT */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-center pt-20 lg:pt-0">

            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "circOut" }}
              className="relative"
            >
              {/* Floating Tech Deco */}
              <div className="absolute -top-12 left-0 flex items-center gap-4 opacity-50">
                <div className="w-2 h-2 bg-[#e10600]" />
                <div className="h-[1px] w-20 bg-white/30" />
                <span className="font-mono text-[10px] text-white/60 tracking-widest">SYS.844 // CONNECTED</span>
              </div>

              {/* Main Typography Stack */}
              <div className="flex flex-col mix-blend-normal">
                {/* ARI */}
                <h1 className="font-display font-black leading-[0.9] tracking-tighter select-none relative">
                  <span className="block text-white text-[10vw] lg:text-[4rem] xl:text-[5rem] text-glow-white glitch-wrapper" data-text="ARI">ARI</span>
                </h1>

                {/* X - Massive Emphasis */}
                <h1 className="font-display font-black leading-[0.85] tracking-tighter select-none relative -mt-2 lg:-mt-4">
                  <span className="block text-white text-[25vw] lg:text-[14rem] xl:text-[16rem] text-glow-white glitch-wrapper text-[#e10600]" data-text="X">X</span>

                  {/* Decorative Kanji Element next to X - moved for better mobile fit */}
                  <div className="absolute top-4 right-4 lg:right-auto lg:left-[80%] lg:top-1/4 hidden md:flex flex-col gap-2">
                    <div className="w-12 h-12 border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                      <span className="font-jp text-white/80 text-xl">壱</span>
                    </div>
                    <div className="w-12 h-12 border border-[#e10600]/40 flex items-center justify-center bg-[#e10600]/10 backdrop-blur-sm animate-pulse">
                      <span className="font-jp text-[#e10600] text-xl">侍</span>
                    </div>
                  </div>
                </h1>

                {/* BOTS - Red & Glowing */}
                <div className="relative mt-2 lg:-mt-6 ml-1 lg:ml-2">
                  <h1 className="font-bebas font-normal leading-[0.8] tracking-tight text-[#e10600] select-none mix-blend-screen">
                    <span className="block text-[15vw] lg:text-[10rem] xl:text-[12rem] text-glow glitch-wrapper" data-text="BOTS">BOTS</span>
                  </h1>
                </div>
              </div>

              {/* Bottom Info Line */}
              <div className="glass-limited-drop mt-16 flex items-center gap-6 pl-6 py-4 pr-8 w-fit rounded-r-xl">
                <div className="flex flex-col">
                  <span className="text-[#e10600] font-display font-bold text-sm tracking-widest">CYBERNETICS DROP</span>
                  <span className="text-white/70 font-sans text-xs tracking-wider">100 UNITS • ULTIMATE TECH</span>
                </div>
              </div>


              {/* Mobile CTA Button - Visible only on small screens */}
              <button className="mt-8 flex md:hidden w-full items-center justify-center gap-2 group relative px-8 py-4 bg-[#e10600] text-white font-sans font-bold text-sm rounded-full tracking-widest uppercase shadow-[0_0_20px_rgba(225,6,0,0.4)]">
                EXPLORE COLLECTION
              </button>

            </motion.div>
          </div>

          {/* Right Section - Empty for visual balance of the background image, but holds the floating card */}
          <div className="col-span-1 lg:col-span-6 relative pointer-events-none hidden lg:block">
            {/* Huge Japanese watermark in background */}
            <div className="absolute top-[10%] right-[-10%] z-0 opacity-30 mix-blend-overlay pointer-events-none">
              <span className="font-jp font-black text-[20rem] text-white leading-none vertical-rl">無双</span>
            </div>

            {/* Interactive Glass Card - Positioned absolutely */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
              className="absolute bottom-12 right-0 lg:right-12 z-40 w-full max-w-sm pointer-events-auto"
            >
              <div className="glass-card-blur p-8 rounded-none border-l-4 border-l-[#e10600] relative overflow-hidden group">
                {/* Scanning light effect inside card */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#e10600]/50 shadow-[0_0_10px_#e10600] animate-[scan_3s_linear_infinite]" />

                <div className="flex justify-between items-start mb-6">
                  <div className="flex flex-col">
                    <span className="text-xs text-[#e10600] font-mono tracking-widest mb-1">WARNING</span>
                    <h3 className="text-white font-display font-bold text-2xl tracking-wide">Exclusivity</h3>
                  </div>
                  <span className="text-4xl text-white/20 font-display font-black">01</span>
                </div>

                <p className="text-white/60 font-sans text-sm leading-relaxed mb-6">
                  Only 100 digital souls is present. Each tech is unique, immutable, and eternal on the blockchain.
                </p>

                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="font-mono text-xs text-[#e10600]">
                    STATUS: DEVINE
                  </span>

                  <a
                    href="https://t.me/your_support_channel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white uppercase tracking-widest hover:text-[#e10600] transition-colors flex items-center gap-2"
                  >
                    EXPLORE TECH <span className="text-lg">→</span>
                  </a>
                </div>


                {/* Tech corners */}
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/30" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/30" />
              </div>
            </motion.div>
          </div>

        </div>
      </main>

      {/* Floating Glassmorphism UI Cards */}

      <div className="fixed top-1/2 left-8 w-[1px] h-32 bg-gradient-to-b from-transparent via-white/30 to-transparent hidden lg:block z-40" />
      <div className="fixed top-1/2 right-8 w-[1px] h-32 bg-gradient-to-b from-transparent via-[#e10600]/50 to-transparent hidden lg:block z-40" />

      {/* Audio Player */}
      <AudioPlayer />

    </div>
  );
}
