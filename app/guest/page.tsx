"use client"

import React, { useState } from 'react';
function Counter() {
  const [isopen, setisopen] = useState(false);
  const [status, setstatus] = useState("予約していません");

  // 五秒に一回関数を呼び出す
    // const result: boolean  = callAPI ();
    // setisopen(result)
  setTimeout(() => {
    const result: boolean  = callAPI ();
    setisopen(result);
  }, 3000);

  const handlereserve = () => {

    if (status === "予約中"){
        setstatus("予約していません");  
    }

    else if (isopen === false){
        setstatus("予約中");  
    }
  }

  const notification = () => {
    if (status === "予約中" && isopen === true){
        return <div>予約中のトイレに空きが出ました</div>;
    }
  }

  return (
    <div>
      <p>トイレの状況: {isopen ? '空き' : '使用中'}</p>
      <button onClick={handlereserve}>予約する</button>
      <p>Status: {status}</p>
      {notification()}
    </div>
  );
}

export default Counter;

function callAPI(){
    const status = Math.random() < 0.5;
    return status;
}