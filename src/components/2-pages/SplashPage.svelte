<!-- SCRIPTS /////////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------
  import SiteMenuModalOpenerButton 
  from "../6-elements/interface/modal/SiteMenuModalOpenerButton.svelte";
  import { layoutBreakpoint } from "../../data/layoutBreakpointStore";
  import { viewportOrientation } 
  from "../../data/viewportOrientationStore";
</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<h1 class:portrait={$viewportOrientation === "portrait"}
  class:landscape={$viewportOrientation === "landscape"}
>
  <img src={$viewportOrientation === "portrait" ? 
      "./images/pic2.png":
      "./images/pic1.png"
    } 
    alt="Ritual Ceramics: minimalist forms, expressive surfaces" 
  />
  {#if $layoutBreakpoint !== "large-desktop"}
    <SiteMenuModalOpenerButton />
  {/if}
</h1>


<!-- STYLES /////////////////////////////////////////////// -->
<style>
/* GENERAL --------------------------- */
h1 {
  width: 100%;
  height: var(--ch);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: fadeIn 2s 3s ease-out forwards;
  background-color: hsl(var(--hue2), 100%, 50%, 0.3);
  opacity: 0;
}
img {
  width: 100%;
  opacity: 0.9;
}
h1 :global(.site-menu-modal-opener-button) {
  border-style: solid;
  border-color: hsl(var(--hue2), 100%, 50%);
  color: hsl(var(--hue2), 100%, 50%);  
  background-color: hsl(var(--hue2), 100%, 0%);
  animation: fadeIn 4s 5s ease-out forwards;
  opacity: 0;
}
/* PORTRAIT ----------------------------- */
h1.portrait {
  gap: calc(var(--ch)/10);
}
h1.portrait :global(.site-menu-modal-opener-button) {
  width: calc(var(--cw)/4);
  height: calc(var(--cw)/4);
  border-width: calc(var(--cw)/60);
  border-radius: calc(var(--cw)/50);
  padding: calc(var(--cw)/25);
}
/* LANDSCAPE ----------------------------- */
h1.landscape :global(.site-menu-modal-opener-button) {
  position: absolute;
  right: calc(var(--cw)/20);
  width: calc(var(--cw)/13);
  height: calc(var(--cw)/13);
  border-width: calc(var(--cw)/200);
  border-radius: calc(var(--cw)/100);
  padding: calc(var(--cw)/80);
}
/* TRANSITIONS ////////////////////////////////// */
@media (hover:hover) {
  h1 :global(.site-menu-modal-opener-button) {
    transition-property: color, border-color, transform, outline-width;
    transition-duration: 0.4s;
    transition-timing-function: ease-out;
    outline-width: 0;
    outline-color: hsla(var(--hue2), 100%, 50%, 0.5);
    outline-style: solid;
  }
  h1 :global(.site-menu-modal-opener-button:hover),
  h1 :global(.site-menu-modal-opener-button:focus-visible) {
    transform: scale(1.3);
    color: hsl(var(--hue1), 100%, 50%);
    border-color: hsl(var(--hue1), 100%, 50%);
  }
  h1.portrait :global(.site-menu-modal-opener-button:hover),
  h1.portrait :global(.site-menu-modal-opener-button:focus-visible) {
    outline-width: var(--ch);
  }
  h1.landscape :global(.site-menu-modal-opener-button:hover),
  h1.landscape :global(.site-menu-modal-opener-button:focus-visible) {
    outline-width: var(--cw);
  }
}
</style>