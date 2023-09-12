<!-- SCRIPTS /////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------
  import { modals, filterModal } from "../../../data/modalsStore";
  // import { productsFilter } from "../../../data/products";

  // EVENT HANDLERS ------------------------------------
  function handleClick(sortBy) {
    // productsSort(sortBy);
    // modals.close("sort");
  };

  // LOCAL DATA -------------------------------------
  let categories = {
    mug: true,
    "tea-pot": true,
    vase: true,
  }

</script>

<!-- MARKUP //////////////////////////////// -->
{#if $filterModal}
  <dialog class="filter-modal" open>
    <h3>Filter Products</h3>
    <menu>
      <label for="mug">
        Bowls
        <input type="checkbox" id="mug" checked={categories.mug} />
      </label>
      <label for="mug">
        Candle Holders
        <input type="checkbox" id="mug" checked={categories.mug} />
      </label>
      <label for="mug">
        Mugs
        <input type="checkbox" id="mug" checked={categories.mug} />
      </label>
      <label for="pour-over">
        Pour Overs
        <input type="checkbox" id="pour-over" checked={categories.mug} />
      </label>
      <label for="tea-pot">
        Tea Pots
        <input type="checkbox" id="tea-pot" checked={categories.mug} />
      </label>
      <label for="vase">
        Vases
        <input type="checkbox" id="vase" checked={categories.mug} />
      </label>
    </menu>
  </dialog>
{/if}

<!-- STYLES /////////////////////////////////////// -->
<style>
dialog {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(var(--hue1), 100%, 50%, 0.9);
}
h3 {
  font-weight: 400;
  height: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(var(--hue2), 100%, 5%);
  color: hsl(var(--hue1), 100%, 70%);
}
menu {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
label {
  color: hsl(var(--hue2), 100%, 10%);
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: hsl(var(--hue1), 100%, 60%);
}
input[type="checkbox"] {
  border-color: hsl(var(--hue2), 100%, 5%);
  border-style: solid;
  border-width: calc(var(--cw)/100);
}
input:checked[type="checkbox"] {
  background-color: hsl(var(--hue2), 100%, 17%);
}
input:not(:checked)[type="checkbox"] {
  background-color: hsl(var(--hue1), 100%, 90%);
}
/* PORTRAIT //////////////////////////////////////// */
@media screen and (orientation: portrait) {
  h3 {
    font-size: calc(var(--cw)/10);
  }
  menu {
    height: 80%;
  }
  label {
    padding: calc(var(--cw)/50) calc(var(--cw)/10);
    padding-top: calc(var(--cw)/30);
    border-width: calc(var(--cw)/100);
    font-size: calc(var(--cw)/12);
  }
  input[type="checkbox"] {
    border-radius: calc(var(--cw)/100);
    width: calc(var(--cw)/12);
    height: calc(var(--cw)/12);
  }
}
@media screen and (orientation: landscape) {
  h3 {
    font-size: calc(var(--cw)/30);
  }
  menu {
    height: 88%;
  }
  label {
    padding: calc(var(--cw)/100) calc(var(--cw)/3);
    padding-top: calc(var(--cw)/60);
    font-size: calc(var(--cw)/40);
  }
}
</style>