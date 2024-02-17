import { Counter } from "@/components/CounterComponent";
import { FileComponent } from "@/components/FileComponent";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Hello World</h1>
      <FileComponent path="/tmp/nextAbout.txt" />
      <Counter path="/tmp/nextAbout.txt" />
      <Link href="/">Go Home</Link>
    </main>
  );
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
