import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bgMusic from "@assets/frozen.webm";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.25);
  const [isExpanded, setIsExpanded] = useState(false);
  const [needsTap, setNeedsTap] = useState(true);
  const [userStopped, setUserStopped] = useState(false); // Track if user manually stopped

  const startAudio = () => {
    const audio = audioRef.current;
    if (!audio || isPlaying || userStopped) return; // Don't auto-start if user stopped

    audio.volume = volume;
    audio.muted = false;
    audio.currentTime = 0; // Always start from beginning
    
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        setIsPlaying(true);
        setNeedsTap(false);
      }).catch(() => {
        setNeedsTap(true);
      });
    }
  };

  // Setup audio and global tap listener
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;

    // Try to play immediately
    startAudio();

    // Global touch/click handler for mobile - only if user hasn't stopped
    const handleGlobalInteraction = () => {
      if (!userStopped) {
        startAudio();
      }
    };

    document.body.addEventListener('touchstart', handleGlobalInteraction, { passive: true });
    document.body.addEventListener('touchend', handleGlobalInteraction, { passive: true });
    document.body.addEventListener('click', handleGlobalInteraction);
    window.addEventListener('scroll', handleGlobalInteraction, { passive: true });

    return () => {
      document.body.removeEventListener('touchstart', handleGlobalInteraction);
      document.body.removeEventListener('touchend', handleGlobalInteraction);
      document.body.removeEventListener('click', handleGlobalInteraction);
      window.removeEventListener('scroll', handleGlobalInteraction);
    };
  }, [isPlaying, userStopped]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Handle click outside to close on mobile
  useEffect(() => {
    const handleClickOutside = (e: TouchEvent | MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('touchstart', handleClickOutside);
    return () => document.removeEventListener('touchstart', handleClickOutside);
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      setUserStopped(true); // User manually stopped
    } else {
      setUserStopped(false); // User wants to play again
      audio.play().then(() => {
        setIsPlaying(true);
        setNeedsTap(false);
      });
    }
  };

  const handlePlayerTap = () => {
    if (needsTap) {
      startAudio();
    }
  };

  const toggleMute = () => setIsMuted(!isMuted);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0 && isMuted) setIsMuted(false);
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        src={bgMusic} 
        loop 
        preload="auto"
        playsInline
      />
      
      <motion.div 
        ref={containerRef}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="fixed bottom-5 left-5 z-50"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        onClick={handlePlayerTap}
        onTouchEnd={handlePlayerTap}
      >
        <div className={`audio-player-slim flex items-center gap-1.5 px-2 py-1.5 rounded-full relative ${needsTap && !isPlaying ? 'animate-pulse ring-2 ring-[#e10600]/50' : ''}`}>
          {/* Tap to play indicator */}
          {needsTap && !isPlaying && (
            <span className="text-[8px] text-[#e10600] font-mono uppercase tracking-wider mr-1">Tap</span>
          )}
          
          {/* Play/Pause */}
          <button onClick={togglePlay} className="w-6 h-6 flex items-center justify-center rounded-full bg-[#e10600]/20 hover:bg-[#e10600]/40 transition-all flex-shrink-0">
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.svg key="pause" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="w-2.5 h-2.5 text-[#e10600]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </motion.svg>
              ) : (
                <motion.svg key="play" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="w-2.5 h-2.5 text-[#e10600] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
          
          {/* Sound Bars */}
          {isPlaying && (
            <div className="flex items-end gap-[1px] h-3 flex-shrink-0">
              <motion.div animate={{ height: ["30%", "100%", "50%"] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-[2px] bg-[#e10600] rounded-full" />
              <motion.div animate={{ height: ["60%", "30%", "100%"] }} transition={{ repeat: Infinity, duration: 0.5, delay: 0.1 }} className="w-[2px] bg-[#e10600] rounded-full" />
              <motion.div animate={{ height: ["100%", "50%", "30%"] }} transition={{ repeat: Infinity, duration: 0.7, delay: 0.2 }} className="w-[2px] bg-[#e10600] rounded-full" />
            </div>
          )}
          
          {/* Mute - tap to expand on mobile */}
          <button 
            onClick={toggleMute} 
            onTouchStart={(e) => { e.stopPropagation(); toggleExpanded(); }}
            className="w-5 h-5 flex items-center justify-center text-white/50 hover:text-[#e10600] transition-colors flex-shrink-0"
          >
            {isMuted || volume === 0 ? (
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
              </svg>
            ) : (
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
              </svg>
            )}
          </button>
          
          {/* Volume Slider */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: "auto" }} exit={{ opacity: 0, width: 0 }} className="overflow-hidden flex-shrink-0">
                <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} className="volume-slider w-10 h-0.5 appearance-none bg-white/20 rounded-full cursor-pointer" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}
