<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------
  import { viewportOrientation }
  from "../../../data/viewportOrientationStore";
  import { layoutBreakpoint } from "../../../data/layoutBreakpointStore";
  import AboutHeaderPortrait from "./header/AboutHeaderPortrait.svelte";
  import AboutHeaderLandscape from "./header/AboutHeaderLandscape.svelte";
  import SnapScroll from "../../4-layouts/SnapScroll.svelte";
</script>

<!-- MARKUP //////////////////////////////////////////// -->
<div class="about-page" 
  class:large-desktop={$layoutBreakpoint === "large-desktop"}
>
  <SnapScroll axis="vertical">
    {#if $viewportOrientation === "portrait"}
      <AboutHeaderPortrait />
    {:else}
      <AboutHeaderLandscape />
    {/if}
    <section class="section1">
      <h2>Krystal Selbee</h2>
      <img src="./images/pic14.jpg" alt="Artist creating mural." />
      <p>I am an interdisciplinary artist working in performance, installation, video, photography and ceramics.</p>
    </section>
  </SnapScroll>
</div>

<!-- STYLES /////////////////////////////////////////// -->
<style>
/* GENERAL /////////////////////////////////////////////// */
.about-page.large-desktop section {
  background-color: hsla(var(--hue2), 100%, 10%, 0.5);
}
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.about-page :global(header) {
  /* display: none; */
}
section h2 {
  font-weight: 400;
}
section h2, section p {
  border-style: solid;
  border-color: hsl(var(--hue2), 100%, 85%);
  background-color: hsl(var(--hue2), 100%, 50%);
  width: 100%;
}
/* GENERAL PORTRAIT --------------------------------------- */
@media screen and (orientation: portrait) {
.about-page {
  height: 92%;
}
section h2 {
  font-size: calc(var(--cw)/12);
}
section h2, section p {
  padding: calc(var(--cw)/20);
  border-top-width: calc(var(--cw)/50);
  border-bottom-width: calc(var(--cw)/50);
}
section p {
  font-size: calc(var(--cw)/15);
}
}
/* GENERAL LANDSCAPE --------------------------------- */
@media screen and (orientation: landscape) {
  .about-page {
    height: 100%;
  }
  section h2 {
    font-size: calc(var(--cw)/33);
    padding: calc(var(--cw)/100);
    border-bottom-width: calc(var(--cw)/100);
    border-top-width: calc(var(--cw)/100);
  }
  section p {
    font-size: calc(var(--cw)/55);
    padding: calc(var(--cw)/50);
    border-top-width: calc(var(--cw)/100);
    border-bottom-width: calc(var(--cw)/100);
  }
  section img {
    border-style: solid;
    border-color: hsl(var(--hue2), 100%, 85%);
  }
}
/* SECTION 1:PORTRAIT //////////////////////////////////// */
@media screen and (orientation: portrait) {
  .section1 img {
    width: 100%;
  }
}
/* SECTION 1: LANDSCAPE ---------------------------------- */
@media screen and (orientation: landscape) {
  .section1 img {
    height: calc(var(--ch)/1.7);
    object-position: 100% 100%;
    object-fit: contain;
    /* width: 100%; */
    border-left-width: calc(var(--cw)/100);
    align-self: end;
  }
}

</style>