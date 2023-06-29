<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  import { currentPage } from "../../../data/currentPageStore";
  import FlippableBackground 
  from "../../6-elements/art/FlippableBackground.svelte";
</script>

<!-- MARKUP //////////////////////////////////////// -->
{#if $currentPage === "splash"}
  <div class="background-container">
    <FlippableBackground 
      src={{
        portrait: "./backgrounds/back2-v.jpg",
        landscape: "./backgrounds/back2-h.jpg"
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
  animation: fadeIn 3s ease-in forwards;
}
</style>