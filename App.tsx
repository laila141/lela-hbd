import React, { useState } from 'react';
import { View } from './types';
import IntroView from './views/IntroView';
import GalleryView from './views/GalleryView';
import CouponsView from './views/CouponsView';
import LetterView from './views/LetterView';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.INTRO);

  const renderView = () => {
    switch (currentView) {
      case View.INTRO:
        return <IntroView onStart={() => setCurrentView(View.GALLERY)} />;
      case View.GALLERY:
        return <GalleryView />;
      case View.COUPONS:
        return <CouponsView />;
      case View.LETTER:
        return <LetterView />;
      default:
        return <IntroView onStart={() => setCurrentView(View.GALLERY)} />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-background-light dark:bg-background-dark text-[#181114] dark:text-white transition-colors duration-300">
      
      {/* Navigation (Hidden on Intro) */}
      {currentView !== View.INTRO && (
        <BottomNav currentView={currentView} setView={setCurrentView} />
      )}

      {/* Main Content Area */}
      {/* md:pl-24 adds padding-left on desktop to account for the sidebar */}
      <main className={`min-h-screen transition-all duration-300 ${currentView !== View.INTRO ? 'md:pl-24 pb-20 md:pb-0' : ''}`}>
        {renderView()}
      </main>

    </div>
  );
};

export default App;