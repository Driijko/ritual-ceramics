<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import DownAngle from "../../../6-elements/icons/arrows/DownAngle.svelte";
  import { gsap } from "gsap";
  import { onMount } from "svelte";

  // ANIMATIONS -------------------------------------
  onMount(()=> {
    gsap.from("#svg3 circle", {
      stagger: {
        each: 0.5,
      },
      duration: 2,
      attr: {r: 0},
      delay: 2,
    });
    gsap.from([".about-page h1", ".about-page .scroll-indicator-container"], {
      opacity: 0,
      delay: 4,
      duration: 3
    });
  });
</script>
<!-- MARKUP //////////////////////////////////////// -->
<header class="center">
  <svg id="svg3" viewBox="0 0 900 1600" preserveAspectRatio="none">
    <circle cx="450" cy="200" r="100" opacity="0.5" />
    <circle cx="450" cy="1400" r="100" opacity="0.5" />
    <circle cx="450" cy="400" r="200" opacity="0.6" />
    <circle cx="450" cy="1200" r="200" opacity="0.6" />
    <circle cx="450" cy="600" r="300" opacity="0.7" />
    <circle cx="450" cy="1000" r="300" opacity="0.7" />
    <circle cx="450" cy="800" r="400" opacity="0.8" />
  </svg>
  <h1>About Ritual Ceramics</h1>
  <div class="scroll-indicator-container center">
    <DownAngle />
  </div>
</header>

<!-- STYLES /////////////////////////////////////////// -->
<style>
header {
  position: relative;
  width: 100%;
  height: 100%;
  flex-direction: column;
}
#svg3 {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
}
circle {
  fill: hsl(var(--hue2), 100%, 70%);
  stroke-width: 20;
  stroke: hsl(var(--hue2), 100%, 90%);
}
h1 {
  font-size: calc(var(--cw)/12);
  text-align: center;
}
.scroll-indicator-container {
  position: absolute;
  top: 55%;
  width: 100%;
  height: calc(var(--ch)/12);
}
.scroll-indicator-container :global(svg) {
  width: 100%; 
  height: 100%;
}
</style>