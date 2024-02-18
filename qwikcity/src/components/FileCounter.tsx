import { component$, useSignal } from "@builder.io/qwik";
import * as fs from "fs";

console.log("FileCounter Module Running");

interface FileProps {
  path: string;
}

export default component$<FileProps>((props) => {
  console.log("FileCounter Function Running");
  const initialCount = fs.readFileSync(props.path, "utf8");
  const count = useSignal(Number(initialCount));
  return (
    <>
      <button onClick$={() => count.value++}>Increment {count.value}</button>
    </>
  );
});
