// @refresh reload
import { createSignal } from "solid-js";
import * as fs from "fs";
import "./app.css";
import { isServer } from "solid-js/web";

export default function App() {
  let val = "Default value";
  const [count, setCount] = createSignal(0);
  if (isServer) {
    val = fs.readFileSync("/tmp/test.txt", "utf8");
  }

  return (
    <main>
      <h1>Hello world!</h1>
      <p>{val}</p>
      <button class="increment" onClick={() => setCount(count() + 1)}>
        Clicks: {count()}
      </button>
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
