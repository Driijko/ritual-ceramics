<!-- SCRIPTS //////////////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------
  import { audioBkgAdjustVolume, audioBkgVolume } 
  from "../../../../data/audioBkgStore";

  // PROPS ----------------------------------
  export let axis = "horizontal";

  // EVENT HANDLERS ------------------------
  function handleInput(e) {audioBkgAdjustVolume(e.target.value);};

</script>

<!-- MARKUP ////////////////////////////////////////////// -->
<input type="range" class:vertical={axis === "vertical"} class="audio-bkg-volume-slider"
  min="0.00" max="1.00" step="0.01" 
  value="{$audioBkgVolume}" on:input={handleInput} 
/>