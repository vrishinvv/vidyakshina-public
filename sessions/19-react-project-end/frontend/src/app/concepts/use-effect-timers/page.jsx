"use client";
import { useEffect, useState } from "react";

export default function UseEffectTimerFetch() {
  const [seconds, setSeconds] = useState(5);

  console.log("component re-rendered: ", seconds);

  // timer
  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setTimeout(() => {
      // await checkBackend();
      setSeconds(s => s - 1)
    }, 1000);
    
  }, [seconds]);

  // function handleTimer(){
  //   if(seconds <= 0) return;
  //   // for(let i = 1; i <= 60; i++){
  //     setTimeout(() => {
  //       setSeconds((s) => {
  //           return s - 1;
  //       });
  //     }, 1000);
  //   // }
  // }

  return (
    <div style={{ padding: 24 }}>
      <h2>useEffect – Timers</h2>
      <p>Countdown: {seconds}s</p>
      {/* {handleTimer()} */}
      {/* <button onClick={handleTimer}>Restart</button> */}
    </div>
  );
}
