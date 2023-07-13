<!-- SCRIPTS /////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------
  import { layoutBreakpoint } from "../../../data/layoutBreakpointStore";
  import SiteMenuModalOpenerButton 
  from "../../6-elements/interface/modal/SiteMenuModalOpenerButton.svelte";
  import { siteMenuModal } from "../../../data/modalsStore";
  import { currentPage } from "../../../data/currentPageStore";
  import InstagramIcon from "../../6-elements/icons/InstagramIcon.svelte";
  import shift from "../../../scripts/transitions/shift";
  import { linear } from "svelte/easing";
  import SortModalOpenerButton 
  from "../../6-elements/interface/modal/SortModalOpenerCloserButton.svelte";
  import FilterModalOpenerButton 
  from "../../6-elements/interface/modal/FilterModalOpenerButton.svelte";
</script>

<!-- MARKUP /////////////////////////////////////// -->
{#if $currentPage !== "splash"}
  <div class="site-toolbar" 
  in:shift="{{
    y: $layoutBreakpoint !== "small-desktop" ? 
      window.innerHeight * 0.2 : -window.innerWidth * 0.2, 
    duration: 1000, 
    easing: linear,
  }}"
    class:mobile={$layoutBreakpoint !== "small-desktop"}
    class:desktop={$layoutBreakpoint === "small-desktop"}
    inert={$siteMenuModal && ($layoutBreakpoint !== "large-desktop")}
  >
    {#if $currentPage === "shop"}
      <SortModalOpenerButton />
      <FilterModalOpenerButton />
    {:else}
      <a href="https://instagram.com/ktalselbee?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer" class="center">
        <InstagramIcon />
      </a>
    {/if}
    {#if $layoutBreakpoint !== "large-desktop" || $currentPage === "shop"}
      <SiteMenuModalOpenerButton />
    {/if}
  </div>
{/if}

<!-- STYLES ///////////////////////////////////// -->
<style>
.site-toolbar {
  position: absolute;
  display: flex;
  pointer-events: initial;
}
.site-toolbar {
  color: white;
}
a :global(svg), .site-toolbar :global(button svg) {
  height: 100%;
}
/* MOBILE ----------------------------- */
.site-toolbar.mobile {
  background-color: black;
  width: 100%;
  height: 8%;
  top: 92%;
  justify-content: center;
  align-items: center;
  gap: calc(var(--iw)/10);
}
.site-toolbar.mobile :global(button) {
  width: 15%;
  height: 60%;
}
.site-toolbar.mobile a {
  width: 15%;
  height: 70%;
}
/* DESKTOP --------------------------- */
.site-toolbar.desktop {
  top: 0%;
  right: 0%;
  gap: calc(var(--cw)/100);
}
.site-toolbar.desktop :global(button),
.site-toolbar.desktop a {
  background-color: black;
  width: calc(var(--iw) * 0.05);
  height: calc(var(--iw) * 0.05);
}
.site-toolbar.desktop :global(button) {
  padding: calc(var(--iw) * 0.012);
}
.site-toolbar.desktop a {
  padding: calc(var(--iw) * 0.008);
}
/* HOVER/FOCUS TRANSITIONS ----------------------------- */
@media (hover:hover) {
  .site-toolbar :global(svg) {
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  .site-toolbar :global(button:hover svg),
  .site-toolbar :global(button:focus-visible svg),
  a:hover :global(svg), a:focus-visible :global(svg) {
    transform: scale(1.3);
  }
  .site-toolbar :global(button:focus-visible) {
    outline: calc(var(--iw) * 0.01) solid hsla(0, 0%, 50%, 0.5);
  }
}
</style>