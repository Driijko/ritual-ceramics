<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------------
  import { siteMenuModal, modals } from "../../../data/modalsStore";
  import InterfaceAreaButton 
  from "../../6-elements/interface/modal/InterfaceAreaButton.svelte";
  import SiteMenu from "./site-menu/SiteMenu.svelte";
  import SiteToolbar from "./SiteToolbar.svelte";

  // EVENTS ---------------------------------------------

  modals.open("siteMenu");


</script>

<!-- MARKUP //////////////////////////////////// -->
<InterfaceAreaButton />
<div class="interface-area center" class:open={$siteMenuModal}>
  
  <div class="stable-overflow center">

    <div class="interface-container">
      <SiteMenu />
    </div>

    <SiteToolbar />

  </div>
</div>

<!-- STYLES ////////////////////////////////////// -->
<style>
:global(.interface-area-button) {
  position: fixed;
  /* width: 25px;
  height: 25px;
  top: calc((var(--vph)/2) - 25px); */
  top: 0;
  width: 40px;
  height: var(--vph);
  background-color: hsl(var(--hue1), 100%, 0%, 0.8);
  color: white;
  z-index: 1;
  padding-right: 0.4%;
  transition-property: background-color, color;
  transition-duration: 1s;
  transition-timing-function: ease-in;
}
:global(.interface-area-button.open) {
  background-color: transparent;
  color: black;
}
:global(.interface-area-button svg) {
  width: 80%;
}
.interface-area {
  position: relative;
  transition-property: max-width;
  transition-timing-function: ease-out;
  transition-duration: 0.5s;
  overflow:hidden;
  max-width: 0;
  background-color: hsl(var(--hue1), 100%, 50%, 0.8);
  opacity: 0;
  animation: fadeIn 3s 5s ease-out forwards;
}
.interface-area.open {
  max-width: var(--iaw);
}
.stable-overflow {
  position: relative;
  width: var(--iaw);
  height: var(--vph);
}
</style>