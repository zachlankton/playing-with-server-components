import { component$ } from "@builder.io/qwik";
import FileComponent from "~/components/FileComponent";
import FileCounter from "~/components/FileCounter";
import Toggle from "~/components/Toggle";

export default component$(() => {
  return (
    <>
      <h1>About</h1>
      <FileComponent path="/tmp/qwikAbout.txt" />
      <Toggle>
        <FileCounter path="/tmp/qwikCount.txt" />
      </Toggle>
      <div>
        <a href="/">Goto Home</a>
      </div>
    </>
  );
});
