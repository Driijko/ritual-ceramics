<!-- SCRIPTS ///////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------
  import { layoutBreakpoint } 
  from "../../../../data/layoutBreakpointStore";
  import { newPage } from "../../../../data/currentPageStore";
</script>

<!-- MARKUP /////////////////////////////////// -->
<ul class:small-desktop={$layoutBreakpoint === "small-desktop"}
  class:portrait={$layoutBreakpoint !== "small-desktop"}
>
  <div class="background"></div>
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

<!-- STYLES //////////////////////////////////// -->
<style>
ul {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.background {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("./images/pic5.jpg");
  background-size: cover;
  background-position: 50% 50%;
  left: 0;
  z-index: 1;
  opacity: 0.5;
}
ul.portrait {
  align-items: center;
  gap: calc(var(--iw)/5);
}
ul.small-desktop {
  padding-left: calc(var(--iw)/100);
  gap: calc(var(--iw)/15);
}
ul.portrait a {
  font-size: calc(var(--iw)/13);
}
ul.small-desktop li {
  width: fit-content;
}
ul.small-desktop a {
  font-size: calc(var(--iw)/50);
}
li {
  z-index: 2;
}
/* TRANSITIONS //////////////////////////////////////// */
@media (hover:hover) {
  ul.small-desktop a {
    transform-origin: 0% 50%;
  }
  a {
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
    display: block;
  }
  a:hover, a:focus-visible {
    transform: scale(1.5);
    text-decoration: underline;
  }
}
</style>