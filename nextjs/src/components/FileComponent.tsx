export function FileComponent(props: { path: string }) {
  const fs = require("fs");
  const val = fs.readFileSync(props.path, "utf-8");
  return <pre>{val}</pre>;
}
