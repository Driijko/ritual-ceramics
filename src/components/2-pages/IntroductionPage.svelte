<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------
  import SnapScroll from "../4-layouts/SnapScroll.svelte";
  import { viewportOrientation } from "../../data/viewportOrientationStore";
  import DownAngle from "../6-elements/icons/arrows/DownAngle.svelte";
</script>

<!-- MARKUP //////////////////////////////////// -->
<SnapScroll axis="vertical">
  <header class:portrait={$viewportOrientation === "portrait"}
    class:landscape={$viewportOrientation === "landscape"}
  >
    <h1>Ritual Ceramics</h1>
    <img src="./images/pic6.jpg" alt="Pottery." />
    <p>
      Imagine clay as a site,<br/> a place to be and exist in. 
    </p>
    <div class="center">
      <DownAngle />
    </div>
  </header>
  <section>
    Hello
  </section>
</SnapScroll>

<!-- STYLES /////////////////////////////////// -->
<style>
:global(.snap-scroll) {
  height: 92%;
}
/* HEADER //////////////////////////////////////////////// */
/* HEADER GENERAL ----------------------------------- */
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1, p {
  background-color: hsl(var(--hue1), 100%, 70%);
  width: 100%;
}
p {
  line-height: 1.5;
}
header img {
  width: 100%;
}
header p {
  text-align: center;
}

header :global(svg) {
  height: 100%;
  fill: hsl(var(--hue1), 100%, 70%)
}

/* HEADER PORTRAIT -------------------------------- */
header.portrait h1 {
  font-size: calc(var(--cw)/10);
  text-align: center;
  padding: calc(var(--cw)/10);
}
header.portrait p {
  font-size: calc(var(--cw)/15);
  padding: calc(var(--cw)/15);
  margin-bottom: calc(var(--ch)/10);
}
header.portrait div {
  height: calc(var(--ch)/10);
  background-color: hsla(var(--hue2), 100%, 10%, 0.5);
  width: 100%;
}
</style>