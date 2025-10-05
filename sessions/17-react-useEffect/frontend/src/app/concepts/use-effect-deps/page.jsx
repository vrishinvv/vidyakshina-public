"use client";
import { useEffect, useState } from "react";

export default function UseEffectDeps() {
  const [count, setCount] = useState(0);

  console.log("Render with count =", count);

  useEffect(() => {
    console.log("🔁 count changed →", count);
  }, [count]); // only when count differs

  return (
    <div style={{ padding: 24 }}>
      <h2>useEffect – Dependency Change</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increase</button>{" "}
      <button onClick={() => setCount(c => c)}>Set same value</button>
      <p>Watch console: setting the same value skips effect (React bails out).</p>
    </div>
  );
}
