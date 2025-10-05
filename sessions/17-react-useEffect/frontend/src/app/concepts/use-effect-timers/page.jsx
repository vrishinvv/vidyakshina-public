"use client";
import { useEffect, useState } from "react";

export default function UseEffectTimerFetch() {
  const [seconds, setSeconds] = useState(5);

  // timer
  useEffect(() => {
    if (seconds <= 0) return;
    const id = setTimeout(() => setSeconds(s => s - 1), 1000);
    return () => clearTimeout(id);
  }, [seconds]);

  return (
    <div style={{ padding: 24 }}>
      <h2>useEffect – Timers</h2>
      <p>Countdown: {seconds}s</p>
      <button onClick={() => setSeconds(5)}>Restart</button>
    </div>
  );
}
