<!-- SCRIPTS ///////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------
  // import { layoutBreakpoint } 
  // from "../../../../../data/dynamic/layoutBreakpointStore";
  // import NavigationPortrait from "./NavigationPortrait.svelte";
  // import NavigationLandscape from "./NavigationLandscape.svelte";
  import { newPage } from "../../../../../data/currentPageStore";
</script>

<!-- MARKUP /////////////////////////////////// -->
<!-- {#if $layoutBreakpoint !== "small-desktop"}
  <NavigationPortrait />
{:else if $layoutBreakpoint === "small-desktop"}
  <NavigationLandscape />
{/if} -->
<ul>
  <li>
    <a href="./introduction" 
      on:click|preventDefault={()=> newPage("introduction")}
    >
      Introduction
    </a>
  </li>
  <li>
    <a href="./shop" 
      on:click|preventDefault={()=> newPage("shop")}
    >
      Shop
    </a>
  </li>
  <li>
    <a href="./about" 
      on:click|preventDefault={()=> newPage("about")}
    >
      About
    </a>
  </li>
  <li>
    <a href="./contact" 
      on:click|preventDefault={()=> newPage("contact")}
    >
      Contact
    </a>
  </li>
</ul>