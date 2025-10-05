"use client";
import { useEffect } from "react";

export default function UseEffectMount() {
  useEffect(() => {
    console.log("✅ component mounted inside useEffect");

    // cleanup
    return () => {
      console.log("🧹 component unmounted");
    };
  }, []); // empty deps → once

  return (
    <div style={{ padding: 24 }}>
      <h2>useEffect – Mount / Unmount</h2>
      <p>Open the browser console and see logs when you visit / leave this page.</p>
    </div>
  );
}
