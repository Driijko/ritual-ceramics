<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------------
  import { viewportOrientation }
  from "../../../data/viewportOrientationStore";

  // PROPS -------------------------------------------------
  export let src = {
    portrait: "",
    landscape: "",
  };

</script>

<!-- MARKUP //////////////////////////////////////////// -->
<div style="
  background-image: url({
    $viewportOrientation === "portrait" ? src.portrait: src.landscape
  })"
></div>

<!-- STYLES //////////////////////////////////////////// -->
<style>
div {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: 150% 150%;
  background-position: 0% 0%;
  animation: backgroundShift 30s linear infinite;
  z-index: -1;
}
</style>