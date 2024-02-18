import { component$ } from "@builder.io/qwik";
import FileComponent from "~/components/FileComponent";

export default component$(() => {
  return (
    <>
      <h1>About</h1>
      <FileComponent path="/tmp/qwikAbout.txt" />
      <a href="/">Goto Home</a>
    </>
  );
});
