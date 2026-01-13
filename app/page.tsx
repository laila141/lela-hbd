"use client";

import React, { useState } from 'react';
import { View } from '../types';
import IntroView from '../views/IntroView';
import GalleryView from '../views/GalleryView';
import CouponsView from '../views/CouponsView';
import LetterView from '../views/LetterView';
import BottomNav from '../components/BottomNav';

import PreloaderView from "../views/PreloaderView";

export default function Home() {
	const [currentView, setCurrentView] = useState<View>(View.PRELOADER);
	const audioRef = React.useRef<HTMLAudioElement | null>(null);

	React.useEffect(() => {
		// Initialize audio
		audioRef.current = new Audio("/tuyu.MP3");
		audioRef.current.loop = true;

		return () => {
			if (audioRef.current) {
				audioRef.current.pause();
				audioRef.current = null;
			}
		};
	}, []);

	React.useEffect(() => {
		// Play audio when entering GALLERY
		if (currentView === View.GALLERY && audioRef.current) {
			audioRef.current.play().catch((error) => {
				console.log("Audio play failed (user interaction needed):", error);
			});
		}
	}, [currentView]);

	const renderView = () => {
		switch (currentView) {
			case View.PRELOADER:
				return <PreloaderView onUnlock={() => setCurrentView(View.INTRO)} />;
			case View.INTRO:
				return <IntroView onStart={() => setCurrentView(View.GALLERY)} />;
			case View.GALLERY:
				return <GalleryView />;
			case View.LETTER:
				return <LetterView />;
			default:
				return <IntroView onStart={() => setCurrentView(View.GALLERY)} />;
		}
	};

	return (
		<div className="min-h-screen w-full">
			{/* Navigation (Hidden on Intro) */}
			{currentView !== View.INTRO && (
				<BottomNav currentView={currentView} setView={setCurrentView} />
			)}

			{/* Main Content Area */}
			{/* md:pl-24 adds padding-left on desktop to account for the sidebar */}
			<main
				className={`min-h-screen transition-all duration-300 ${
					currentView !== View.INTRO ? "md:pl-24 pb-20 md:pb-0" : ""
				}`}>
				{renderView()}
			</main>
		</div>
	);
}
