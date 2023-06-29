<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  import { currentPage, exiting } from "../../../data/currentPageStore";
  import FlippableBackground 
  from "../../6-elements/art/FlippableBackground.svelte";
</script>

<!-- MARKUP //////////////////////////////////////// -->
{#if $currentPage === "splash"}
  <div class="background-container" class:exiting={$exiting}>
    <FlippableBackground 
      src={{
        portrait: "./backgrounds/back2-v.jpg",
        landscape: "./backgrounds/back2-h.jpg"
      }} 
    />
  </div>
{:else if $currentPage === "introduction"}
  <div class="background-container" class:exiting={$exiting}>
    <FlippableBackground 
      src={{
        portrait: "./backgrounds/back1-v.jpg",
        landscape: "./backgrounds/back1-h.jpg"
      }} 
    />
  </div>
{/if}

<!-- STYLES ////////////////////////////////////////// -->
<style>
.background-container {
  position: absolute;
  width: 100%;
  height: 100%;
  animation: fadeIn 3s ease-out forwards;
  z-index: -1;
}
.exiting {
  animation: fadeOut 2s ease-out forwards;
}
</style>