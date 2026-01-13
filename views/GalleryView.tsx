import React, { useState } from 'react';
import { Memory } from '../types';

const highlights = [
  { id: '1', title: "Summer '23", img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxhPtvRQreB6e5rMPf-EmBXWcBJ0LHudio9e-13pL1Q8RXryJA_CH7uavxBH7lrDSjASTTH3mg0JCzI2ZWpDKr55FNkhnfTpE3bVKB-PStrLPaqk4LuV7VwANLDYz4fuq7wmseFMIoBalOwoPQGb5RiWJ_IjFP05zZrG4eZvPTcZSc9xmJaRpKp9qxaSJl1Y9QlpDo7EB3OH9tk6ksLZsMsZfElZqeujkP3fn0F_e4KV5FfLBADmoKW2P7drpOLjUZibJoCOpgGTFI' },
  { id: '2', title: "Oct 12", img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtL7TT_g94E9ihc10TWl1M2sE22O0jWSZ10kMxhZCf-33NU1L5usogUzQaQX5U4OvGADkyze7gMeNDie3b-noqlr5e6hvcLRaS1AXqoXOHqfWjkk66NXveICt8_AGtCCNmq9NmksUrYoslSF3Fl2O59W_lv8PtrwlALwAkoPlbkZID9aiebROgrYYqjIYIVsrMvJHhbizbmwmUJQuq9VeUSoZXniQW_tn7LOMuC0Vc6Osxaow397EbYW32y9izTWi6Wx0scmg98YiB' },
  { id: '3', title: "First Date", img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuh7RdiI2iJFM7vifLz3nVEZox5Svn2lDkqDzTJ5ifwP_nUFbeZ4dhPEkMebQQvkAOSeFQQiQBA_MBD_r80rv3Cxpk_nmlHY0ieD4s5yCeZS2A_JPwAvinIoAZ0N81EKYBQzeVhxH08J67ynjhbD15eQzBvA0ZI7cy-kfcTr6UluuCKH339cHCcxruRyTrB2EsDwW9HbnVahLngjwhNLRU4o0DduuW5_TAOcvMIIRBIwIOjz8kaWbVxNjrgdVTQRPGprKdBNzOoFyK' },
  { id: '4', title: "The Gift", img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeu_PBzg7E-CkOAdt-qKS6BLGJb4xdytq_aZ65ecpUUOT242Yd8S1JHZ2FDboaQDDkzyC4A-Nq7tDgRe-AHiue5lU8985WgiMzZ4k1EoZDF9V-04xLkwD1u-bH-ojGyXNdDPKPAH6sNdxXUpjV_uxruIiowgpBDAsCK9tE4O-gOuVxBv4i970seP6DZz1xXcZu550aZOlEaXySe9Mn6rEtVE_sgOaVpEfgVf79IEqIfkyzeDjvk3ndURLku5fEvbWCt-yG80MCwwdE' },
];

const memories: Memory[] = [
  { id: 'm1', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDU9a8_WolnkYZsPpIritmJAWl50rC2h5wyBcC1EhSLmaVNbaifIci2Cspa2hZfHoGl0oCm-1MZg7Jn1vPcqUeAAqJXQvHxGLfi56WWyFqlCqtDAC15Ofr92LZlIw5uTHBgNPLwV8YAPJqqTEhymLRPdN6KhRh6LN2l6jwMw5i4k1ok3bzz43sD7XHSjDrGwjNiRxg_7sA5OytJy-nK5NMGkHYZObAfgqkoK1dhFynuBdph8bD4Tzu6FZ7gJfPbYHLNkisG1DEjWUTw', caption: 'The day we met...', date: 'JAN 15, 2023', rotation: 'rotate-[-2deg] hover:rotate-0', isSticker: true, stickerIcon: 'favorite', stickerColor: 'text-primary' },
  { id: 'm2', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbAsz78xd8NyC59PJ1hwg3jHdKPwLLCJoZKzoaZ1KO5c86DeTchaAs59DJUS1jnMHeLi7zlqoQXcki1ms_KDhy-PzRq8gxtpuw-Pqc5BiuP-J2rN9-MPG19IwyB6jc2DxhYL3ir76grVTLybNzGH3s3oQwZOXwGYTac-9neGuzNoS5DOuIdSbPFdT6XB91soe6hYH2Q4oFWWl0cJ0S08Ft4AYOLG2C7WdB2olNnsVrvCzDOHq4U4jSrMUOjcXbWPsESVFAv_Gy81AG', caption: 'Best pizza ever! 🍕', date: 'FEB 14, 2023', rotation: 'rotate-[3deg] hover:rotate-0' },
  { id: 'm3', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRLUGAcCJh9fy-gyo_7N4rqUp-xcgEEHXJEddAoff7i2TzQwEoxo4m0XUAvUJVCbeSa_X8aGHc3N-Xcc383exttA9GhaLPt3sY0htY9f0Ga3GnCJcqXKzBA_JksNjcebguJCJHcjdSE1b96wpy8q1tfRrA9AQnWYfMABONl-M5Lp94xM325Z54aYvj9P-nbqBi1nUuF1z5Qu4E_-7yb_w3gMeSre9bLU9QdaTCvnx7FMnI5Pizp7tyOiatBx4QTisnOqrD7U6zM-1W', caption: 'Movie night snack', date: 'APR 05, 2023', rotation: 'rotate-[2deg] hover:rotate-0', isSticker: true, stickerIcon: 'auto_awesome', stickerColor: 'text-primary', stickerPos: '-top-3 -left-3' },
  { id: 'm4', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBEIF_9FnucVhsoRGBTkxGD5MRCHFQj0Sue6gqyhll_fEyZ3wMvMzBlICoUVknMIJKAfimJT_iK-ruRWUA9a0ps0hWGMQMY2azZrQWqpmmhMp4JHiamOxPlfrwOGmf0zqQQAkI7JPyjEbT0X9fXWETA7G71_rQSNtia4tOKh5Uc0dpkmW8mjLh5ZX3v8wx0sgnwPu3aTYmNZpbAblx6W3pXcsdfwaM8omuLSUvXopqUR5WClzugvdcGHkBUFSM74oSkQsxBJzsTWJU', caption: 'Rainy hike vibes', date: 'MAR 22, 2023', rotation: 'rotate-[-1deg] hover:rotate-0', isSticker: true, stickerIcon: 'star', stickerColor: 'text-yellow-400', stickerPos: 'bottom-10 -left-3' },
  { id: 'm5', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv7YCsgDpx0cW45OFO75c2bCSEWVxhMBAoya9YAztGlDySHjcvoz8zwkJWQSNhj-pbqxN7PADmmLWQ8M0UcytqLNn2s1DbNWT6SE48po6bxjYFhNoUyDKvHEhunOAYFq6LZUOzBPHg9SxMVcJQLNNiEdj_XZ1zAIqGRr6E3js1Rn80rYNslKRYB3fEeVDfBE_rNySG18wkow_cYHlZ57yOpwup6gjvdZpYh0auopdjBXjj7wrYrZkZl8rS-oqRYiFfCzbe1ujepUEM', caption: 'Summer state of mind', date: 'JUL 18, 2023', rotation: 'rotate-[-3deg] hover:rotate-0' },
  { id: 'm6', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2UakD6mh9KOKV4e7ju6R3Wr2T93XxhlN53QPE6cWGSY5iebHp_UTEC_dgNGiLt8HvTZIZjfxVyIkDjMrtvx8Qbow1pdGLn4wSM-McmbRsFNtEGb6qGqnHNdkjTUq8ez0o4fB9QMFVw_q9FTHxwTA7588N0MUy5_9V7czcmNijvHsTMeVzI5mcNtiMpcCGVlFOnffIbQlak9K6f2-q-BjdN-cXeDiC1mYQLiqaBAqUFaaJb2tJohsvfE9_dE2C8ouCgUwMcUQ62zi2', caption: 'Golden Hour ✨', date: 'AUG 30, 2023', rotation: 'rotate-[1deg] hover:rotate-0' },
];

const GalleryView: React.FC = () => {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  return (
    <div className="pt-24 pb-32 px-4 md:px-12 doodle-bg min-h-screen animate-fade-in max-w-7xl mx-auto">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-primary/10 md:pl-28">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-[#3d1d29] shadow-sm">
          <span className="material-symbols-outlined text-primary">arrow_back_ios_new</span>
        </button>
        <h1 className="text-xl font-extrabold tracking-tight text-primary">Our Memories</h1>
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
          <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
        </button>
      </div>

      {/* Highlights Carousel */}
      <div className="mb-12 mt-2">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#8a6072] dark:text-primary/70 mb-4 px-2">Highlights</h2>
        <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide px-2">
          {highlights.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-2 min-w-[80px]">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full p-1 border-2 border-primary cursor-pointer hover:scale-105 transition-transform">
                <div 
                  className="w-full h-full rounded-full bg-cover bg-center" 
                  style={{ backgroundImage: `url('${item.img}')` }}
                ></div>
              </div>
              <span className="text-xs font-medium">{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-8 px-2 dark:text-white">Tap to see our story ✨</h3>

      {/* Masonry Grid - Responsive Columns */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
        {memories.map((memory) => (
          <div 
            key={memory.id} 
            className={`relative break-inside-avoid mb-6 cursor-pointer hover:z-10 transition-transform hover:scale-105 duration-300 ${memory.rotation}`}
            onClick={() => setSelectedMemory(memory)}
          >
            <div className="bg-white dark:bg-[#2d161f] p-3 pb-8 rounded-lg polaroid-shadow border border-[#eee] dark:border-[#3d1d29]">
              <div className="w-full bg-gray-200 rounded-sm mb-3 overflow-hidden">
                <img src={memory.image} alt={memory.caption} className="w-full h-auto object-cover block" loading="lazy" />
              </div>
              <p className="font-handwritten text-xl leading-none text-[#333] dark:text-white">{memory.caption}</p>
              <p className="text-[10px] text-[#8a6072] mt-1 font-bold uppercase">{memory.date}</p>
            </div>
            
            {/* Stickers */}
            {memory.isSticker && (
              <div className={`absolute ${memory.stickerPos || '-top-2 -right-2'} w-10 h-10 ${memory.stickerColor} drop-shadow-sm z-20`}>
                <span className="material-symbols-outlined !text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {memory.stickerIcon}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-24 right-6 md:bottom-10 md:right-10 z-40">
        <button className="w-16 h-16 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-transform">
          <span className="material-symbols-outlined !text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>celebration</span>
        </button>
      </div>

      {/* Detail Modal */}
      {selectedMemory && (
        <div className="fixed inset-0 z-[100] bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm flex items-center justify-center animate-fade-in p-4">
          <div className="w-full h-full absolute inset-0" onClick={() => setSelectedMemory(null)}></div>
          
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#2d161f] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedMemory(null)}
              className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center text-white bg-black/20 rounded-full backdrop-blur-md hover:bg-black/40 transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            {/* Image Side */}
            <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-4">
                 <img src={selectedMemory.image} className="max-w-full max-h-[50vh] md:max-h-full rounded shadow-lg object-contain" alt="Full size" />
            </div>
            
            {/* Content Side */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-white dark:bg-[#2d161f]">
              <div className="mb-2">
                <span className="text-xs font-bold tracking-widest text-[#8a6072] uppercase">{selectedMemory.date}</span>
              </div>
              <h2 className="text-4xl font-handwritten text-primary mb-6">{selectedMemory.caption}</h2>
              <p className="text-lg text-[#555] dark:text-[#ccc] leading-relaxed font-serif mb-8">
                 Remember when we captured this moment? The lighting was perfect, and the vibe was immaculate. 
                 It's still one of my favorite memories of us. 
              </p>
              
              <div className="flex gap-4">
                <button className="px-8 py-3 rounded-full bg-primary text-white font-bold flex items-center gap-2 shadow-lg active:scale-95 transition-transform hover:bg-primary/90">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                    Love This
                </button>
                <button className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary/5 transition-colors">
                    <span className="material-symbols-outlined">share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryView;