<!-- SCRIPTS ///////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { layoutBreakpoint } from "../../../data/layoutBreakpointStore";
  import BaseLayer from "./BaseLayer.svelte";
  import SortModal from "./SortModal.svelte";
  import FilterModal from "./FilterModal.svelte";

  // FILTER FUNCTIONS --------------------------------
  // function filterByCategory(category) {
  //   productsDisplay = productsDisplay.filter(item => {
  //     return item.category === category;
  //   });
  // };

  // function filterBySale() {
  //   productsDisplay = productsDisplay.filter(item => {
  //     return item.sale;
  //   });
  // }

</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<div class="shop-page" class:large-desktop={$layoutBreakpoint === "large-desktop"}>
  <BaseLayer  />
  <SortModal />
  <FilterModal />
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