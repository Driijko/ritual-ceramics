<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------
  import { currentTab } from "../../../../data/siteMenuTabsStore";

</script>

<!-- MARKUP ///////////////////////////////////////// -->
<ul class="site-menu-breadcrumbs">
  <li>{$currentTab}</li>
</ul>


<!-- STYLE ////////////////////////////////////////// -->
<style>
ul {
  display: flex;
  align-items: center;
}
li {
  color: hsl(var(--hue1), 100%, 95%);
}
</style>