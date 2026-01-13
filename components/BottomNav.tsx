import React from 'react';
import { View } from '../types';

interface BottomNavProps {
  currentView: View;
  setView: (view: View) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentView, setView }) => {
  const navItems = [
		{ view: View.GALLERY, icon: "gallery_thumbnail", label: "Galeri" },
		{ view: View.LETTER, icon: "drafts", label: "Surat" },
	];

	return (
		<>
			{/* Mobile Bottom Nav */}
			<div className="fixed bottom-0 left-0 w-full h-20 bg-white/90 dark:bg-[#1a0c12]/90 backdrop-blur-xl border-t border-primary/10 flex md:hidden justify-around items-center px-6 pb-4 z-50">
				{navItems.map((item) => (
					<button
						key={item.view}
						onClick={() => setView(item.view)}
						className={`flex flex-col items-center gap-1 transition-colors ${
							currentView === item.view ? "text-primary" : "text-[#8a6072]"
						}`}>
						<span
							className="material-symbols-outlined transition-transform active:scale-95"
							style={{
								fontVariationSettings:
									currentView === item.view ? "'FILL' 1" : "'FILL' 0",
							}}>
							{item.icon}
						</span>
						<span className="text-[10px] font-bold">{item.label}</span>
					</button>
				))}
				<button className="flex flex-col items-center gap-1 text-[#8a6072]">
					<span className="material-symbols-outlined">settings</span>
					<span className="text-[10px] font-bold">Lainnya</span>
				</button>
			</div>

			{/* Desktop Sidebar */}
			<div className="hidden md:flex fixed top-0 left-0 h-full w-24 bg-white/50 dark:bg-[#1a0c12]/50 backdrop-blur-xl border-r border-primary/10 flex-col items-center py-8 z-50 gap-8">
				<div className="mb-4">
					<span className="material-symbols-outlined text-4xl text-primary">
						favorite
					</span>
				</div>

				{navItems.map((item) => (
					<button
						key={item.view}
						onClick={() => setView(item.view)}
						className={`group flex flex-col items-center gap-2 p-3 rounded-xl transition-all hover:bg-primary/5 ${
							currentView === item.view
								? "text-primary bg-primary/10"
								: "text-[#8a6072]"
						}`}
						title={item.label}>
						<span
							className="material-symbols-outlined text-3xl transition-transform group-hover:scale-110"
							style={{
								fontVariationSettings:
									currentView === item.view ? "'FILL' 1" : "'FILL' 0",
							}}>
							{item.icon}
						</span>
					</button>
				))}

				<div className="mt-auto">
					<button className="flex flex-col items-center gap-1 text-[#8a6072] hover:text-primary transition-colors">
						<span className="material-symbols-outlined text-2xl">settings</span>
					</button>
				</div>
			</div>
		</>
	);
};

export default BottomNav;