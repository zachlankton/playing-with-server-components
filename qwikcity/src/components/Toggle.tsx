import { Slot, component$, useSignal } from "@builder.io/qwik";

export default component$(() => {
  const show = useSignal(false);
  return (
    <>
      <button onClick$={() => (show.value = !show.value)}>Toggle</button>
      {show.value ? <h1>Visible</h1> : <h1>Hidden</h1>}
      {show.value && <Slot />}
    </>
  );
});
