<!-- SCRIPTS /////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------
  import { layoutBreakpoint } from "../../../../data/layoutBreakpointStore";
  import SiteMenuTabs from "./SiteMenuTabs.svelte";
  import SiteMenuBreadcrumbs from "./SiteMenuBreadcrumbs.svelte";
  import SiteMenuButtons from "./SiteMenuButtons.svelte";
  
</script>

<!-- MARKUP /////////////////////////////////// -->
<div class="site-menu" 
  class:portrait={$layoutBreakpoint !== "small-desktop"}
  class:landscape={$layoutBreakpoint === "small-desktop"}
>
  <header>
    <h1>Ritual Ceramics</h1>
    <h2>minimalist forms, expressive surfaces</h2>
  </header>

  <SiteMenuBreadcrumbs />

  <SiteMenuTabs />

  <SiteMenuButtons />
</div>



<!-- STYLES ///////////////////////////////////// -->
<style>
.site-menu {
  position: absolute;
  pointer-events: initial;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  background-color: white;
}

/* GENERAL ----------------------------------------- */
header {
  height: 10%;
  display: flex;
  background-color: hsl(var(--hue1), 100%, 70%);
  padding-left: 1%;
}
.site-menu :global(.site-menu-breadcrumbs) {
  background-color: hsl(var(--hue1), 100%, 50%);
  color: white;
  padding-left: 1%;
}
.site-menu :global(.site-menu-tab-container) {
  width: 100%;
  height: 78.8%;
  background-color: green;
}
.site-menu :global(.site-menu-tab) {
  width: 100%;
  height: 100%;
}
.site-menu :global(.site-menu-buttons) {
  height: 8%;
  background-color: lightgrey;
  display: flex;
}
.site-menu :global(.tab-buttons) {
  display: flex;
  background-color: lightblue;
  width: 88%;
  gap: 4%;
}
.site-menu :global(.tab-buttons li) {
  height: 100%;
  width: 20%;
}
.site-menu :global(.tab-buttons button) {
  border: 1px solid blue;
  width: 100%;
  height: 90%;
  border-radius: 0 0 50% 50%;  
  padding-bottom: 5%;
}
.site-menu :global(.tab-buttons svg) {
  width: 31%;
}

/* PORTRAIT ---------------------------------------- */
.site-menu.portrait header {
  flex-direction: column;
  justify-content: center;
  gap: calc(var(--iw)/100);
}
.site-menu.portrait h1 {
  font-size: calc(var(--iw)/14);
}
.site-menu.portrait h2 {
  font-size: calc(var(--iw)/19);
}
.site-menu.portrait :global(.site-menu-breadcrumbs) {
  height: 3.2%;
  font-size: calc(var(--iw)/19.3);
}
.site-menu.portrait :global(.site-menu-modal-closer-button) {
  border: 1px solid blue;
  width: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5%;
}
/* LANDSCAPE --------------------------------------- */
.site-menu.landscape header {
  align-items: center;
  gap: calc(var(--iw)/50);
}
.site-menu.landscape h1 {
  font-size: calc(var(--iw)/30);
}
.site-menu.landscape h2 {
  font-size: calc(var(--iw)/60);
}
.site-menu.landscape :global(.site-menu-breadcrumbs) {
  display: flex;
  align-items: center;
  height: 3%;
  font-size: calc(var(--iw)/80);
  letter-spacing: calc(var(--iw)/1000);
}
.site-menu.landscape :global(.site-menu-breadcrumbs li) {
  padding-right: calc(var(--iw) * 0.005);
}
.site-menu.landscape :global(.site-menu-modal-closer-button) {
  position: absolute;
  width: calc(var(--iw) * 0.057);
  height: calc(var(--iw) * 0.057);
  top: 0%;
  left: 94.3%;
  padding: calc(var(--iw) * 0.01);
}
/* HOVER/FOCUS TRANSITIONS ------------------------------ */
@media (hover:hover) {
  .site-menu :global(.site-menu-modal-closer-button svg) {
    transition-property: transform;
    transition-timing-function: ease-out;
    transition-duration: 0.3s;
  }
  .site-menu :global(.site-menu-modal-closer-button:hover svg),
  .site-menu :global(.site-menu-modal-closer-button:focus-visible svg) {
    transform: scale(1.3);
  }
  .site-menu :global(.site-menu-modal-closer-button:focus-visible) {
    outline: calc(var(--iw) * 0.01) solid hsla(0, 0%, 50%, 0.5);
  }
}
</style>