"use client";
import { useEffect, useState } from "react";
import { Counter } from "./Counter";
console.log("FileFetchComponent Module Running");

export function FileFetchComponent(props: any) {
  console.log("FileFetchComponent Function Running", props.path);

  const [txt, setTxt] = useState("Loading...");
  // const [txtCount, setTxtCount] = useState("");
  useEffect(() => {
    console.log("FileFetchComponent useEffect Running", props.path);
    setTimeout(() => {
      console.log("FileFetchComponent useEffect Fetching", props.path);
      fetch(`/getData?path=${props.path}`)
        .then((res) => res.json())
        .then((txt) => setTxt(txt.txt));
      // fetch(`/getData?path=/tmp/nextCount.txt`)
      //   .then((res) => res.json())
      //   .then((txt) => setTxtCount(txt.txt));
    }, 1000);
  }, []);

  return (
    <div className="my-5 flex flex-col">
      <pre>{txt}</pre>
      {/* {txtCount && <Counter count={Number(txtCount)} />} */}
      {props.children}
    </div>
  );
}
