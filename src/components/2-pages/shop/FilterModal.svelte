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
        Mugs
        <input type="checkbox" id="mug" checked={categories.mug} />
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
  display: flex;
  flex-direction: column;
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
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
label {
  color: hsl(var(--hue2), 100%, 10%);
  font-weight: 500;
  display: flex;
  gap: calc(var(--cw)/10);
  align-items: center;
  background-color: hsl(0, 100%, 90%);
}
input[type="checkbox"] {
  border-color: hsl(var(--hue2), 100%, 5%);
  border-style: solid;
  border-width: calc(var(--cw)/100);
  width: calc(var(--cw)/12);
  height: calc(var(--cw)/12);
}
input:checked[type="checkbox"] {
  background-color: black;
}
/* PORTRAIT //////////////////////////////////////// */
@media screen and (orientation: portrait) {
  h3 {
    font-size: calc(var(--cw)/10);
  }
  menu {
    gap: 50px;
  }
  label {
    padding: calc(var(--cw)/50) calc(var(--cw)/10);
    padding-top: calc(var(--cw)/30);
    border-radius: calc(var(--cw)/100);
    border-width: calc(var(--cw)/100);
    font-size: calc(var(--cw)/12);
  }
}
@media screen and (orientation: landscape) {
  h3 {
    font-size: calc(var(--cw)/30);
  }
  menu {
    gap: 50px;
  }
  label {
    padding: calc(var(--cw)/100) calc(var(--cw)/50);
    padding-top: calc(var(--cw)/60);
    border-radius: calc(var(--cw)/100);
    border-width: calc(var(--cw)/200);
    font-size: calc(var(--cw)/40);
  }
}
</style>