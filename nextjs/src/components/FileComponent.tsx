import * as fs from "fs";
import { Counter } from "./Counter";
console.log("FileComponent Module Running");

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function FileComponent(props: any) {
  await delay(2000);
  console.log("FileComponent Function Running", props.path);
  const val = await fs.promises.readFile(props.path, "utf8");
  const txtCount = await fs.promises.readFile("/tmp/nextCount.txt", "utf8");
  return (
    <>
      <pre>{val}</pre>
      <Counter count={Number(txtCount)} />
      {props.children}
    </>
  );
}
