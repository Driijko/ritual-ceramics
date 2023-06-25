<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import SiteMenuTabTransition from "./SiteMenuTabTransition.svelte";
  import Navigation from "./navigation/Navigation.svelte";
  import { currentTab } from "../../../../data/siteMenuTabsStore";
  import SiteSettings from "../../../5-structures/SiteSettings.svelte";
  import ShoppingCart from "./ShoppingCart.svelte";
  
</script>

<!-- MARKUP /////////////////////////////////////////////// -->
<div class="site-menu-tab-container">
  {#if $currentTab === "navigation"}
    <SiteMenuTabTransition>
      <Navigation />
    </SiteMenuTabTransition>
  {:else if $currentTab === "shopping-cart"}
    <SiteMenuTabTransition>
      <ShoppingCart />
    </SiteMenuTabTransition>
  {:else if $currentTab === "background-audio"}
    <SiteMenuTabTransition>
      <SiteSettings />
    </SiteMenuTabTransition>
  {/if}
</div>
