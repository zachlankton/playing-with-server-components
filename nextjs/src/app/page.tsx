import * as fs from "fs";

export default function Home({ searchParams }: { searchParams: any }) {
  console.log(searchParams.asdf);
  const val = fs.readFileSync("/tmp/test.txt", "utf-8");
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Hello World</h1>
      <p>{val}</p>
    </main>
  );
}
