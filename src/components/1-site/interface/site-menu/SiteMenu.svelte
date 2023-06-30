<!-- SCRIPTS /////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------
  import { layoutBreakpoint } from "../../../../data/layoutBreakpointStore";
  import SiteMenuTabs from "./SiteMenuTabs.svelte";
  import SiteMenuBreadcrumbs from "./SiteMenuBreadcrumbs.svelte";
  import SiteMenuButtons from "./SiteMenuButtons.svelte";
  import SiteMenuModalCloserButton 
  from "../../../6-elements/interface/modal/SiteMenuModalCloserButton.svelte";
  
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

  {#if $layoutBreakpoint === "small-desktop"}
    <SiteMenuModalCloserButton />
  {/if}
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
  display: flex;
  align-items: center;
}
.site-menu :global(.site-menu-tab) {
  width: 100%;
  height: 100%;
  background-color: hsl(var(--hue2), 100%, 85%);
  border-color: hsl(var(--hue2), 100%, 10%);
  border-style: solid;
}
.site-menu :global(.site-menu-buttons) {
  display: flex;
  width: 100%;
}
.site-menu :global(.tab-buttons) {
  display: flex;
  gap: 4%;
  width: 88%;
}
.site-menu :global(.tab-buttons.full-width) {
  width: 100%;
  justify-content: space-around;
}
.site-menu :global(.tab-buttons li) {
  height: 100%;
}
.site-menu :global(.tab-buttons button) {
  background-color: hsl(var(--hue2), 100%, 75%);
  width: 100%;
  height: 90%;
  border-radius: 0 0 50% 50%;  
}
.site-menu :global(.tab-buttons button.current) {
  background-color: hsl(var(--hue2), 100%, 10%);
  color: hsl(var(--hue1), 100%, 70%);
}
.site-menu :global(.site-menu-modal-closer-button) {
  background-color: black;
  color: hsl(var(--hue1), 100%, 50%);
  border-style: solid;
  border-color: hsl(var(--hue1), 100%, 50%);
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
  padding-left: calc(var(--iw)/150);
}
.site-menu.portrait :global(.site-menu-breadcrumbs) {
  height: 3.5%;
  font-size: calc(var(--iw)/19.3);
  padding-left: calc(var(--iw)/40);
  padding-top: calc(var(--iw)/150);
}
.site-menu.portrait :global(.site-menu-tab) {
  border-width: calc(var(--iw)/100);
}
.site-menu.portrait :global(.site-menu-tab-container) {
  height: 78.5%;
}
.site-menu.portrait :global(.site-menu-buttons) {
  height: 8%;
}
.site-menu.portrait :global(.tab-buttons li) {
  width: 20%;
}
.site-menu.portrait :global(.tab-buttons button) {
  height: 90%;
  padding-bottom: 5%;
}
.site-menu.portrait :global(.tab-buttons button svg) {
  width: 35%;
  max-width: 60px;
}
.site-menu.portrait :global(.shop-tab-button) {
  font-size: calc(var(--iw)/22);
  gap: calc(var(--iw)/100);
}
.site-menu.portrait :global(.tab-buttons .shop-tab-button svg) {
  width: 30%;
}
.site-menu.portrait :global(.site-menu-modal-closer-button) {
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.7%;
  border-width: calc(var(--iw)/100);
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
  height: 4.5%;
  font-size: calc(var(--iw)/50);
  letter-spacing: calc(var(--iw)/1000);
  padding-left: calc(var(--iw)/80);
  padding-top: calc(var(--iw)/1000);
}
.site-menu.landscape :global(.site-menu-tab) {
  border-width: calc(var(--iw)/400);
}
.site-menu.landscape :global(.site-menu-tab-container) {
  height: 74.5%;
}
.site-menu.landscape :global(.site-menu-buttons) {
  height: 11%;
}
.site-menu.landscape :global(.tab-buttons li) {
  width: 15%;
}
.site-menu.landscape :global(.tab-buttons button) {
  height: 80%;
  padding-bottom: 1%;
}
.site-menu.landscape :global(.tab-buttons button svg) {
  width: 23%;
}
.site-menu.landscape :global(.shop-tab-button) {
  font-size: calc(var(--iw)/50);
  gap: calc(var(--iw)/100);
}
.site-menu.landscape :global(.tab-buttons .shop-tab-button svg) {
  width: 20%;
}
.site-menu.landscape :global(.site-menu-modal-closer-button) {
  position: absolute;
  width: calc(var(--iw) * 0.063);
  height: calc(var(--iw) * 0.063);
  top: 0%;
  left: 93.6%;
  padding: calc(var(--iw) * 0.01);
  border-width: calc(var(--iw)/200);
}
/* SITE SETTINGS ////////////////////////////////////// */
/* GENERAL ----------------------------------- */
.site-menu :global(.site-settings) {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.site-menu :global(.site-settings label) {
  display: flex;
  align-items: center;
}
.site-menu :global(.site-settings input[type="checkbox"]) {
  transition-property: border-radius, background-color;
  transition-duration: 0.5s;
  transition-timing-function: ease-out;
  border-style: solid;
  border-color: hsl(var(--hue2), 100%, 10%);
}
.site-menu :global(.site-settings input[type="checkbox"]:checked) {
  border-radius: 50% !important;
  background-color: hsl(var(--hue1), 100%, 40%) !important;
}
.site-menu :global(input[type="range"]::-webkit-slider-runnable-track) {
  background-color: hsl(var(--hue1), 100%, 60%);
  border-style: solid;
  border-color: hsl(var(--hue2), 100%, 10%);
  height: 100%;
  border-radius: 50px;
}
.site-menu :global(input[type="range"]::-moz-range-track) { 
  background-color: hsl(var(--hue1), 100%, 60%);
  border-style:solid;
  border-color: hsl(var(--hue2), 100%, 10%);
  border-width: 5px;
  height: 80%;
}
.site-menu :global(input[type="range"]::-webkit-slider-thumb) {
  background-color: hsl(var(--hue1), 100%, 40%);
  border-style: solid;
  border-color: hsl(var(--hue2), 100%, 10%);
  border-radius: 50%;
}
.site-menu.portrait :global(input[type="range"]::-moz-range-thumb) {
  background-color: hsl(var(--hue1), 100%, 40%);
  border-style: solid;
  border-color: hsl(var(--hue2), 100%, 10%);
  border-radius: 50%;
}
/* SITE SETTINGS: PORTRAIT ----------------------------- */
.site-menu.portrait :global(.site-settings) {
  gap: calc(var(--iw)/5);
}
.site-menu.portrait :global(.site-settings label) {
  font-size: calc(var(--iw)/14);
  gap: calc(var(--iw)/10);
  background-color: hsl(var(--hue1), 100%, 70%);
  width: 100%;
  display: flex;
  justify-content: center;
  height: calc(var(--ih) * 0.25);
  border-top-width: calc(var(--ih)/100);
  border-bottom-width: calc(var(--ih)/100);
  border-style: solid;
  border-color: hsl(var(--hue2), 100%, 10%);
}
.site-menu.portrait :global(.site-settings input[type="checkbox"]) {
  width: calc(var(--iw)/7);
  height: calc(var(--iw)/7);
  border-width: calc(var(--iw)/80);
  border-radius: calc(var(--iw)/100);
  background-color: hsl(var(--hue1), 100%, 60%);
}
.site-menu.portrait :global(.site-settings .volume-adjust) {
  flex-direction: column;
  font-size: calc(var(--iw)/16);
}
.site-menu.portrait :global(input[type="range"]) {
  width: 75%;
  height: calc(var(--iw)/17);
}
.site-menu.portrait :global(input[type="range"]::-webkit-slider-runnable-track) {
  border-width: calc(var(--iw)/100);
}
.site-menu.portrait :global(input[type="range"]::-moz-range-track) { 
  border-radius: 50px;
}
.site-menu.portrait :global(input[type="range"]::-webkit-slider-thumb) {
  border-width: calc(var(--iw)/60);
  width: calc(var(--iw)/10);
  height: calc(var(--iw)/10);
  margin-top: calc(var(--iw)/-31); 
}
.site-menu.portrait :global(input[type="range"]::-moz-range-thumb) {
  border-width: 5px;
  width: 15%;
  height: 40%;
  margin-top: -4.8%; 
}
/* SITE SETTINGS: LANDSCAPE -------------------- */
.site-menu.landscape :global(.site-settings) {
  gap: calc(var(--iw)/10);
  background-image: linear-gradient(
    90deg,
    hsl(var(--hue2), 100%, 70%),
    hsl(var(--hue1), 100%, 70%)
  );
}
.site-menu.landscape :global(.site-settings label) {
  font-size: calc(var(--iw)/50);
  gap: calc(var(--iw)/50);
}
.site-menu.landscape :global(.site-settings .volume-adjust) {
  gap: calc(var(--iw)/30);
}
.site-menu.landscape :global(.site-settings input[type="checkbox"]) {
  width: calc(var(--iw)/30);
  height: calc(var(--iw)/30);
  border-width: calc(var(--iw)/300);
  border-radius: calc(var(--iw)/200);
}
.site-menu.landscape :global(input[type="range"]) {
  width: calc(var(--iw)/4);
  height: calc(var(--iw)/75);
}
.site-menu.landscape :global(input[type="range"]::-webkit-slider-runnable-track) {
  border-width: calc(var(--iw)/300);
  height: 100%;
}
.site-menu.landscape :global(input[type="range"]::-moz-range-track) { 
  border-width: 5px;
  height: 80%;
}
.site-menu.landscape :global(input[type="range"]::-webkit-slider-thumb) {
  border-width: calc(var(--iw)/250);
  width: calc(var(--iw)/35);
  height: calc(var(--iw)/35);
  margin-top: calc(var(--iw)/-90); 
}
.site-menu.landscape :global(input[type="range"]::-moz-range-thumb) {
  border-width: 5px;
  width: 15%;
  height: 40%;
  margin-top: -4.8%; 
}
/* WEB DESIGN TAB /////////////////////////////////////////// */
/* WEB DESIGN: GENERAL ---------------------------------------- */
.site-menu :global(.web-design-tab) {
  display: flex;
  justify-content: center;
  height: 100%;
}
.site-menu :global(.web-design-tab > div) {
  display: flex;
  justify-content: center;
}
.site-menu :global(.web-design-tab div:nth-of-type(2)) {
  flex-direction: column;
}
.site-menu :global(.web-design-tab p) {
  line-height: 1.5;
}
.site-menu :global(.web-design-tab a) {
  padding: 0.5rem;
}
/* WEB DESIGN: PORTRAIT -------------------------------------- */
.site-menu.portrait :global(.web-design-tab) {
  flex-direction: column;
  gap: calc(var(--ih)/30);
  background-color: black;
  color: hsl(300, 100%, 60%);
}
.site-menu.portrait :global(.web-design-tab div:nth-of-type(1)) {
  width: 100%;
  height: calc(var(--ih) * 0.2);
  padding: calc(var(--iw)/20);
}
.site-menu.portrait :global(.web-design-tab img) {
  height: 100%;
}
.site-menu.portrait :global(.web-design-tab div:nth-of-type(2)) {
  padding: 0 calc(var(--iw)/10);
}
.site-menu.portrait :global(.web-design-tab p) {
  line-height: 1.5;
  margin-bottom: calc(var(--iw)/15);
  font-size: calc(var(--iw)/19);
}
/* WEB DESIGN: LANDSCAPE -------------------------------------- */
.site-menu.landscape :global(.web-design-tab) {
  justify-content: center;
}
.site-menu.landscape :global(.web-design-tab > div) {
  width: 50%;
}
.site-menu.landscape :global(.web-design-tab div:nth-of-type(1)) {
  width: 50%;
  padding: calc(var(--iw)/20);
  background-color: black;
}
.site-menu.landscape :global(.web-design-tab img) {
  width: 100%;
  object-fit: contain;
}
.site-menu.landscape :global(.web-design-tab div:nth-of-type(2)) {
  gap: calc(var(--ih)/20);
  padding: 0 calc(var(--iw)/20);
  background-color: hsl(var(--hue2), 100%, 10%);
  color: white;
}
.site-menu.landscape :global(.web-design-tab p) {
  font-size: calc(var(--iw)/50);
}
/* HOVER/FOCUS TRANSITIONS /////////////////////////////////////// */
@media (hover:hover) {
  /* MODAL CLOSER BUTTON ----------------------------- */
  .site-menu :global(.site-menu-modal-closer-button) {
    transition-property: border-color, color, background-color;
    transition-timing-function: ease-out;
    transition-duration: 1s;
  }
  .site-menu :global(.site-menu-modal-closer-button:hover),
  .site-menu :global(.site-menu-modal-closer-button:focus-visible) {
    border-color: black;
    color: black;
    background-color: white;
  }
  .site-menu :global(.site-menu-modal-closer-button svg) {
    transition-property: transform;
    transition-timing-function: ease-out;
    transition-duration: 0.3s;
  }
  .site-menu :global(.site-menu-modal-closer-button:hover svg),
  .site-menu :global(.site-menu-modal-closer-button:focus-visible svg) {
    transform: scale(1.5);
  }
  .site-menu :global(.site-menu-modal-closer-button:focus-visible) {
    outline: calc(var(--iw) * 0.01) solid hsla(0, 0%, 50%, 0.5);
  }
  /* TAB BUTTONS ------------------------------------- */
  .site-menu :global(.tab-buttons button) {
    transition-property: background-color, color;
    transition-timing-function: ease-out;
    transition-duration: 0.5s;
  }
  .site-menu :global(.tab-buttons button:hover),
  .site-menu :global(.tab-buttons button:focus-visible) {
    background-color: hsl(var(--hue2), 100%, 30%);
    color: hsl(0, 0%, 100%);
  }
  /* WEB DESIGN LINKS ----------------------------- */
  .site-menu :global(.web-design-tab a:hover),
  .site-menu :global(.web-design-tab a:focus-visible) {
    background-color: black;
    text-decoration: none;
    color: hsl(var(--hue1), 100%, 70%);
  }
}
</style>