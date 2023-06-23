<!-- SCRIPTS ////////////////////////////////// -->
<script>
  import SiteSettings from "./components/5-structures/SiteSettings.svelte";
  import setUp from "./scripts/setUp";
  import AudioBkg from "./components/1-site/AudioBkg.svelte";
  import OpeningPromptPage from "./components/2-pages/OpeningPromptPage.svelte";
  import {audioBkgLoadPlay} from "./data/audioBkgStore";

  setUp();
</script>

<!-- MARKUP ///////////////////////////////// -->
<AudioBkg />
<OpeningPromptPage />



<!-- STYLES ////////////////////////////////// -->
<style>

</style>