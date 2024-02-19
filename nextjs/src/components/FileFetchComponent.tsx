"use client";
import { useEffect, useState } from "react";
console.log("FileFetchComponent Module Running");

export function FileFetchComponent(props: any) {
  console.log("FileFetchComponent Function Running", props.path);

  const [txt, setTxt] = useState("Loading...");
  useEffect(() => {
    fetch(`/getData?path=${props.path}`)
      .then((res) => res.text())
      .then((txt) => setTxt(txt));
  }, []);

  return (
    <div className="my-5 flex flex-col">
      {props.children}
      <pre id="fileContents">{txt}</pre>
    </div>
  );
}
