<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------
  import { newPage, currentPage } from "../../../data/currentPageStore";
  import { layoutBreakpoint } from "../../../data/layoutBreakpointStore";
  import { modals, siteMenuModal } from "../../../data/modalsStore";

  // PROPS -------------------------------------------
  export let pageName = "";

  // EVENT HANDLER ------------------------------------
  function handleClick() {
    if (!($currentPage === pageName)) {
      newPage(pageName);
      if ($layoutBreakpoint !== "large-desktop" && $siteMenuModal) {
        modals.close("siteMenu");
      }
    }
  }
</script>

<!-- MARKUP //////////////////////////////////////////// -->
<a href={pageName} on:click|preventDefault={handleClick}>
  <slot />
</a>