<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { layoutBreakpoint } 
  from "../../data/layoutBreakpointStore";
  import { siteMenuModal } from "../../data/modalsStore";
  import InterfaceArea from "./interface/InterfaceArea.svelte";
  import SiteToolbar from "./interface/SiteToolbar.svelte";
  import SiteMenuModal from "./interface/site-menu/SiteMenuModal.svelte";
  import SiteMenu from "./interface/site-menu/SiteMenu.svelte";

</script>

<!-- MARKUP /////////////////////////////////////// -->
<div class="vp site-layout" 
  class:center={$layoutBreakpoint !== "large-desktop"}
>

  <slot name="background" />

  {#if $layoutBreakpoint !== "large-desktop"}

    <div class="vp" inert={$siteMenuModal}>
      <slot name="content" />
    </div>

    <div class="interface-vp">
      <SiteToolbar />
      <SiteMenuModal >
        <SiteMenu />
      </SiteMenuModal>
    </div>

  {:else if $layoutBreakpoint === "large-desktop"}

    <InterfaceArea />

    <div class="content-area center">
      <div class="content-container">
        <slot name="content" />
      </div>

    </div>
  {/if}

</div>

<!-- STYLES //////////////////////////////////////////// -->
<style>
.site-layout {
  display: flex;
}
.site-layout :global(.interface-area) {
  flex: 2;
}
.content-area {
  flex: 1;
}
.content-container {
  overflow: hidden;
}
</style>