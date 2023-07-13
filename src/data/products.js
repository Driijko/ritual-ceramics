import { writable, get } from "svelte/store";

// PRODUCTS //////////////////////////////////////
export const products = [
{
  id: 1,
  name: "vase",
  description: "A white vase with a dimpled textured surface.",
  "original-price": 2015,
  pic: "./products/pic1.jpg",
  category: "vase",
  sale: true,
  price: 1500
},
{
  id: 2,
  name: "mug",
  description: "A grey mug with an interesting handle.",
  price: 3015,
  pic: "./products/pic2.jpg",
  category: "mug",
  sale: false,
},
{
  id: 3,
  name: "tea-pot",
  description: "A colorful teapot.",
  price: 5000,
  pic: "./products/pic3.jpg",
  category: "tea-pot",
  sale: false,
},
{
  id: 4,
  name: "pour-over",
  description: "A sleek pour-over.",
  price: 3050,
  pic: "./products/pic4.jpg",
  category: "tea-pot",
  sale: false,
},
];

// PRODUCTS DISPLAY //////////////////////////////////////
export const productsDisplay = writable(products);

// SORT FUNCTIONS /////////////////////////////////////////
export function productsSortAlphabeticalA() {
  function compare(a,b) {
    if (a.name > b.name) {
      return 1;
    } else if (a.name === b.name) {
      return 0;
    } else {
      return -1;
    }
  };
  productsDisplay.set(get(productsDisplay).sort(compare));
};

export function productsSortAlphabeticalZ() {
  function compare(a,b) {
    if (a.name < b.name) {
      return 1;
    } else if (a.name === b.name) {
      return 0;
    } else {
      return -1;
    }
  };
  productsDisplay.set(get(productsDisplay).sort(compare));
};

export function productsSortPriceLowToHigh() {
  function compare(a, b) {
    if (a.price > b.price) {
      return 1;
    } else if (a.price === b.price) {
      return 0;
    } else {
      return -1;
    }
  };
  productsDisplay.set(get(productsDisplay).sort(compare));
};

export function productsSortPriceHighToLow() {
  function compare(a, b) {
    if (a.price < b.price) {
      return 1;
    } else if (a.price === b.price) {
      return 0;
    } else {
      return -1;
    }
  };
  productsDisplay.set(get(productsDisplay).sort(compare));
};