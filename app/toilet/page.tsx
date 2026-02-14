'use client';
import { useState } from 'react';

export default function Toilet() {

  const [isEmptyActive, setIsEmptyActive] = useState(true);

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "right"
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative flex min-h-screen items-center justify-center px-6">
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="text-center">
            <h2 className="text-4xl sm:text-4xl font-bold" style={{ fontFamily: '"Noto Serif JP", serif', fontSize: 'clamp(2rem, 5vw, 2.25rem)', fontWeight: 700, color: '#fff', textShadow: '0 0 11px #ffffff' }}>
              一発で勝負しよう。
            </h2>
          </div>
          <div className="w-full max-w-md">
            <div className="bg-white shadow-2xl p-10 border-[5px]" style={{ borderImage: 'linear-gradient(to bottom right, #22d3ee, #2563eb) 1' }}>

              {/* Header */}
              <div className="text-center mb-10">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <img src="/men.svg" alt="Men" className="w-12 h-12" />
                </div>
                <h1 className="text-3xl text-gray-800 mb-3 tracking-tight" style={{ fontWeight: 700, fontFamily: '"Noto Sans JP", serif' }}>
                  男性トイレ状況
                </h1>
                <p style={{ color: '#333', fontWeight: 500, fontSize: '14px', letterSpacing: '0.05em' }}>
                  {/* SHOSANが提供する清潔サービス */}
                </p>
              </div>

              {/* Status Buttons */}
              <div className="space-y-5">
                <button
                  onClick={() => setIsEmptyActive(true)}
                  className={`w-full h-16 bg-gradient-to-br from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 text-white font-light text-lg rounded-2xl transition-all duration-500 flex items-center justify-center gap-4 tracking-wide cursor-pointer ${isEmptyActive ? 'is-active' : 'opacity-20'}`}
                >
                  <img src="/ok.svg" alt="OK" className="w-6 h-6" />
                  <span>人なし</span>
                </button>

                <button
                  onClick={() => setIsEmptyActive(false)}
                  className={`w-full h-16 bg-gradient-to-br from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white font-light text-lg rounded-2xl transition-all duration-500 flex items-center justify-center gap-4 tracking-wide cursor-pointer ${!isEmptyActive ? 'is-active' : 'opacity-20'}`}
                >
                  <img src="/no.svg" alt="No" className="w-6 h-6" />
                  <span>人あり</span>
                </button>
              </div>

              {/* Footer */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <p className="text-xs text-center text-gray-400 font-light tracking-widest uppercase">
                  Real-Time Update System
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}