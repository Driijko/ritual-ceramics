import { writable, get } from "svelte/store";

// STATE ----------------------------------
export const audioBkgPaused = writable(true);
export const audioBkgVolume = writable(0);

// FUNCTIONS ------------------------------------
export function audioBkgAdjustVolume(volume) {
  audioBkgVolume.set(volume);
};

export function audioBkgTogglePausePlay() {
  audioBkgPaused.set(!(get(audioBkgPaused)));
};