import { component$ } from "@builder.io/qwik";
import * as fs from "fs";

console.log("FileComponent Module Running");

interface FileProps {
  path: string;
}

export default component$<FileProps>((props) => {
  console.log("FileComponent Function Running");
  const txt = fs.readFileSync(props.path, "utf8");
  return (
    <>
      <pre>{txt}</pre>
    </>
  );
});
