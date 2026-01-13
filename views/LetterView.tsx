import React, { useState } from 'react';

const LetterView: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
		<div
			className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden overflow-y-auto pb-24"
			style={{
				background:
					"radial-gradient(circle at top right, rgba(244, 37, 123, 0.1) 0%, transparent 40%), radial-gradient(circle at bottom left, rgba(244, 37, 123, 0.1) 0%, transparent 40%)",
			}}>
			{/* Top Bar */}
			<div className="flex items-center bg-transparent p-4 pb-2 justify-between z-10">
				<div className="text-primary flex size-12 shrink-0 items-center cursor-pointer">
					<span className="material-symbols-outlined text-2xl">
						arrow_back_ios
					</span>
				</div>
				<h2 className="text-[#181114] dark:text-white text-lg font-bold leading-tight flex-1 text-center">
					Untuk Seseorang yang Spesial
				</h2>
				<div className="flex w-12 items-center justify-end">
					<button className="flex items-center justify-center rounded-full h-12 w-12 text-primary">
						<span className="material-symbols-outlined text-2xl">
							music_note
						</span>
					</button>
				</div>
			</div>

			<main className="flex-1 flex flex-col items-center justify-start pt-10 px-6">
				{/* Decorations */}
				<div className="absolute top-20 right-[-20px] opacity-20 dark:opacity-40 pointer-events-none">
					<img
						alt="floral"
						className="w-40 h-40 rotate-12"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZbcqAOJvVzV-KT8nqzCTPHEH6Yk1_qt4mx8ypf9g2gvLCjJui8iOtq6_eBJj6RsXxIbdDqh9Z9OI-OjB6Xu9LlmR4dTiAZ98l401cUhrLoq0lSSL8lg1VXAko5_YpERHQ978KFnnvyZt-gMPhlcR087LkletswLNmfJEAs1Z-VpSzgUZsT1py49Tl4h171nXQfUtxiRPDecCmcQ9g4pXZnSy4o52eGtKYejLeeCHCAtYTSCO1ssTp5qNW-Qlg76Pb87_HHkvsE5KV"
					/>
				</div>

				{/* The Envelope */}
				<div
					className={`relative w-full max-w-sm aspect-[4/3] transition-all duration-700 perspective-1000 ${
						isOpen ? "mt-32 mb-10" : "mt-10 mb-20"
					}`}>
					<div className="relative w-full h-full preserve-3d">
						{/* Envelope Body (Back) */}
						<div className="absolute inset-0 bg-[#fde9f1] dark:bg-[#3d242e] rounded-b-xl shadow-2xl flex items-end justify-center z-10 border border-primary/5"></div>

						{/* The Letter (Slides Up) */}
						<div
							className={`absolute left-[5%] right-[5%] bg-parchment shadow-md rounded-md transition-all duration-1000 ease-in-out z-10 flex flex-col items-center justify-start p-4
                ${
									isOpen
										? "bottom-[30%] h-[120%] -rotate-1"
										: "bottom-[10%] h-[80%] translate-y-0 rotate-0"
								}`}
							style={{
								backgroundImage:
									"url(https://lh3.googleusercontent.com/aida-public/AB6AXuBU873eYPqL_B5gUTmNcm829EJQIxRbI_82U1w9f1WudTQKjYmoE6vmHbvNxv64aTqFWiq9Unb6IUzfbn0Nuu4cQdmfrtwIetAT0DuTqRMPwSh1jsMLh-isOH76-Cj1pzNTTG_1SV6VbAUaLHkH-g9uzAey34OrWYvFRYPYYYL9Avn8JaDqHuf5qSfUDp9qWkSLXqc65kavABThOvlyRqhTNtsWucBaW64HUsjVvSdfaC1mC8TPO6l0lsx9Nm84WiJfLwcOpMawZAxw)",
							}}>
							{!isOpen && (
								<span className="material-symbols-outlined text-6xl text-primary/20 mt-10">
									favorite
								</span>
							)}

							{isOpen && (
								<div className="w-full h-full overflow-hidden text-center opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
									<h3 className="font-handwritten text-xl text-primary mb-2">
										Tersayang,
									</h3>
									<div className="h-1 w-full bg-primary/10 mb-2"></div>
									<div className="h-1 w-3/4 bg-primary/10 mx-auto mb-2"></div>
									<div className="h-1 w-full bg-primary/10 mb-2"></div>
									<p className="text-xs text-[#8a6072] mt-4 font-serif italic">
										Ketuk "Baca Surat Lengkap" di bawah
									</p>
								</div>
							)}
						</div>

						{/* Envelope Front (Bottom Pocket) */}
						<div
							className="absolute bottom-0 left-0 w-full h-1/2 bg-white dark:bg-[#2d1a22] z-20 rounded-b-xl border-t border-primary/5 shadow-inner"
							style={{
								clipPath: "polygon(0 0, 50% 40%, 100% 0, 100% 100%, 0 100%)",
							}}></div>
						<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/5 to-transparent z-20 rounded-b-xl pointer-events-none"></div>

						{/* Envelope Flap */}
						<div
							className={`absolute top-0 left-0 w-full h-1/2 bg-[#fde9f1] dark:bg-[#3d242e] rounded-t-xl z-30 shadow-md origin-top transition-transform duration-700 ease-in-out border-b border-primary/5
                ${isOpen ? "rotate-x-180 z-0" : "rotate-x-0"}`}
							style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}></div>

						{/* Wax Seal Button */}
						<div
							className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 transition-opacity duration-300 ${
								isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
							}`}>
							<button
								onClick={() => setIsOpen(true)}
								className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse">
								<span
									className="material-symbols-outlined text-3xl"
									style={{ fontVariationSettings: "'FILL' 1" }}>
									heart_check
								</span>
							</button>
						</div>
					</div>
				</div>

				{/* Prompt */}
				{!isOpen && (
					<div className="text-center animate-fade-in mt-4">
						<h4 className="text-primary text-sm font-bold uppercase tracking-widest px-4 py-2">
							Ketuk hati untuk membuka
						</h4>
						<p className="text-[#8a6072] dark:text-[#c4a1b0] text-sm mt-1">
							Kejutan ulang tahun menanti di dalam...
						</p>
					</div>
				)}

				{/* Read Full Letter Button */}
				<div
					className={`transition-all duration-700 delay-500 ${
						isOpen
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-10 pointer-events-none"
					} w-full`}>
					<div className="parchment-texture w-full max-w-2xl mx-auto rounded-xl shadow-2xl overflow-hidden border border-[#e6dbdf] relative bg-parchment">
						<div className="px-8 py-10 text-[#2d1a22]">
							<h1 className="font-handwritten text-4xl text-primary text-center mb-8">
								Selamat Ulang Tahun, Cintaku!
							</h1>
							<div className="space-y-6 font-handwritten text-2xl leading-relaxed">
								<p>Tersayang,</p>
								<p>
									Hari ini adalah perayaan untuk orang paling luar biasa yang
									aku kenal. Setiap hari bersamamu terasa seperti hadiah yang
									indah, tapi hari ini lebih spesial karena ini adalah hari
									dimana dunia menjadi lebih cerah karenamu.
								</p>
								<p>
									Aku berharap harimu dipenuhi dengan kebahagiaan, tawa, dan
									cinta sebanyak yang kamu berikan ke hidupku setiap hari.
								</p>
								<div className="w-full flex justify-center py-4">
									<span
										className="material-symbols-outlined text-primary text-4xl"
										style={{ fontVariationSettings: "'FILL' 1" }}>
										favorite
									</span>
								</div>
								<p>Terima kasih sudah menjadi dirimu yang luar biasa.</p>
								<p className="pt-4">Dengan segenap cintaku,</p>
								<p className="text-3xl font-bold">Selalu Milikmu ❤️</p>
							</div>

							<div className="mt-12 pt-8 border-t border-primary/10 flex flex-col gap-3 font-display">
								<button className="w-full py-3 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center gap-2 hover:bg-primary/20 transition-colors">
									<span className="material-symbols-outlined text-xl">
										screenshot_region
									</span>
									Simpan kenangan ini
								</button>
								<button
									onClick={() => setIsOpen(false)}
									className="w-full py-3 rounded-full bg-transparent text-[#8a6072] font-bold flex items-center justify-center gap-2">
									<span className="material-symbols-outlined text-xl">
										refresh
									</span>
									Baca lagi
								</button>
							</div>
						</div>
						{/* Decorative corner */}
						<img
							alt="decoration"
							className="absolute bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none"
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtHl6Rjqn-_SHmwIqnfr1HrY9mX1JVeoGMPjlEKapcZ1rAP7USsWbzXY3UmcZky9f745TsfRrfOCMin8XY7nMt0kEHQ9ZHAA6Gh2dJGkaUfOFJBE4gH1EB4m4gO5tqybkKp2mBn8HOglTRjw18p0G0ls8-joORpS2oB6dyq2G_HU2PViwvuGj9B4s9yfCq63-jRaHetwm5F0EkCXOLd2ZzaZ91FNInVmfk4xqPq180Rcyo2-fhlsFhxt0JLRIig2HVkcYYqu_1_ALL"
						/>
					</div>
				</div>
			</main>
		</div>
	);
};

export default LetterView;