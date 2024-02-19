import { FileCounter } from "@/components/FileCounterComponent";
import { FileComponent } from "@/components/FileComponent";
import Link from "next/link";
import { Toggle } from "@/components/Toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Hello World</h1>
      <FileComponent path="/tmp/nextAbout1.txt">
        <FileComponent path="/tmp/nextAbout2.txt">
          <FileComponent path="/tmp/nextAbout3.txt" />
        </FileComponent>
      </FileComponent>
      <Toggle>
        <FileCounter path="/tmp/nextAbout.txt" />
      </Toggle>
      <Link href="/">Go Home</Link>
      <Link href="/fetchExampleFaster">Goto Fetch Example</Link>
    </main>
  );
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
