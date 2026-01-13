import React, { useState, useEffect, useRef } from 'react';

interface PreloaderViewProps {
  onUnlock: () => void;
}

const PreloaderView: React.FC<PreloaderViewProps> = ({ onUnlock }) => {
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isUnlocked, setIsUnlocked] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio('/pret.MP3');
  }, []);

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(14); // Target: 14th of the current month
    targetDate.setHours(0, 0, 0, 0); // 00:00:00
    
    // If today is already past the 14th, target next month (optional, but requested logic implies strict 14th)
    // Assuming the user means the *upcoming* 14th.
    // If today IS the 14th and it's past 00:00, it should be unlocked.
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setIsUnlocked(true);
        return { hours: 0, minutes: 0, seconds: 0 };
      }

      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24) + Math.floor(difference / (1000 * 60 * 60 * 24)) * 24; // Total hours
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return { hours, minutes, seconds };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Initial check
    const initialTime = calculateTimeLeft();
    setTimeLeft(initialTime);

    // Special verification logic:
    // If the date is already 14th or later, unlock immediately.
    const now = new Date();
    if (now.getDate() === 14 && now.getHours() >= 0 || now.getDate() > 14) {
         setIsUnlocked(true);
    }
    // Note: This logic assumes we are in the correct month. 
    // Given the context is a birthday on Jan 14, and current date is Jan 13.
    // It works for this spec.

    return () => clearInterval(timer);
  }, []);

  const handleUnlock = () => {
    if (audioRef.current) {
        audioRef.current.play().catch(e => console.error("Audio play error", e));
    }
    // Delay slightly to let audio start? No, instant is fine.
    onUnlock();
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 to-black z-0"></div>

      <div className="z-10 text-center p-8">
        {!isUnlocked ? (
          <div className="animate-pulse">
             <h2 className="text-xl md:text-3xl font-mono text-gray-400 mb-8 uppercase tracking-[0.2em]">Menghitung Mundur</h2>
             <div className="flex gap-4 md:gap-8 justify-center font-mono text-4xl md:text-7xl font-bold">
                <div className="flex flex-col items-center">
                    <span className="bg-gray-900 rounded-lg p-4 border border-gray-700 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                    <span className="text-sm md:text-lg text-gray-500 mt-4 uppercase">Jam</span>
                </div>
                <div className="flex flex-col items-center justify-start py-4">
                    <span className="animate-pulse">:</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="bg-gray-900 rounded-lg p-4 border border-gray-700 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                    <span className="text-sm md:text-lg text-gray-500 mt-4 uppercase">Menit</span>
                </div>
                <div className="flex flex-col items-center justify-start py-4">
                    <span className="animate-pulse">:</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="bg-gray-900 rounded-lg p-4 border border-gray-700 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                    <span className="text-sm md:text-lg text-gray-500 mt-4 uppercase">Detik</span>
                </div>
             </div>
             <p className="mt-12 text-sm text-gray-600">Mohon bersabar, waktu tidak bisa dipercepat...</p>
          </div>
        ) : (
          <div className="animate-bounce-in">
             <h1 className="text-3xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                Waktunya Tiba! 🎁
             </h1>
             <button 
                onClick={handleUnlock}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary font-display rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:bg-primary/80 hover:scale-105 active:scale-95 shadow-lg shadow-primary/30"
             >
                <span className="mr-2 material-symbols-outlined animate-spin-slow">lock_open</span>
                BUKA SEKARANG
                <div className="absolute inset-0 -z-10 rounded-full blur-lg opacity-40 bg-primary group-hover:opacity-100 transition duration-200"></div>
             </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreloaderView;
