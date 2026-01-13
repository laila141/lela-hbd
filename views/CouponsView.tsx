import React from 'react';
import { Coupon } from '../types';

const coupons: Coupon[] = [
  { 
    id: 'c1', 
    title: 'Free Dinner Date', 
    description: "Any restaurant of your choice. I'm paying!", 
    icon: 'restaurant', 
    colorClass: 'bg-pink-100 dark:bg-pink-900/40', 
    iconColorClass: 'text-primary',
    code: 'COUPON #001'
  },
  { 
    id: 'c2', 
    title: '30-Min Massage', 
    description: "Professional-grade relaxation at home.", 
    icon: 'spa', 
    colorClass: 'bg-purple-100 dark:bg-purple-900/40', 
    iconColorClass: 'text-purple-600 dark:text-purple-400',
    code: 'COUPON #002',
    tag: 'VIP ACCESS'
  },
  { 
    id: 'c3', 
    title: 'Movie Choice Pass', 
    description: "You pick the movie, I'll provide the snacks.", 
    icon: 'movie', 
    colorClass: 'bg-blue-100 dark:bg-blue-900/40', 
    iconColorClass: 'text-blue-600 dark:text-blue-400',
    code: 'COUPON #003',
    tag: 'LIMITED EDITION'
  },
  { 
    id: 'c4', 
    title: 'House Chore Skip', 
    description: "I'll do all the dishes and cleaning today.", 
    icon: 'mop', 
    colorClass: 'bg-orange-100 dark:bg-orange-900/40', 
    iconColorClass: 'text-orange-600 dark:text-orange-400',
    code: 'COUPON #004',
    tag: '24H ONLY'
  }
];

const CouponsView: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-24 md:pb-12 pt-0 md:pt-4 max-w-7xl mx-auto">
      {/* Top Nav */}
      <div className="sticky top-0 z-40 flex items-center bg-white/80 dark:bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-pink-100 dark:border-pink-900/30 md:bg-transparent md:static md:border-none md:p-8">
        <div className="text-primary flex size-12 shrink-0 items-center md:hidden">
            <span className="material-symbols-outlined text-3xl">chevron_left</span>
        </div>
        <h2 className="text-primary text-lg md:text-3xl font-extrabold leading-tight tracking-[-0.015em] flex-1 text-center md:text-left">Birthday Rewards 🎀</h2>
        <div className="flex w-12 items-center justify-end md:hidden">
            <button className="flex items-center justify-center rounded-full h-12 w-12 text-primary">
                <span className="material-symbols-outlined text-2xl">confirmation_number</span>
            </button>
        </div>
      </div>

      {/* Hero */}
      <div className="px-4 md:px-8 py-4">
        <div className="w-full bg-gradient-to-br from-pink-400 to-primary flex flex-col justify-end overflow-hidden rounded-xl min-h-[180px] md:min-h-[250px] p-6 md:p-10 relative shadow-lg group hover:shadow-xl transition-shadow">
            <div className="absolute top-0 right-0 p-4 opacity-20 transform group-hover:scale-110 transition-transform duration-700">
                <span className="material-symbols-outlined text-8xl md:text-9xl text-white">celebration</span>
            </div>
            <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-bold uppercase tracking-widest mb-2">Exclusive Pass</span>
                <h1 className="text-white text-3xl md:text-5xl font-black leading-tight">Your Personal <br/>Carnival Booth</h1>
            </div>
        </div>
      </div>

      <div className="px-4 md:px-8">
        <h2 className="text-[#181114] dark:text-white tracking-tight text-2xl font-extrabold leading-tight py-4">
            Redeem Your Gifts! 🎟️
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm -mt-3 mb-6">Tear a ticket and let the fun begin!</p>
      </div>

      {/* List / Grid */}
      <div className="px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coupons.map((coupon, idx) => (
            <div key={coupon.id} className={`relative group ${idx === 3 ? 'opacity-80' : ''} hover:-translate-y-1 transition-transform duration-300`}>
                <div className="flex bg-white dark:bg-[#2d1a22] rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-pink-50 dark:border-pink-900/20 ticket-cutout-left ticket-cutout-right h-full">
                    {/* Stub */}
                    <div className={`w-24 ${coupon.colorClass} flex flex-col items-center justify-center gap-2 p-2 border-r perforated-line`}>
                        <span className={`material-symbols-outlined ${coupon.iconColorClass} text-4xl`}>{coupon.icon}</span>
                        <span className={`text-[10px] font-bold ${coupon.iconColorClass} uppercase [writing-mode:vertical-rl] rotate-180 tracking-tighter opacity-60`}>
                            {coupon.code}
                        </span>
                    </div>
                    {/* Content */}
                    <div className="flex-1 p-5 flex flex-col justify-between min-h-[140px]">
                        <div>
                            <h3 className="text-lg font-black text-[#181114] dark:text-white uppercase leading-tight">{coupon.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{coupon.description}</p>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            {coupon.tag ? (
                                <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 ${coupon.iconColorClass}`}>
                                    {coupon.tag}
                                </span>
                            ) : (
                                <div className="flex -space-x-2">
                                    <div className="w-6 h-6 rounded-full bg-yellow-400 border-2 border-white dark:border-background-dark"></div>
                                    <div className="w-6 h-6 rounded-full bg-pink-400 border-2 border-white dark:border-background-dark"></div>
                                </div>
                            )}
                            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full text-sm font-bold shadow-md transition-transform active:scale-95">
                                Use Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default CouponsView;