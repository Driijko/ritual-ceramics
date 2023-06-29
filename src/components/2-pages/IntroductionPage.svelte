<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------
  import SnapScroll from "../4-layouts/SnapScroll.svelte";
  import { viewportOrientation } from "../../data/viewportOrientationStore";
  import DownAngle from "../6-elements/icons/arrows/DownAngle.svelte";
</script>

<!-- MARKUP //////////////////////////////////// -->
<div class="intro-page" 
  class:portrait={$viewportOrientation === "portrait"}
  class:landscape={$viewportOrientation === "landscape"}
>
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
</div>


<!-- STYLES /////////////////////////////////// -->
<style>
.intro-page.portrait {
  height: 92%;
}
.intro-page.landscape {
  height: 100%;
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
  width: 100%;
}
p {
  line-height: 1.5;
}
header img {
  width: 100%;
}
header :global(svg) {
  height: 100%;
  fill: hsl(var(--hue1), 100%, 70%)
}
/* HEADER PORTRAIT -------------------------------- */
header.portrait h1, header.portrait p {
  background-color: hsl(var(--hue1), 100%, 70%);
}
header.portrait h1 {
  font-size: calc(var(--cw)/10);
  text-align: center;
  padding: calc(var(--cw)/10);
}
header.portrait p {
  font-size: calc(var(--cw)/15);
  padding: calc(var(--cw)/15);
  margin-bottom: calc(var(--ch)/10);
  text-align: center;
}
header.portrait div {
  height: calc(var(--ch)/10);
  background-color: hsla(var(--hue2), 100%, 10%, 0.5);
  width: 100%;
}
/* HEADER LANDSCAPE --------------------------------------- */
header.landscape h1 {
  font-size: calc(var(--cw)/25);
  padding: calc(var(--cw)/32);
  background-image: linear-gradient(
    90deg,
    hsl(var(--hue1), 100%, 65%),
    hsl(var(--hue1), 100%, 65%),
    hsla(var(--hue1), 100%, 65%, 0.5)
  );
}
header.landscape img {
  height: calc(var(--ch) * 0.3);
  object-fit: cover;
  object-position: 0% 20%;
}
header.landscape p {
  font-size: calc(var(--cw)/50);
  text-align: right;
  padding: calc(var(--ch)/20);
  background-image: linear-gradient(
    90deg,
    hsla(var(--hue1), 100%, 65%, 0.5),
    hsl(var(--hue1), 100%, 65%),
    hsl(var(--hue1), 100%, 65%)
  );
  /* margin-bottom: calc(var(--ch) * 0.01) */
}
header.landscape div{
  width: 100%;
  height: calc(var(--ch) * 0.15);
  background-color: hsla(var(--hue2), 100%, 10%, 0.7);
  /* border-radius: 50%; */
  padding-top: 1%;
}
</style>