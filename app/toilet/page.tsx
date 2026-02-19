'use client';
import React, { useState, useEffect, useRef } from 'react';

// 共通スタイル定数
const COLORS = {
  available: {
    gradient: 'bg-gradient-to-br from-cyan-400 to-blue-600',
    hoverGradient: 'hover:from-cyan-500 hover:to-blue-700',
    border: 'linear-gradient(to bottom right, #22d3ee, #2563eb) 1'
  },
  occupied: {
    gradient: 'bg-gradient-to-br from-red-400 to-red-600',
    hoverGradient: 'hover:from-red-500 hover:to-red-700',
    border: 'linear-gradient(to bottom right, #f87171, #dc2626) 1'
  }
};

const STYLES = {
  title: {
    fontFamily: '"Noto Serif JP", serif',
    fontSize: 'clamp(2rem, 5vw, 2.25rem)',
    fontWeight: 700,
    color: '#fff',
    textShadow: '0 0 11px #ffffff',
    transform: 'translateY(30px)',
    opacity: 0
  },
  floorTitle: {
    fontWeight: 700,
    fontFamily: '"Noto Sans JP", serif'
  },
  buttonText: {
    fontFamily: '"Noto Sans JP"',
    fontWeight: 600
  }
};

// ToiletCardコンポーネント
interface ToiletCardProps {
  floor: string;
  isAvailable: boolean;
  onToggle: (available: boolean) => void;
}

function ToiletCard({ floor, isAvailable, onToggle }: ToiletCardProps) {
  const theme = isAvailable ? COLORS.available : COLORS.occupied;

  return (
    <div className="w-full max-w-md">
      <div
        className="bg-white shadow-2xl border-[5px]"
        style={{
          borderImage: theme.border,
          padding: 'clamp(1.25rem, 4vw, 2.5rem)'
        }}
      >
        {/* Header */}
        <div className="text-center" style={{ marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
          <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg ${theme.gradient}`}>
            <img src="/men.svg" alt="Men" className="w-12 h-12" />
          </div>
          <h1 className="text-3xl text-gray-800 mb-3 tracking-tight" style={STYLES.floorTitle}>
            {floor}
          </h1>
        </div>

        {/* Status Buttons */}
        <div className="space-y-5">
          <StatusButton
            isActive={isAvailable}
            theme={COLORS.available}
            icon="/ok.svg"
            text="人なし"
          />
          <StatusButton
            isActive={!isAvailable}
            theme={COLORS.occupied}
            icon="/no.svg"
            text="人あり"
          />
        </div>

        {/* Footer */}
        <div
          className="border-t border-gray-100"
          style={{
            marginTop: 'clamp(1.5rem, 4vw, 2.5rem)',
            paddingTop: 'clamp(1.5rem, 4vw, 2rem)'
          }}
        >
          <p className="text-xs text-center text-gray-400 font-light tracking-widest uppercase">
            Real-Time Update System
          </p>
        </div>
      </div>
    </div>
  );
}

// StatusButtonコンポーネント
interface StatusButtonProps {
  isActive: boolean;
  theme: typeof COLORS.available;
  icon: string;
  text: string;
}

function StatusButton({ isActive, theme, icon, text }: StatusButtonProps) {
  return (
    <button
      className={`w-full ${theme.gradient} ${theme.hoverGradient} text-white font-light text-lg rounded-2xl transition-all duration-500 flex items-center justify-center gap-4 tracking-wide cursor-pointer ${
        isActive ? 'is-active' : 'opacity-20'
      }`}
      style={{ height: 'clamp(3.5rem, 6vw, 4rem)' }}
    >
      <img src={icon} alt="" className="w-6 h-6" />
      <span style={STYLES.buttonText}>{text}</span>
    </button>
  );
}

export default function Toilet() {
  const [isAvailable2F, setIsAvailable2F] = useState(true);
  const [isAvailable3F, setIsAvailable3F] = useState(true);
  // const [isopen, setisopen] = useState(false);
  const [status, setstatus] = useState("予約していません");
  const audioRef = useRef<HTMLAudioElement>(null);

  // の状態を定期的に取得するための関数
  const fechtIsInToilet = async () => {
    try {
      // const response = await fetch('http://192.168.13.26:8000/status');
      const response = await fetch('/api/dummy/status');
      const data = await response.json();
      // setIsInToilet(data.isInToilet);
      setIsAvailable2F(!data.is_occupied);
      const result = data.is_occupied;
      // setisopen(result);
    } catch (error) {
      console.error('Error fetching data:', error);
      setTimeout(() => {console.log("Failed to fetch data after 5 seconds");}, 500);
    };
  };
      
  useEffect(() => {
    (() => fechtIsInToilet())(); // コンポーネントがマウントされたときに一度APIを呼び出す
    const intervalId = setInterval(() => {
      fechtIsInToilet();
    }, 5000); // 5秒ごとにAPIを呼び出す
    return () => clearInterval(intervalId); // コンポーネントがアンマウントされたときにインターバルをクリアする
  }, []);

      
  useEffect(() => {
    if (status === "予約中" && isAvailable2F) {
      if (!audioRef.current) {
        return;
      }
      audioRef.current.currentTime = 0;
      audioRef.current?.play();
      (() => setstatus("予約していません"))();
    }
  }, [isAvailable2F]);
      
  const handlereserve = async () => {
    if (status === "予約中"){
      // 予約をキャンセルする
      setstatus("予約していません");
    } else if (!isAvailable2F){
      // トイレ使用中のとき、予約する
      setstatus("予約中");
    }
    if (!audioRef.current) {
      const audio = new Audio("/sounds/notify.mp3");
      audioRef.current = audio;
      audio.preload = "auto";
      audio.muted = true;
      await audio.play();
      audio.pause();
      audio.currentTime = 0;
      audio.muted = false;
    }
  }
      
  // const notification = () => {
  //   // 予約中のとき、トイレに空きが出たら通知する
  //   if (status === "予約中" && isopen){
  //     return <div>予約中のトイレに空きが出ました</div>;
  //   }
  // }

  const reserveButtonClasses = [
    "w-[300px] max-w-[90vw] sm:w-[300px]",
    "rounded-2xl px-6 py-4",
    "text-base font-semibold tracking-wide",
    "bg-gradient-to-b from-sky-400 to-sky-500 text-white",
    "shadow-md shadow-sky-500/30",
    "transition-all duration-200",
    "hover:from-sky-500 hover:to-sky-600 hover:shadow-lg",
    "active:from-sky-600 active:to-sky-600",
    "focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-400/40",
    "disabled:from-slate-200 disabled:to-slate-200 disabled:text-slate-500",
    "disabled:shadow-none disabled:cursor-not-allowed disabled:hover:translate-y-0",
  ].join(" ");

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
      <div className="relative flex min-h-screen items-center justify-center px-6 py-[70px] sm:py-0">
        <div className="flex flex-col items-center w-full" style={{ gap: 'calc(0.5rem * 7)' }}>
          {/* Main Title */}
          <div className="text-center">
            <h2
              className="text-4xl font-bold animate-[slideUp_1s_ease-out_forwards]"
              style={STYLES.title}
            >
              一発で勝負しよう。
            </h2>
          </div>

          {/* Animation Keyframes */}
          <style jsx>{`
            @keyframes slideUp {
              from {
                transform: translateY(30px);
                opacity: 0;
              }
              to {
                transform: translateY(0);
                opacity: 1;
              }
            }
          `}</style>

          {/* Toilet Cards Container */}
          <div className="flex flex-col items-center sm:flex-row w-[90vw] lg:w-[1024px] justify-center" style={{ gap: 'calc(0.5rem * 7)' }}>
            <div className="flex flex-col items-center gap-4 w-1/2">
              <ToiletCard
                floor="2階トイレ"
                isAvailable={isAvailable2F}
                onToggle={setIsAvailable2F}
              />
              <button
                type="button"
                onClick={handlereserve}
                disabled={isAvailable2F || status === "予約中"}
                aria-disabled={isAvailable2F || status === "予約中"}
                className={reserveButtonClasses}
              >
                {status === "予約中" ? "通知予約中" : "通知をONにする"}
              </button>
            </div>
            <div className="flex flex-col items-center gap-4 w-1/2">
              <ToiletCard
                floor="3階トイレ"
                isAvailable={isAvailable3F}
                onToggle={setIsAvailable3F}
              />
              <button
                type="button"
                disabled
                className={reserveButtonClasses}
              >
                通知をONにする
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}