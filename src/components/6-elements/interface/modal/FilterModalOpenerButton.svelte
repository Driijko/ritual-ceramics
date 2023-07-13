<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------------
  import { modals } from "../../../../data/modalsStore";
  import FilterIcon from "../../icons/interface/FilterIcon.svelte";

</script>

<!-- MARKUP /////////////////////////////////////////// -->
<button type="button" class="filter-modal-opener-button" 
  on:click={()=>modals.open("filter")}
>
  <FilterIcon />
</button>