<!-- SCRIPTS ////////////////////////////////// -->
<script>
  import SiteSettings from "./components/5-structures/SiteSettings.svelte";
  import setUp from "./scripts/setUp";
  import AudioBkg from "./components/1-site/AudioBkg.svelte";
  import OpeningPromptPage from "./components/2-pages/OpeningPromptPage.svelte";
  import {audioBkgLoadPlay} from "./data/audioBkgStore";
  import SiteRouter from "./components/1-site/routers/SiteRouter.svelte";
  import Test from "./Test.svelte";
  import { currentTab, prevTab, getTabPosition, newTab } from "./data/siteMenuTabsStore";

  setUp();
</script>

<!-- MARKUP ///////////////////////////////// -->
<SiteRouter />
<!-- <Test /> -->
<!-- <p>
  {$currentTab}
</p>
<p>
  {$prevTab}
</p>
<p>
  current tab position: {getTabPosition($currentTab)}
</p>
<p>
  prev tab position: {getTabPosition($prevTab)}
</p>
<button on:click={()=> newTab("navigation")} >nav</button>
<button on:click={()=> newTab("shopping-cart")} >shop</button>
<button on:click={()=> newTab("background-audio")} >audio</button>
<button on:click={()=> newTab("web-design")} >web-design</button> -->

<!-- STYLES ////////////////////////////////// -->
<style>

</style>