import { delay } from "@/components/FileComponent";
import * as fs from "fs";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  await delay(2000);
  const path = searchParams.get("path") || "";
  const txt = await fs.promises.readFile(path, "utf8");
  return Response.json({ txt });
}
