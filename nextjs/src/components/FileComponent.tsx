import * as fs from "fs";
import { Counter } from "./Counter";
import { Suspense } from "react";
import { getFile } from "@/app/getData/getFile";
console.log("FileComponent Module Running");

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function FileComponent(props: any) {
  console.log("FileComponent Function Running", props.path);
  const val = await getFile(props.path);
  // const txtCount = await getFile("/tmp/nextCount.txt");
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <pre>{val}</pre>
      {/* <Counter count={Number(txtCount)} /> */}
      {props.children}
    </Suspense>
  );
}
