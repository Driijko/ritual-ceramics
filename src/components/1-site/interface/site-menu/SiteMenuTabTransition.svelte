<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------
  import shift from "../../../../scripts/transitions/shift";
  import { linear } from "svelte/easing";
  import { getTabPosition, currentTab, prevTab } 
  from "../../../../data/siteMenuTabsStore";

  // REACTIVE -----------------------------------
  $: currentTabPosition = getTabPosition($currentTab);
  $: prevTabPosition = getTabPosition($prevTab);

</script>

<!-- MARKUP ///////////////////////////////////-->
<div class="site-menu-tab"
  in:shift="{{
    x: currentTabPosition < prevTabPosition ? 
      -window.innerWidth : window.innerWidth, 
    duration: 300, 
    delay: 300,
    easing: linear,
  }}"
  out:shift="{{
    x: currentTabPosition < prevTabPosition ? 
      window.innerWidth: -window.innerWidth, 
    duration: 300,
    easing: linear,
  }}"
>
  <slot />
</div>

<!-- STYLES /////////////////////// -->
<style>
div {
  width: 100%;
  height: 100%;
}
</style>