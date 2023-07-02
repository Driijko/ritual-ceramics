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
        each: 0.2,
      },
      duration: 3,
      attr: {r: 0},
      delay: 2,
    });
    gsap.from([".about-page h1", ".about-page .scroll-indicator-container"], {
      opacity: 0,
      delay: 6,
      duration: 3
    });
  });
</script>

<!-- MARKUP //////////////////////////////////////// -->
<header class="center">
  <svg id="svg3" viewBox="0 0 1600 900" preserveAspectRatio="none">
    <circle cx="0" cy="0" r="100" opacity="0.5" />
    <circle cx="0" cy="900" r="100" opacity="0.5" />
    <circle cx="1600" cy="0" r="100" opacity="0.5" />
    <circle cx="1600" cy="900" r="100" opacity="0.5" />
    <circle cx="100" cy="125" r="100" opacity="0.6" />
    <circle cx="100" cy="775" r="100" opacity="0.6" />
    <circle cx="1500" cy="125" r="100" opacity="0.6" />
    <circle cx="1500" cy="775" r="100" opacity="0.6" />
    <circle cx="200" cy="250" r="150" opacity="0.7" />
    <circle cx="200" cy="650" r="150" opacity="0.7" />
    <circle cx="1400" cy="250" r="150" opacity="0.7" />
    <circle cx="1400" cy="650" r="150" opacity="0.7" />
    <circle cx="400" cy="350" r="200" opacity="0.8" />
    <circle cx="400" cy="550" r="200" opacity="0.8" />
    <circle cx="1200" cy="350" r="200" opacity="0.8" />
    <circle cx="1200" cy="550" r="200" opacity="0.8" />
    <circle cx="800" cy="450" r="400" opacity="0.8" />
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
    font-size: calc(var(--cw)/20);
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