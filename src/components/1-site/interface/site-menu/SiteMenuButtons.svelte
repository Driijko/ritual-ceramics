<!-- SCRIPTS /////////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------------
  import SiteMenuModalCloserButton 
  from "../../../6-elements/interface/modal/SiteMenuModalCloserButton.svelte";
  import CompassIcon 
  from "../../../6-elements/icons/interface/CompassIcon.svelte";
  import MusicIcon 
  from "../../../6-elements/icons/interface/MusicIcon.svelte";
  import ShoppingCartIcon 
  from "../../../6-elements/icons/interface/ShoppingCartIcon.svelte";
  import PenToSquareIcon 
  from "../../../6-elements/icons/interface/PenToSquareIcon.svelte";
  import { newTab, currentTab } from "../../../../data/siteMenuTabsStore";
  import { layoutBreakpoint } from "../../../../data/layoutBreakpointStore";

  // LOCAL STATE ----------------------------------------
</script>

<!-- MARKUP //////////////////////////////////////////// -->
<div class="site-menu-buttons">
  <ul class="tab-buttons" 
    class:full-width={$layoutBreakpoint !== "mobile"}
  >
    <li>
      <button type="button" class="center" 
        inert={$currentTab === "navigation"}
        class:current={$currentTab === "navigation"}
        on:click={()=> newTab("navigation") }
      >
        <CompassIcon />
      </button>
    </li>
    <li>
      <button type="button" class="center shop-tab-button"
        inert={$currentTab === "shopping-cart"}
        class:current={$currentTab === "shopping-cart"}
        on:click={()=> newTab("shopping-cart") }
      >
        <ShoppingCartIcon /><output>(0)</output>
      </button>
    </li>
    <li>
      <button type="button" class="center"
        inert={$currentTab === "background-audio"}
        class:current={$currentTab === "background-audio"}
        on:click={()=> newTab("background-audio") }
      >
        <MusicIcon />
      </button>
    </li>
    <li>
      <button type="button" class="center"
        inert={$currentTab === "web-design"}
        class:current={$currentTab === "web-design"}
        on:click={()=> newTab("web-design") }
      >
        <PenToSquareIcon />
      </button>
    </li>
  </ul>
  {#if $layoutBreakpoint === "mobile"}
    <SiteMenuModalCloserButton />
  {/if}
</div>