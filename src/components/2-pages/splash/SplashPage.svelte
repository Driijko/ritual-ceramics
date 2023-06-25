<!-- SCRIPTS ///////////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------
  import SplashPortrait from "./SplashPortrait.svelte";
  import SplashLandscape from "./SplashLandscape.svelte";
  import { viewportOrientation } 
  from "../../../data/viewportOrientationStore";
</script>

<!-- MARKUP ////////////////////////////////////////////////// -->
{#if $viewportOrientation === "portrait"}
  <SplashPortrait />
{:else if $viewportOrientation === "landscape"}
  <SplashLandscape />
{/if}