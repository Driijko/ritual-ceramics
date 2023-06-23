<!-- SCRIPTS /////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { audioBkgPaused } from "../../data/audioBkgStore";
  import AudioBkgCheckbox 
  from "../6-elements/interface/audio-bkg/AudioBkgCheckbox.svelte";
  import AudioBkgVolumeSlider 
  from "../6-elements/interface/audio-bkg/AudioBkgVolumeSlider.svelte";

</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<div class="site-settings">
  <label for="audio-option">
    Background Audio
    <AudioBkgCheckbox />
  </label>
  <label for="volume" class:visible={!($audioBkgPaused)} class="volume-adjust">
    Adjust volume to your preference:
    <AudioBkgVolumeSlider />
  </label>
</div>

<!-- STYLES ////////////////////////////////////////// -->
<style>
  .volume-adjust {
    transform: scaleY(0);
    transition: transform 0.3s ease-out;
  }
  .volume-adjust.visible, .volume-adjust:focus-within {
    transform: scaleY(1);
  }
</style>