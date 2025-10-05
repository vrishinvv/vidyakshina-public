"use client";
import { useEffect, useState } from "react";

export default function UseEffectTimerFetch() {
  const [quote, setQuote] = useState("");

  // fetch quote on mount
  useEffect(() => {
    async function load() {
      const res = await fetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      const data = await res.json();
      console.log("Fetch response:", data);
      setQuote(data.joke);
    }
    load();
  }, []); // once on mount

  return (
    <div style={{ padding: 24 }}>
      <h2>useEffect – Fetch</h2>
      <p><em>{quote}</em></p>
    </div>
  );
}
