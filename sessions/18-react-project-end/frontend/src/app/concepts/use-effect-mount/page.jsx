"use client";
import { useEffect, useState } from "react";

export default function UseEffectMount() {
    const [count, setCount] = useState(0);

    console.log(count);
  useEffect(() => {
    console.log("✅ component mounted inside useEffect");
    const tempCount = count;
    // cleanup
    return () => {
      console.log("🧹 component unmounted"+ tempCount);
    };
  }); // empty deps → once

  return (
    <div style={{ padding: 24 }}>
      <h2>useEffect – Mount / Unmount</h2>
      <p>Open the browser console and see logs when you visit / leave this page.</p>
      <button 
      onClick={()=>setCount((c) => c + 1)}
      >click me </button>
    </div>
  );
}
