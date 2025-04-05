"use client";

import React from 'react';

export default function MascotButton({ onClick }) {
  function playSound() {
    const audio = new Audio('/pop.mp3'); // Make sure you have this file in your public/ folder
    audio.play();
    onClick();
  }

  return (
    <button 
      onClick={playSound}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center group"
    >
      <img 
        src="/mascot.png" 
        alt="Vet Mascot" 
        className="w-32 h-32 rounded-full shadow-lg hover:scale-110 hover:animate-bounce transition-transform duration-300"
      />
      <div className="mt-2 text-sm text-white bg-blue-500 px-3 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
        Need Help?
      </div>
    </button>
  );
}
