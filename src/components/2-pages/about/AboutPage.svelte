<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------
  import { viewportOrientation }
  from "../../../data/viewportOrientationStore";
  import { exiting, setPageExit } from "../../../data/currentPageStore";
  import { layoutBreakpoint } from "../../../data/layoutBreakpointStore";
  import AboutHeaderPortrait from "./header/AboutHeaderPortrait.svelte";
  import AboutHeaderLandscape from "./header/AboutHeaderLandscape.svelte";
  import SnapScroll from "../../4-layouts/SnapScroll.svelte";

  // PAGE EXIT -----------------------------------
  setPageExit(()=> {}, 2000);

</script>

<!-- MARKUP //////////////////////////////////////////// -->
<div class="about-page" 
  class:large-desktop={$layoutBreakpoint === "large-desktop"}
  class:exiting={$exiting}
>
  <SnapScroll axis="vertical">
    <!-- HEADER --------------------------- -->
    {#if $viewportOrientation === "portrait"}
      <AboutHeaderPortrait />
    {:else}
      <AboutHeaderLandscape />
    {/if}
    <!-- SECTION 1 ------------------------- -->
    <section class="section1">
      <h2>Krystal Selbee</h2>
      <img src="./images/pic14.jpg" alt="Artist creating mural." />
      <p>I am an interdisciplinary artist working in performance, installation, video, photography and ceramics.</p>
    </section>
    <!-- SECTION 2 ----------------------- -->
    <section class="section2">
      <h2>My Work</h2>
      <img src="./images/pic15.jpg" alt="Performance art." />
      <p>
        My art visibilizes the labour and meaning of a body in diverse and shifting contexts.
      </p>
    </section>
    <!-- SECTION 3 ----------------------- -->
    <section class="section3">
      <h2>Ritual Ceramics</h2>
      <img src="./images/pic16.jpg" alt="Performance art." />
      <p>
        Ritual Ceramics evolved into an ongoing project after I received<br class="landscape-only"/> a certificate in Ceramics from the Fleming Haliburton School of Art & Design in 2021.
      </p>
    </section>
  </SnapScroll>
</div>

<!-- STYLES /////////////////////////////////////////// -->
<style>
/* GENERAL /////////////////////////////////////////////// */
.about-page.exiting {
  animation: fadeOut 2s ease-out forwards;
}
.about-page.large-desktop section {
  background-color: hsla(var(--hue2), 100%, 10%, 0.5);
}
section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
section p {
  line-height: 1.3;
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
/* SECTION 1 & 2:PORTRAIT //////////////////////////////////// */
@media screen and (orientation: portrait) {
  .section1 img, .section2 img {
    width: 100%;
  }
}
/* SECTION 1 & 2: LANDSCAPE ---------------------------------- */
@media screen and (orientation: landscape) {
  .section1 img, .section2 img {
    height: calc(var(--ch)/1.7);
  }
  .section1 img {
    border-left-width: calc(var(--cw)/100);
    align-self: end;
  }
  .section2 img {
    border-right-width: calc(var(--cw)/100);
    align-self: start;
  }
}
/* SECTION 3: GENERAL  //////////////////////////////////*/
.section3 img {
  height: calc(var(--ch)/2.5);
}
/* SECTION 3:PORTRAIT -------------------------------------- */
@media screen and (orientation: portrait) {
  .section3 img {
    border-color: hsl(var(--hue2), 100%, 80%);
    border-style: solid;
    border-left-width: calc(var(--cw)/50);
    border-right-width: calc(var(--cw)/50);
  }
}
/* SECTION 3: LANDSCAPE ---------------------------------- */
@media screen and (orientation: landscape) {
  .section3 img {
    position: relative;
    left: 20%;
    height: calc(var(--ch)/1.7);
    border-right-width: calc(var(--cw)/100);
    border-left-width: calc(var(--cw)/100);
  }
}
</style>