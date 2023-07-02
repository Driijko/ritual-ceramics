<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import DownAngle from "../../../6-elements/icons/arrows/DownAngle.svelte";
</script>
<!-- MARKUP //////////////////////////////////////// -->
<header class="center">
  <svg id="svg3" viewBox="0 0 900 1600" preserveAspectRatio="none">
    <circle cx="450" cy="200" r="100" opacity="0.5" />
    <circle cx="450" cy="400" r="200" opacity="0.6" />
    <circle cx="450" cy="600" r="300" opacity="0.7" />
    <circle cx="450" cy="800" r="400" opacity="0.8" />
    <circle cx="450" cy="1000" r="300" opacity="0.7" />
    <circle cx="450" cy="1200" r="200" opacity="0.6" />
    <circle cx="450" cy="1400" r="100" opacity="0.5" />
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
  border: 4px solid green;
  width: 100%;
  height: 100%;
  flex-direction: column;
}
#svg3 {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  border: 1px solid blue;
}
circle {
  fill: hsl(var(--hue2), 100%, 70%);
}
h1 {
  font-size: calc(var(--cw)/12);
  text-align: center;
}
.scroll-indicator-container {
  position: absolute;
  top: 55%;
  /* border: 4px solid blue; */
  width: 100%;
  height: calc(var(--ch)/12);
}
.scroll-indicator-container :global(svg) {
  width: 100%; 
  height: 100%;
}
</style>