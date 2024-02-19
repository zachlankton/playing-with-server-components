"use client";
import { useState } from "react";

export function Counter(props: any) {
  const [count, setCount] = useState(props.count);

  return (
    <>
      <button
        className="border rounded p-2 m-1"
        onClick={() => setCount(count + 1)}
      >
        Count is {count}
      </button>
    </>
  );
}
