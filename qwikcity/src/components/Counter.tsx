import { component$, useSignal as createSignal } from "@builder.io/qwik";

export default component$<any>((props) => {
  const count = createSignal(props.count);

  return (
    <>
      <button onClick$={() => count.value++}>Increment {count.value}</button>
    </>
  );
});
