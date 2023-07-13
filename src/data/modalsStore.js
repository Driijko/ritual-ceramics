import { writable, get } from "svelte/store";

// STATE ---------------------------------
export const siteMenuModal = writable(false);
export const sortModal = writable(false);
export const filterModal = writable(false);
export const productModal = writable(false);

// MAP ------------------------------------
const map = {
  siteMenu: siteMenuModal,
  sort: sortModal,
  filter: filterModal,
  product: productModal,
};

// FUNCTIONS ---------------------------------
export const modals = {
  open(modal) {map[modal].set(true)},
  close(modal) {map[modal].set(false)},
  toggle(modal) {map[modal].set(!(get(map[modal])))},
};