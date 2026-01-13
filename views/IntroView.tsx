import React from 'react';
import { View } from '../types';

interface IntroViewProps {
  onStart: () => void;
}

const IntroView: React.FC<IntroViewProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-[#f3f0e9] relative overflow-hidden flex flex-col items-center justify-center py-8 px-6 font-display">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(#abced4 1px, transparent 0), linear-gradient(#eee 1px, transparent 1px)', 
             backgroundSize: '20px 20px, 100% 30px' 
           }}>
      </div>

      {/* Washi Tape Decorations */}
      <div className="absolute top-4 -right-4 md:right-10 w-32 h-10 bg-tape-yellow rotate-12 z-10 opacity-90 shadow-sm"></div>
      <div className="absolute top-10 -right-6 md:right-8 w-24 h-8 bg-primary/40 rotate-45 z-10 opacity-90 shadow-sm"></div>

      {/* Header */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-10 px-4 relative z-20 absolute top-8">
        <div className="rotate-[-5deg] font-handwritten text-2xl text-primary font-bold">
          Chapter 24 <span className="material-symbols-outlined align-middle text-lg">auto_awesome</span>
        </div>
        <div className="relative group cursor-pointer animate-pulse">
           <span className="material-symbols-outlined text-4xl text-primary drop-shadow-sm">card_giftcard</span>
        </div>
      </div>

      <main className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-12">
        {/* Photo Frame Blob */}
        <div className="relative w-full max-w-sm aspect-square flex items-center justify-center p-4 md:order-2">
          <div className="absolute inset-4 bg-white shadow-lg transform -rotate-3 border border-gray-100"></div>
          <div className="absolute inset-6 bg-pink-50 shadow-sm transform rotate-2 border border-pink-100"></div>
          
          <div className="relative w-72 h-72 border-4 border-[#333] shadow-xl overflow-hidden bg-white animate-blob-bounce">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2g6NLP_WsK4lydxKbXx6j6Um0E4JYYbNqGTMz3TleBA7BeXfJEaClYDDDgurWfN1MYKxzRQ1jZR6gPGHrcv6bi4DdFSxjXF7OJ1WHlMD2IalhLHDiXEWu-ZvDGIpJhsA0F_uRHCQnNflOwGGfw9g4mCGdrzmenLbstIXJrzwMuNtbV6HvYiooVGkygSBE6Z1CFC9ZN8btbGVX_zrJM11aAnojple9oMGm9c3pF7KMNe0r9oDbpVI_oHQSIlJauzTajxbOvAkULnZJ" 
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -top-4 -left-2 rotate-[-15deg] font-doodle text-primary text-4xl">♥</div>
          <div className="absolute top-2 right-4 bg-tape-pink px-4 py-1 -rotate-12 text-white font-handwritten text-sm shadow-sm">Our Favorite Day</div>
          <div className="absolute -bottom-2 -right-2 text-yellow-500 animate-float">
            <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          </div>
        </div>

        {/* Text */}
        <div className="text-center md:text-left md:order-1 flex flex-col items-center md:items-start">
            <div className="space-y-2">
                <h2 className="font-handwritten text-3xl md:text-4xl text-primary leading-none -mb-4 md:ml-2">happy birthday,</h2>
                <h1 className="font-serif text-6xl md:text-8xl tracking-tighter text-gray-900 italic">
                    Sarah<span className="text-primary font-display not-italic text-5xl md:text-7xl">!</span>
                </h1>
                <div className="relative inline-block mt-4">
                    <p className="font-doodle text-xl md:text-2xl text-gray-600 max-w-[280px] md:max-w-md">
                    The adventure of a lifetime is just one click away...
                    </p>
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-2 bg-primary/10 rounded-full md:left-0 md:translate-x-0 md:w-full"></div>
                </div>
            </div>

            {/* Action Button */}
            <div className="mt-16 flex justify-center md:justify-start w-full">
            <button 
                onClick={onStart}
                className="group relative flex items-center justify-center px-10 py-6 bg-primary text-white font-display text-xl tracking-wide shadow-[0_10px_0_0_#9d174d] hover:shadow-[0_5px_0_0_#9d174d] hover:translate-y-[5px] active:shadow-none active:translate-y-[10px] transition-all duration-150 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]"
            >
                <span className="absolute top-3 right-5 w-4 h-4 bg-white/20 rounded-full blur-[2px]"></span>
                <span className="flex items-center gap-3 font-bold">
                    EXPLORE SURPRISE
                    <span className="material-symbols-outlined transition-transform group-hover:rotate-12">map</span>
                </span>
            </button>
            </div>
        </div>
      </main>

      {/* Footer Decorations */}
      <footer className="mt-12 md:absolute md:bottom-8 md:right-8 w-full md:w-auto relative">
        <div className="flex flex-col items-center md:items-end space-y-4">
           <div className="bg-white p-2 pb-8 shadow-md rotate-[-3deg] border border-gray-100 max-w-[120px]">
             <div className="w-24 h-24 bg-gray-50 flex items-center justify-center text-primary/30">
               <span className="material-symbols-outlined text-4xl">favorite</span>
             </div>
           </div>
           <p className="font-handwritten text-2xl text-gray-500">
             With all my heart, <span className="text-primary font-bold">Alex</span>
           </p>
        </div>
      </footer>
    </div>
  );
};

export default IntroView;