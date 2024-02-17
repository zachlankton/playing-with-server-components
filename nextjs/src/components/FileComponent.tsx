import * as fs from "fs";
console.log("FileComponent Module Running");

export function FileComponent(props: { path: string }) {
  console.log("FileComponent Function Running", props.path);
  const val = fs.readFileSync(props.path, "utf-8");
  return <pre>{val}</pre>;
}
