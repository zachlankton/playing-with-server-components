import * as fs from "fs";

export function FileComponent(props: { path: string }) {
  const val = fs.readFileSync(props.path, "utf-8");
  return <pre>{val}</pre>;
}
