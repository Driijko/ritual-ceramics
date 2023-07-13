<!-- SCRIPTS ///////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { productsDisplay } from "../../../data/products";
  import Price from "../../6-elements/Price.svelte";
  import { layoutBreakpoint } from "../../../data/layoutBreakpointStore";
  import BaseLayer from "./BaseLayer.svelte";
  import SortModal from "./SortModal.svelte";

  // SORT FUNCTION -----------------------------------
  function sort(sortBy) {
    function alphabeticalA() {
      function compare(a,b) {
        if (a.name > b.name) {
          return 1;
        } else if (a.name === b.name) {
          return 0;
        } else {
          return -1;
        }
      };
      productsDisplay.sort(compare);
    };

    

    function priceLowToHigh() {
      
    };

    

    if (sortBy === "a-z") {
      alphabeticalA();
    } else if (sortBy === "z-a") {
      alphabeticalZ();
    } else if (sortBy === "low-to-high") {
      priceLowToHigh();
    } else if (sortBy === "high-to-low") {
      priceHighToLow();
    }
  }

  // FILTER FUNCTIONS --------------------------------
  function filterByCategory(category) {
    productsDisplay = productsDisplay.filter(item => {
      return item.category === category;
    });
  };

  function filterBySale() {
    productsDisplay = productsDisplay.filter(item => {
      return item.sale;
    });
  }

</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<div class="shop-page" class:large-desktop={$layoutBreakpoint === "large-desktop"}>
  <BaseLayer  />
  <SortModal />
</div>

<!-- STYLES ///////////////////////////////////////////// -->
<style>
/* GENERAL //////////////////////////////////////////// */
@media screen and (orientation: portrait) {
  .shop-page {
    height: calc(var(--vph) * 0.92);
  }
}
@media screen and (orientation: landscape) {
  .shop-page {
    height: var(--ch);
  }
}
.shop-page.large-desktop {
  background-color: hsla(var(--hue2), 100%, 10%, 0.3);
}
</style>