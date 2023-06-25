<!-- SCRIPTS /////////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------
  import FlippableBackground 
  from "../../6-elements/art/FlippableBackground.svelte";
  import SiteMenuModalOpenerButton 
  from "../../6-elements/interface/modal/SiteMenuModalOpenerButton.svelte";
</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<FlippableBackground 
  src={{
    portrait: "./backgrounds/back1-v.jpg",
    landscape: "./backgrounds/back1-h.jpg"
  }} 
/>
<SiteMenuModalOpenerButton />

<!-- STYLES /////////////////////////////////////////////// -->
<style>

</style>