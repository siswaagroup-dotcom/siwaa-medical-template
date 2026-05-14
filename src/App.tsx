import React from 'react';
import Scene from './components/Scene';

export default function App() {
  return (
    <div className="relative bg-slate-50 min-h-screen">
      <Scene />
      
      {/* Top Level Emergency Action */}
      <button 
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-red-600 text-white rounded-full flex flex-col items-center justify-center shadow-2xl hover:scale-110 transition-transform focus:outline-none"
        title="Emergency"
      >
        <span className="font-bold text-xs">911</span>
        <span className="text-[10px] font-bold uppercase tracking-tighter">Emergency</span>
      </button>
    </div>
  );
}
