import React, { useState, useEffect } from "react";
import { Memory } from "../types";

// Generate 114 memory items dynamically
const memories: Memory[] = Array.from({ length: 114 }, (_, i) => {
	const id = i + 1;
	return {
		id: `m${id}`,
		image: `/images/images_${id}.avif`,
		caption: id % 10 === 0 ? "Momen Spesial ✨" : "", // Show caption occasionally
		date: "",
		rotation: i % 2 === 0 ? "rotate-[1deg]" : "rotate-[-1deg]",
	};
});

const GalleryView: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % memories.length);
		}, 1500); // Auto-slide every 1.5 seconds

		return () => clearInterval(interval);
	}, []);

	const goToSlide = (index: number) => {
		setCurrentIndex(index);
	};

	return (
		<div className="min-h-screen bg-background-light dark:bg-background-dark py-20 px-4 flex flex-col items-center justify-center relative overflow-hidden">
			{/* Background doodles */}
			<div className="absolute top-10 left-10 md:left-20 text-primary/10 animate-float">
				<span className="material-symbols-outlined text-9xl">favorite</span>
			</div>
			<div
				className="absolute bottom-20 right-10 text-primary/10 animate-float"
				style={{ animationDelay: "1s" }}>
				<span className="material-symbols-outlined text-8xl">star</span>
			</div>

			<div className="relative w-full max-w-md aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-[#3d1d29] group">
				{/* Slides */}
				{memories.map((memory, index) => {
					// Optimized rendering: only render current, previous, and next slides to save DOM resources
					const shouldRender =
						Math.abs(index - currentIndex) <= 1 ||
						(currentIndex === 0 && index === memories.length - 1) ||
						(currentIndex === memories.length - 1 && index === 0);

					if (!shouldRender) return null;

					return (
						<div
							key={memory.id}
							className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
								index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
							}`}>
							<div className="absolute inset-0 bg-black/20"></div>{" "}
							{/* Overlay */}
							<img
								src={memory.image}
								alt={memory.caption || `Memory ${index + 1}`}
								className="w-full h-full object-cover"
								loading="eager"
							/>
							{/* Caption & Date Overlay (Only if caption exists) */}
							{memory.caption && (
								<div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white pt-24 transform transition-transform duration-700">
									<h2 className="text-3xl md:text-5xl font-handwritten">
										{memory.caption}
									</h2>
								</div>
							)}
						</div>
					);
				})}

				{/* Indicators - Simplified for large number of items */}
				<div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-1 px-4">
					<div className="bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold">
						{currentIndex + 1} / {memories.length}
					</div>
				</div>
			</div>

			<div className="mt-8 text-center max-w-lg mx-auto">
				<p className="font-handwritten text-2xl text-gray-500 dark:text-gray-400">
					"Setiap detik berlalu, aku semakin mencintaimu."
				</p>
			</div>
		</div>
	);
};

export default GalleryView;
