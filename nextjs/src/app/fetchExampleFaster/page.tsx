"use client";
import { FileCounter } from "@/components/FileCounterComponent";
import Link from "next/link";
import { Toggle } from "@/components/Toggle";
import { FileFetchComponent } from "@/components/FileFetchComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Hello World</h1>
      <FileFetchComponent path="/tmp/nextAbout1.txt">
        <FileFetchComponent path="/tmp/nextAbout2.txt">
          <FileFetchComponent path="/tmp/nextAbout3.txt" />
        </FileFetchComponent>
      </FileFetchComponent>
      <Toggle>
        <FileCounter path="/tmp/nextAbout.txt" />
      </Toggle>
      <Link href="/">Go Home</Link>
      <Link href="/about">Go About</Link>
      <Link href="/fetchExampleBug">Goto Fetch Example (BUG)</Link>
    </main>
  );
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
