"use client"
import './style.css';

import React, { useState, useEffect, useRef } from 'react';
function Counter() {
  const [isopen, setisopen] = useState(false);
  const [status, setstatus] = useState("予約していません");
  const audioRef = useRef<HTMLAudioElement>(null);

  // 五秒に一回関数を呼び出す
    // const result: boolean  = callAPI ();
    // setisopen(result)
  useEffect(() => {
    const interval = setInterval(() => {
      const result: boolean  = callAPI ();
      setisopen(result);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (status === "予約中" && isopen === true) {
      audioRef.current?.play();
    }
  }, [status, isopen]);

  const handlereserve = () => {

    if (status === "予約中"){
        // 予約をキャンセルする
        setstatus("予約していません");  
    }

    else if (isopen === false){
        // トイレ使用中のとき、予約する
        setstatus("予約中");  
    }
  }

  const notification = () => {
    // 予約中のとき、トイレに空きが出たら通知する
    if (status === "予約中" && isopen === true){
        return <div>予約中のトイレに空きが出ました</div>;
    }
  }

  return (
    <div className="counter">
  <p>
    トイレの状況:
    <span className={isopen ? "status-open" : "status-closed"}>
      {isopen ? " 空き" : " 使用中"}
    </span>
  </p>

  <button onClick={handlereserve}>予約する</button>

  <p>
    Status:
    <span className={status === "予約中" ? "reserve" : ""}>
      {" "}{status}
    </span>
  </p>

  {status === "予約中" && isopen && (
    <div className="notification">
      予約中のトイレに空きが出ました
    </div>
  )}
  <audio ref={audioRef} src="/notify.mp3" preload="auto" />
</div>

  );
}

export default Counter;

function callAPI(){
    // APIを呼び出して、トイレの状況を取得する(乱数で仮想的に取得)
    const status = Math.random() < 0.5;
    return status;
}