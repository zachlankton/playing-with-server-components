// import { Counter } from "@/components/CounterComponent";
import { FileComponent } from "@/components/FileComponent";
import { Toggle } from "@/components/Toggle";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Hello World</h1>
      <Toggle>
        <FileComponent path="/tmp/nextHome.txt" />
      </Toggle>
      {/* <Counter path="/tmp/nextHome.txt" /> */}
      <Link href="/about">Goto About</Link>
      <Link href="/fetchExampleBug">Goto Fetch Example (BUG)</Link>
      <Link href="/fetchExampleFaster">Goto Fetch Example</Link>
    </main>
  );
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
