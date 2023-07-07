<!-- SCRIPTS ////////////////////////////////// -->
<script>
  import { currentPage } from "../../../data/currentPageStore";
  import SplashPage from "../../2-pages/SplashPage.svelte";
  import IntroductionPage from "../../2-pages/IntroductionPage.svelte";
  import ContactPage from "../../2-pages/ContactPage.svelte";
  import AboutPage from "../../2-pages/about/AboutPage.svelte";
  import ShopPage from "../../2-pages/ShopPage.svelte";

</script>

<!-- MARKUP /////////////////////////////////// -->
{#if $currentPage === "splash"}
  <SplashPage />
{:else if $currentPage === "introduction"}
  <IntroductionPage />
{:else if $currentPage === "about"}
  <AboutPage />
{:else if $currentPage === "shop"}
  <ShopPage />
{:else if $currentPage === "contact"}
  <ContactPage />
{/if}