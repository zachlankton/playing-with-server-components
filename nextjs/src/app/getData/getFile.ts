import { delay } from "@/components/FileComponent";
import * as fs from "fs";

export async function getFile(path: string) {
  await delay(2000);
  return await fs.promises.readFile(path, "utf8");
}
