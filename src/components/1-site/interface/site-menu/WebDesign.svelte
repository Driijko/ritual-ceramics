<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------
import { layoutBreakpoint } from "../../../../data/layoutBreakpointStore";
import { newPage } from "../../../../data/currentPageStore";
</script>

<div class="web-design-tab">
  <div>
    <img src={$layoutBreakpoint === "small-desktop" ? "./icons/dreeko-logo-medium.png": "./icons/dreeko-logo-small.png"} alt="Dreeko" />
  </div>
  <div>
    <p>
      This website was created by Dreeko, a web developer/designer, animator and musician living in Toronto, Canada.
    </p>
    <p>
      To see more of their work, check out their <a href="https://driijko.github.io/dreeko-dev" target="_blank" rel="noopener noreferrer">portfolio site</a>.
    </p>
    <p>
      For more details on the technology and design of this site, <a href="web-design" on:click|preventDefault={()=> newPage("web-design")}>click here</a>.
    </p>
  </div>
</div>