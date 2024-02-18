import * as fs from "fs";
import { serverComponent$ } from "./ServerComponent";
import Counter from "./Counter";

console.log("FileCounter Module Running");
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default serverComponent$(async (props) => {
  console.log("FileCounter Function Running");
  await delay(2000);
  const txtNumber = await fs.promises.readFile(props.path, "utf8");
  const count = parseInt(txtNumber);
  return <Counter count={count} />;
});
