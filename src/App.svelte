<!-- SCRIPTS ////////////////////////////////// -->
<script>
  import SiteSettings from "./components/5-structures/SiteSettings.svelte";
  import setUp from "./scripts/setUp";
  import AudioBkg from "./components/1-site/AudioBkg.svelte";
  import {audioBkgLoadPlay} from "./data/audioBkgStore";

  setUp();
</script>

<!-- MARKUP ///////////////////////////////// -->
<AudioBkg />
<button on:click={()=> audioBkgLoadPlay("./audio/background-audio.mp3")}>Click</button>

<!-- STYLES ////////////////////////////////// -->
<style>

</style>