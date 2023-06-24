<!-- SCRIPTS ////////////////////////////////// -->
<script>
  import { currentPage } from "../../../data/currentPageStore";
  import SplashPage from "../../2-pages/splash/SplashPage.svelte";

</script>

<!-- MARKUP /////////////////////////////////// -->
{#if $currentPage === "splash"}
  <SplashPage />
{/if}