import * as fs from "fs";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getFile(path: string) {
  await delay(2000);
  return await fs.promises.readFile(path, "utf8");
}
