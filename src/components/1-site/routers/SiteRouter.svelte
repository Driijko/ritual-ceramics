<!-- SCRIPTS ///////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------
  import { currentPage } from "../../../data/currentPageStore";
  import LoadingPage from "../../2-pages/LoadingPage.svelte";
  // import SiteLayout from "../SiteLayout.svelte";
  // import BackgroundRouter from "./BackgroundRouter.svelte";
  // import ContentRouter from "./ContentRouter.svelte";
  import AudioBkg from "../AudioBkg.svelte";
  import OpeningPromptPage from "../../2-pages/OpeningPromptPage.svelte";

</script>

<!-- MARKUP ////////////////////////////////////////////// -->
<AudioBkg />
{#if $currentPage === "loading"}
  <LoadingPage />
{:else if $currentPage === "opening-prompt"}
  <OpeningPromptPage />
{:else if $currentPage === "splash"}
  <p>SPlash!</p>
{:else}
  <!-- <SiteLayout>
    <BackgroundRouter slot="background" />
    <ContentRouter slot="content" />
  </SiteLayout> -->
{/if}