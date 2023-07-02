<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------
  import { viewportOrientation }
  from "../../../data/viewportOrientationStore";
  import AboutHeaderPortrait from "./header/AboutHeaderPortrait.svelte";
  import SnapScroll from "../../4-layouts/SnapScroll.svelte";
</script>

<!-- MARKUP //////////////////////////////////////////// -->
<div class="about-page">
  <SnapScroll axis="vertical">
    {#if $viewportOrientation === "portrait"}
      <AboutHeaderPortrait />
    {/if}
  </SnapScroll>
</div>

<!-- STYLES /////////////////////////////////////////// -->
<style>
/* GENERAL /////////////////////////////////////////////// */
.about-page {
  /* border: 4px solid red; */
}
/* PORTRAIT ///////////////////////////////////////////// */
@media screen and (orientation: portrait) {
.about-page {
  height: 92%;
}
}
</style>