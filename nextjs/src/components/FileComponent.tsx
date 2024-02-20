import * as fs from "fs";
import { Counter } from "./Counter";
import { Suspense } from "react";
import { getFile } from "@/app/getData/getFile";
console.log("FileComponent Module Running");

export async function FileComponent(props: any) {
  console.log("FileComponent Function Running", props.path);
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <FileValue path={props.path} />
      </Suspense>
      {props.children}
    </>
  );
}
async function FileValue(props: any) {
  const val = await getFile(props.path);
  return <pre>{val}</pre>;
}
