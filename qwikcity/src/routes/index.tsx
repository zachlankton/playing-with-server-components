import { component$ } from "@builder.io/qwik";
import FileComponent from "~/components/FileComponent";

export default component$(() => {
  return (
    <>
      <h1>Home</h1>
      <FileComponent path="/tmp/qwikHome.txt" />
      <a href="/about">Goto About</a>
    </>
  );
});