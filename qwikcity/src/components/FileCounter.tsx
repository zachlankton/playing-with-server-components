import { useSignal as createSignal } from "@builder.io/qwik";
import * as fs from "fs";
import { serverComponent$ } from "./ServerComponent";

console.log("FileCounter Module Running");
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default serverComponent$(async (props) => {
  console.log("FileCounter Function Running");
  const count = createSignal(0);
  await delay(2000);
  const txtNumber = await fs.promises.readFile(props.path, "utf8");
  console.log(txtNumber);
  count.value = parseInt(txtNumber);

  return (
    <>
      <button onClick$={() => count.value++}>Increment {count.value}</button>
    </>
  );
});
