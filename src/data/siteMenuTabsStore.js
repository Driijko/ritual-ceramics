import { writable, get } from "svelte/store";

// STATE ------------------------------------------
export const currentTab = writable("shopping-cart");
export const prevTab = writable("shopping-cart");

// MAP -------------------------------------------
const tabPositionMap = {
  "navigation": 0,
  "shopping-cart": 1,
  "background-audio": 2,
  "web-design": 3
}

// FUNCTIONS --------------------------------------
export function newTab(tabName) {
  prevTab.set(get(currentTab));
  currentTab.set(tabName);
};

export function getTabPosition(tabName) {
  return tabPositionMap[tabName];
};