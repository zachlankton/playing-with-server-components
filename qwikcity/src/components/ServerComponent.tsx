import { componentQrl } from "@builder.io/qwik";
import type { JSXOutput } from "@builder.io/qwik";

// fake asf server component don't actually use this
export function serverComponentQrl(qrl: (props?: any) => Promise<JSXOutput>) {
  // @ts-ignore
  return componentQrl(qrl);
}
export const serverComponent$ = serverComponentQrl;
