import * as fs from "fs";
import { serverComponent$ } from "./ServerComponent";

console.log("FileComponent Module Running");

export default serverComponent$(async (props) => {
  console.log("FileComponent Function Running");
  const txt = await fs.promises.readFile(props.path, "utf8");
  return (
    <>
      <pre>{txt}</pre>
    </>
  );
});
