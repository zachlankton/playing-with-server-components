import { Counter } from "@/components/CounterComponent";
import { FileComponent } from "@/components/FileComponent";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Hello World</h1>
      <FileComponent path="/tmp/nextHome.txt" />
      <Counter path="/tmp/nextHome.txt" />
      <Link href="/about">Goto About</Link>
    </main>
  );
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
