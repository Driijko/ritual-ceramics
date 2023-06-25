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
  import { newTab } from "../../../../data/siteMenuTabsStore";
</script>

<!-- MARKUP //////////////////////////////////////////// -->
<div class="site-menu-buttons">
  <ul class="tab-buttons">
    <li>
      <button type="button" class="center"
        on:click={()=> newTab("navigation") }
      >
        <CompassIcon />
      </button>
    </li>
    <li>
      <button type="button" class="center"
        on:click={()=> newTab("shopping-cart") }
      >
        <ShoppingCartIcon /><output>(0)</output>
      </button>
    </li>
    <li>
      <button type="button" class="center"
        on:click={()=> newTab("background-audio") }
      >
        <MusicIcon />
      </button>
    </li>
    <li>
      <button type="button" class="center"
        on:click={()=> newTab("web-design") }
      >
        WD
      </button>
    </li>
  </ul>
  <SiteMenuModalCloserButton />
</div>