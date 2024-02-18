import * as fs from "fs";
console.log("FileComponent Module Running");

export async function FileComponent(props: { path: string }) {
  console.log("FileComponent Function Running", props.path);
  const val = await fs.promises.readFile(props.path, "utf8");
  return <pre>{val}</pre>;
}
