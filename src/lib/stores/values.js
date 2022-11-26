import { writable } from "svelte/store";

export const values = writable({
  preferences: {
    humanities: 1,
    engineering: 1,
    sciences: 1,
    health: 1,
  },
  results: { math: 0, writting: 0, natural: 0, language: 0, social: 0 },
});
