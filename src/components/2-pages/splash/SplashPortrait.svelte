<!-- SCRIPTS //////////////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------
  import SplashContent from "./SplashContent.svelte";
</script>

<!-- MARKUP ///////////////////////////////////////////////// -->
<div id="page2">
  <SplashContent />
</div>

<!-- STYLES //////////////////////////////////////// -->
<style>
#page2 :global(.site-menu-modal-opener-button) {
  width: 100px;
  height: 100px;
  border-width: calc(var(--cw)/100);
  border-style: solid;
  border-color: hsl(var(--hue1), 100%, 70%);
  border-radius: calc(var(--cw)/100);
  background-color: hsl(var(--hue2), 100%, 5%);
  color: hsl(var(--hue1), 100%, 70%);
  padding: 1%;
}
</style>