"use client";

import { useState } from "react";

export function Toggle(props: any) {
  const [state, setState] = useState(false);
  return (
    <>
      <button
        className="border rounded p-2 m-1"
        onClick={() => setState(!state)}
      >
        Toggle
      </button>
      {state ? <p>Visible</p> : <p>Hidden</p>}
      {state ? props.children : null}
    </>
  );
}
