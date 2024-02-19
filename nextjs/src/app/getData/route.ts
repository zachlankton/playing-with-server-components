import { getFile } from "./getFile";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get("path") || "";
  const txt = await getFile(path);
  return Response.json({ txt });
}
