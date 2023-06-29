<!-- SCRIPTS ////////////////////////////////// -->
<script>
  import { currentPage } from "../../../data/currentPageStore";
  import SplashPage from "../../2-pages/SplashPage.svelte";
  import IntroductionPage from "../../2-pages/IntroductionPage.svelte";

</script>

<!-- MARKUP /////////////////////////////////// -->
{#if $currentPage === "splash"}
  <SplashPage />
{:else if $currentPage === "introduction"}
  <IntroductionPage />
{/if}