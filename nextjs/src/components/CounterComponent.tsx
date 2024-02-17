"use client";
import { useState } from "react";
console.log("CounterComponent Module Running");

let initialValue = "";
if (typeof window === "object") {
  initialValue = document.getElementById("fileContents")?.textContent || "";
}

export function Counter({ path }: { path: string }) {
  console.log("CounterComponent Function Running", path);

  if (typeof window === "undefined") {
    const fs = require("fs");
    initialValue = fs.readFileSync(path, "utf-8");
  }

  const [txt] = useState(initialValue);
  const [count, setCount] = useState(0);
  return (
    <div className="my-5 flex flex-col">
      <button className="border p-4" onClick={() => setCount(count + 1)}>
        Count is {count}
      </button>
      <pre id="fileContents">{txt}</pre>
    </div>
  );
}
