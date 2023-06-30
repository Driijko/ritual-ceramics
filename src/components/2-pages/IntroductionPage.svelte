<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------
  import SnapScroll from "../4-layouts/SnapScroll.svelte";
  import { viewportOrientation } from "../../data/viewportOrientationStore";
  import DownAngle from "../6-elements/icons/arrows/DownAngle.svelte";
  import EnvelopeIcon from "../6-elements/icons/interface/EnvelopeIcon.svelte";
</script>

<!-- MARKUP //////////////////////////////////// -->
<div class="intro-page" 
  class:portrait={$viewportOrientation === "portrait"}
  class:landscape={$viewportOrientation === "landscape"}
>
  <SnapScroll axis="vertical">
    <!-- HEADER ------------------------------ -->
    <header class:portrait={$viewportOrientation === "portrait"}
      class:landscape={$viewportOrientation === "landscape"}
    >
      <h1>Ritual Ceramics: Introduction</h1>
      <img src="./images/pic6.jpg" alt="Pottery." />
      <p>
        Imagine clay as a site,<br/> a place to be and exist in. 
      </p>
      <div class="center">
        <DownAngle />
      </div>
    </header>
    <!-- SECTION 1 ----------------------------------- -->
    <section class="section1"
      class:portrait={$viewportOrientation === "portrait"}
      class:landscape={$viewportOrientation === "landscape"}
    >
      <p>
        Ritual Ceramics is a line of wheel thrown stoneware for everyday use. My pots are minimalist in form and expressive in surface. There are similarities across pots but no two are alike. It pleases me that few objects in my own kitchen match.
      </p>
      <p>
        Each piece tells a story- how it came to be in my home or how it enhances my daily rituals with colour, texture, weight, line and form.
      </p>
      <img src="./images/pic7.jpg" alt="Cup and pitcher."/>
    </section>
    <!-- SECTION 2 -------------------------- -->
    <section class="section2"
      class:portrait={$viewportOrientation === "portrait"}
      class:landscape={$viewportOrientation === "landscape"}
    >
      <p>
        Browse the online shop for a variety of mugs, vases, pour-overs, tea pots, bowls and candle holders.
      </p>
      <a href="shop" class="center">Shop Now</a>
      <div class="center">
        <img src="./images/pic9.jpg" alt="Stack of cups." />
        <img src="./images/pic8.jpg" alt="Collection of bowls." />
        <img src="./images/pic10.jpg" alt="Vase with white flowers." />
      </div>
    </section>
    <!-- SECTION 3------------------------------ -->
    <section class="section3"
      class:portrait={$viewportOrientation === "portrait"}
      class:landscape={$viewportOrientation === "landscape"}
    >
      <p>
        Through ceramic materials and processes, performance, video, and installation, I am interested in blurring notions of self and other, subject and object, the human and non-human. 
      </p>
      <img src="./images/pic11.jpg" alt="Potter working with clay at a potter's wheel." />
      <a href="about" class="center">Learn More</a>
    </section>
    <!-- SECTION 4 -------------------------------- -->
    <section class="section4"
      class:portrait={$viewportOrientation === "portrait"}
      class:landscape={$viewportOrientation === "landscape"}
    >
      <p>
        You can email me blahblah@email.com for questions or commisions.
      </p>
      <a href="mailto:blahblah@email.com" class="center">
        <EnvelopeIcon />
      </a>
      <img src="./images/pic12.jpg" alt="Artist at desk." />
    </section>
    <!-- SECTION 5 -------------------------------- -->
    <section class="section5"
      class:portrait={$viewportOrientation === "portrait"}
      class:landscape={$viewportOrientation === "landscape"}
    >
      <blockquote>
        “Forget your perfect offering<br/>
        There is a crack, a crack in everything<br/>
        That's how the light gets in”<br/>
        <span>- Leonard Cohen</span>
      </blockquote>
      <img src="./images/pic13.jpg" alt="Sculpture." />
    </section>
  </SnapScroll>
</div>


<!-- STYLES /////////////////////////////////// -->
<style>
/* GENERAL ///////////////////////////// */
.intro-page {
  animation: fadeIn 2s 3s ease-out forwards;
  opacity: 0;
}
.intro-page.portrait {
  height: 92%;
}
.intro-page.landscape {
  height: 100%;
}
p, blockquote {
  line-height: 1.5;
}
section {
  display: flex;
  justify-content: center;
  align-items: center;
}
section p, section blockquote {
  background-color: hsl(var(--hue1), 100%, 70%);
  border-color: hsl(var(--hue2), 100%, 10%);
  border-style: solid;
}
section img {
  border-color: hsl(var(--hue2), 100%, 10%);
  border-style: solid;
}
section a {
  background-color: hsl(var(--hue2), 100%, 40%);
  color: hsl(var(--hue2), 100%, 10%);
  border-color: hsl(var(--hue2), 100%, 10%);
  border-style: solid;
  font-weight: 400;
}
/* GENERAL PORTRAIT ----------------------------- */
section.portrait {
  flex-direction: column;
  gap: calc(var(--ch) * 0.02);
}
section.portrait p, section.portrait blockquote {
  padding: 5%;
  border-width: calc(var(--cw)/50);
  font-size: calc(var(--cw)/17);
  width: 100%;
}
section.portrait img {
  border-width: calc(var(--cw)/50);
}
section.portrait a {
  width: calc(var(--cw)/2.5);
  height: calc(var(--ch)/10);
  font-size: calc(var(--cw)/15);
  border-width: calc(var(--cw)/100);
}
/* GENERAL LANDSCAPE ------------------------------- */
section.landscape {
  flex-direction: row;
}
section.landscape p, blockquote {
  font-size: calc(var(--cw)/60);
  width: 35%;
  padding: calc(var(--cw) * 0.04);
  border-width: calc(var(--cw) * 0.005);
}
section.landscape img {
  border-width: calc(var(--cw) * 0.005);
}
section.landscape a {
  width: 15%;
  height: calc(var(--ch)/10);
  font-size: calc(var(--cw)/50);
  border-width: calc(var(--cw)/200);
}
/* HEADER //////////////////////////////////////////////// */
/* HEADER GENERAL ----------------------------------- */
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  width: 100%;
  line-height: 1.3;
}
header p {
  width: 100%;
}
header img {
  width: 100%;
}
header :global(svg) {
  height: 100%;
  fill: hsl(var(--hue1), 100%, 70%)
}
/* HEADER PORTRAIT -------------------------------- */
header.portrait h1, header.portrait p {
  background-color: hsl(var(--hue1), 100%, 70%);
}
header.portrait h1 {
  font-size: calc(var(--cw)/10);
  text-align: center;
  padding: calc(var(--cw)/10);
}
header.portrait p {
  font-size: calc(var(--cw)/15);
  padding: calc(var(--cw)/15);
  text-align: center;
}
header.portrait div {
  height: calc(var(--ch)/10);
  background-color: hsla(var(--hue2), 100%, 10%, 0.5);
  width: 100%;
}
/* HEADER LANDSCAPE --------------------------------------- */
header.landscape h1 {
  font-size: calc(var(--cw)/25);
  padding: calc(var(--cw)/32);
  background-image: linear-gradient(
    90deg,
    hsl(var(--hue1), 100%, 65%),
    hsl(var(--hue1), 100%, 65%),
    hsla(var(--hue1), 100%, 65%, 0.5)
  );
}
header.landscape img {
  height: calc(var(--ch) * 0.3);
  object-fit: cover;
  object-position: 0% 20%;
}
header.landscape p {
  font-size: calc(var(--cw)/50);
  text-align: right;
  padding: calc(var(--ch)/20);
  background-image: linear-gradient(
    90deg,
    hsla(var(--hue1), 100%, 65%, 0.5),
    hsl(var(--hue1), 100%, 65%),
    hsl(var(--hue1), 100%, 65%)
  );
}
header.landscape div{
  width: 100%;
  height: calc(var(--ch) * 0.15);
  background-color: hsla(var(--hue2), 100%, 10%, 0.7);
  padding-top: 1%;
}
/* SECTION 1 PORTRAIT ///////////////////////////////// */
.section1.portrait img {
  display: none;
}
/* SECTION 1 LANDSCAPE ----------------------- */
.section1.landscape {
  position: relative;
  gap: calc(var(--cw)/5);
}
.section1.landscape img {
  position: absolute;
  height: 90%;
  z-index: -1;
}
/* SECTION 2 GENERAL ///////////////////////////////// */
.section2 {
  position: relative;
}
.section2 div {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}
/* SECTION 2 PORTRAIT ----------------------- */
.section2.portrait div img:nth-of-type(2) {
  width: 85%;
}
.section2.portrait div img:nth-of-type(1),
.section2.portrait div img:nth-of-type(3) {
  display: none;
}
/* SECTION 2 LANDSCAPE ---------------------- */
.section2.landscape {
  gap: calc(var(--cw)/100);
}
.section2.landscape div {
  gap: calc(var(--cw)/15);
}
.section2.landscape div img:nth-of-type(2) {
  height: 80%;
}
.section2.landscape div img:nth-of-type(1),
.section2.landscape div img:nth-of-type(3) {
  height: 70%;
}
/* SECTION 3 PORTRAIT ////////////////////////// */
.section3.portrait img {
  height: calc(var(--ch) * 0.4);
}
/* SECTION 3 LANDSCAPE -------------------------- */
.section3.landscape {
  gap: calc(var(--cw)/30);
}
.section3.landscape img {
  height: calc(var(--ch) * 0.7);
}
/* SECTION 4 PORTRAIT /////////////////////// */
.section4.portrait :global(svg) {
  height: 80%;
}
.section4.portrait img {
  height: calc(var(--ch) * 0.4);
}
/* SECTION 4 LANDSCAPE ----------------------- */
.section4.landscape {
  gap: calc(var(--cw)/20);
}
.section4.landscape :global(svg) {
  height: 80%;
}
.section4.landscape img {
  height: calc(var(--ch) * 0.4);
}
/* SECTION 5 PORTRAIT ///////////////////////////////// */
.section5.portrait img {
  width: 100%;
}
/* SECTION 5 LANDSCAPE ---------------------------------- */
.section5.landscape {
  gap: calc(var(--cw)/20);
}
.section5.landscape img {
  width: 50%;
}
/* TRANSITIONS ////////////////////////////////////// */
@media (hover:hover) {
  a {
    transition-property: outline-width, background-color, color, border-color, transform;
    transition-timing-function: ease-out;
    transition-duration: 0.5s;
    outline-color: hsla(var(--hue1), 100%, 70%, 0.8);
    outline-style: solid;
    outline-width: 0;
  }
  .intro-page.portrait a:hover, .intro-page.portrait a:focus-visible {
    outline-width: var(--ch);
  }
  .intro-page.landscape a:hover, .intro-page.landscape a:focus-visible {
    outline-width: var(--cw);
  }
  .intro-page a:hover, .intro-page a:focus-visible {
    transform: scale(1.5);
    background-color: black;
    border-color: hsl(var(--hue2), 100%, 50%);
    color: hsl(var(--hue2), 100%, 50%);
  }
  .section3 a:hover, .section3 a:focus-visible {
    transform: scale(1.5) translateX(calc(var(--cw)/-50));
  }
}
</style>