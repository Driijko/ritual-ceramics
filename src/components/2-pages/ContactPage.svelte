<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import EnvelopeIcon 
  from "../6-elements/icons/interface/EnvelopeIcon.svelte";

  // ANIMATION ---------------------------------
  onMount(()=> {
    const tl = gsap.timeline();
    tl.from("#svg2 path", {
      stagger: { 
        each: 0.1,
        from: "center",
      },
      duration: 10,
      ease: "power4.out",
      attr: {d: "M0,0Q0,450,0,900"},
      strokeWidth: 0,
    },0);
    tl.to("#svg2 path", {
      strokeDasharray: "10 20",
      duration: 50,
    },0);
  });
</script>

<!-- MARKUP /////////////////////////////////////////// -->
<div class="contact-page">
  <svg id="svg2" viewBox="0 0 1600 900" >
    <path d="M 0,0 Q100,450 0,900"  ></path>
    <path d="M 0,0 Q144,450 0,900"  ></path>
    <path d="M 0,0 Q196,450 0,900"  ></path>
    <path d="M 0,0 Q256,450 0,900"  ></path>
    <path d="M 0,0 Q324,450 0,900"  ></path>
    <path d="M 0,0 Q400,450 0,900"  ></path>
    <path d="M 0,0 Q484,450 0,900"  ></path>
    <path d="M 0,0 Q576,450 0,900"  ></path>
    <path d="M 0,0 Q676,450 0,900"  ></path>
    <path d="M 0,0 Q784,450 0,900"  ></path>
    <path d="M 0,0 Q900,450 0,900"  ></path>
    <path d="M 0,0 Q1024,450 0,900"  ></path>
    <path d="M 0,0 Q1156,450 0,900"  ></path>
    <path d="M 0,0 Q1296,450 0,900"  ></path>
    <path d="M 0,0 Q1444,450 0,900"  ></path>
    <path d="M 0,0 Q1600,450 0,900"  ></path>
    <path d="M 0,0 Q1764,450 0,900"  ></path>
    <path d="M 0,0 Q1936,450 0,900"  ></path>
    <path d="M 0,0 Q2116,450 0,900"  ></path>
    <path d="M 0,0 Q2304,450 0,900"  ></path>
    <path d="M 0,0 Q2500,450 0,900"  ></path>
    <path d="M 0,0 Q2704,450 0,900"  ></path>
    <path d="M 0,0 Q2916,450 0,900"  ></path>
    <path d="M 0,0 Q3136,450 0,900"  ></path>
  </svg>
  <address>
    <p>For questions or commisions,<br/> you can email me at blahblah@gmail.com</p>
    <a href="mailto:blahblah@gmail.com" class="center">
      <EnvelopeIcon />
    </a>
  </address>
</div>

<!-- STYLES /////////////////////////////////// -->
<style>
/* GENERAL /////////////////////////////////////////////// */
.contact-page {
  height: 100%;
}
svg {
  position: absolute;
  background-color: hsl(var(--hue2), 100%, 80%);
  z-index: -1;
}
path {
  fill: hsla(var(--hue1), 100%, 50%, 0.15);
  stroke-width: 10;
  stroke: hsla(var(--hue2), 100%, 50%, 1);
  stroke-dasharray: 10 10;
  stroke-linecap: round;
}
address {
  width: 100%;
  height: 100%;
  flex-direction: column;
  color: hsl(var(--hue2), 100%, 80%);
  display: flex;
}
p {
  line-height: 1.5;
}
a {
  border-color: hsl(var(--hue2), 100%, 80%);
  border-style: solid;
}
/* PORTRAIT ------------------------------------ */
@media screen and (orientation: portrait) {
svg {
  transform-origin: 50% 50%;
  transform: rotate(90deg) translate(calc(var(--cw)), calc(var(--cw)/1.5)) scale(1.3);
  height: 100%;
}
address {
  padding: calc(var(--cw) * 0.05);
  gap: calc(var(--ch)/10);
  align-items: center;
  text-align: center;
  justify-content: flex-start;
  padding-top: calc(var(--ch)/10);
}
p {
  font-size: calc(var(--cw)/14);
}
a {
  border-width: calc(var(--cw)/150);
  width: calc(var(--cw)/3);
  height: calc(var(--ch)/10);
  border-radius: calc(var(--cw)/50);
}
a :global(svg) {
  width: 50%;
}
}
/* LANDSCAPE ----------------------------------- */
@media screen and (orientation: landscape) {
.contact-page {
  display: flex;
  align-items: center;
  justify-content: center;
}
address {
  width: 100%;
  gap: calc(var(--ch)/10);
  padding-left: calc(var(--cw)/20);
  justify-content: center;
}
p {
  font-size: calc(var(--cw)/50);
}
a {
  border-width: calc(var(--cw)/400);
  width: calc(var(--cw)/10);
  height: calc(var(--ch)/10);
  border-radius: calc(var(--cw)/200);
}
a :global(svg) {
  height: 80%;
}
}
/* TRANSITIONS GENERAL ////////////////////////////// */
@media (hover:hover) {
  a {
    transition-property: background-color, color, border-color, transform, outline-width;
    transition-timing-function: ease-out;
    transition-duration: 0.5s;
    outline-width: 0;
    outline-style: solid;
    outline-color: hsla(var(--hue2), 100%, 50%, 0.5);
  }
  a:hover, a:focus-visible {
    background-color: black;
    border-color: hsl(var(--hue2), 100%, 50%);
    color: hsl(var(--hue2), 100%, 50%);
    transform: scale(1.5);
  }
}
/* TRANSITIONS PORTRAIT ------------------------------- */
@media screen and (orientation: portrait) and (hover:hover) {
  a:hover, a:focus-visible {
    outline-width: var(--ch);
  }
}
/* TRANSITIONS LANDSCAPE ------------------------------- */
@media screen and (orientation: landscape) and (hover:hover) {
  a:hover, a:focus-visible {
    outline-width: var(--cw);
  }
}
</style>