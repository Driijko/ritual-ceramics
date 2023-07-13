<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------------
  import { modals } from "../../../../data/modalsStore";
  import SortIcon from "../../icons/interface/SortIcon.svelte";

</script>

<!-- MARKUP /////////////////////////////////////////// -->
<button type="button" class="sort-modal-opener-button" 
  on:click={()=>modals.toggle("sort")}
>
  <SortIcon />
</button>