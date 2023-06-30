<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------
  import SnapScroll from "../4-layouts/SnapScroll.svelte";
  import DownAngle from "../6-elements/icons/arrows/DownAngle.svelte";
  import EnvelopeIcon from "../6-elements/icons/interface/EnvelopeIcon.svelte";
  import PageLink from "../6-elements/interface/PageLink.svelte";
  import { setPageExit, exiting } from "../../data/currentPageStore";

  // PAGE EXIT -------------------------------------
  setPageExit(()=> {},2000);

</script>

<!-- MARKUP //////////////////////////////////// -->
<div class="intro-page" class:exit={$exiting}>
  <SnapScroll axis="vertical">
    <!-- HEADER ------------------------------ -->
    <header>
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
    <section class="section1">
      <p>
        Ritual Ceramics is a line of wheel thrown stoneware for everyday use. My pots are minimalist in form and expressive in surface. There are similarities across pots but no two are alike. It pleases me that few objects in my own kitchen match.
      </p>
      <p>
        Each piece tells a story- how it came to be in my home or how it enhances my daily rituals with colour, texture, weight, line and form.
      </p>
      <img src="./images/pic7.jpg" alt="Cup and pitcher."/>
    </section>
    <!-- SECTION 2 -------------------------- -->
    <section class="section2">
      <p>
        Browse the online shop for a variety of mugs, vases, pour-overs, tea pots, bowls and candle holders.
      </p>
      <PageLink pageName="shop">Shop Now</PageLink>
      <div class="center">
        <img src="./images/pic9.jpg" alt="Stack of cups." />
        <img src="./images/pic8.jpg" alt="Collection of bowls." />
        <img src="./images/pic10.jpg" alt="Vase with white flowers." />
      </div>
    </section>
    <!-- SECTION 3------------------------------ -->
    <section class="section3">
      <p>
        Through ceramic materials and processes, performance, video, and installation, I am interested in blurring notions of self and other, subject and object, the human and non-human. 
      </p>
      <img src="./images/pic11.jpg" alt="Potter working with clay at a potter's wheel." />
      <PageLink pageName="about">Learn More</PageLink>
    </section>
    <!-- SECTION 4 -------------------------------- -->
    <section class="section4">
      <p>
        You can email me blahblah@email.com for questions or commisions.
      </p>
      <a href="mailto:blahblah@email.com" class="center">
        <EnvelopeIcon />
      </a>
      <img src="./images/pic12.jpg" alt="Artist at desk." />
    </section>
    <!-- SECTION 5 -------------------------------- -->
    <section class="section5">
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
/* GENERAL ////////////////////////////////////////////////////// */
.intro-page {
  animation: fadeIn 2s 3s ease-out forwards;
  opacity: 0;
}
.intro-page.exit {
  animation: fadeOut 2s ease-out forwards;
}
section {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
p, blockquote {
  line-height: 1.5;
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
section :global(a) {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(var(--hue2), 100%, 40%);
  color: hsl(var(--hue2), 100%, 10%);
  border-color: hsl(var(--hue2), 100%, 10%);
  border-style: solid;
  font-weight: 400;
}
/* GENERAL PORTRAIT --------------------- */
@media screen and (orientation:portrait) {
.intro-page {
  height: 92%;
}
section {
  flex-direction: column;
  gap: calc(var(--ch) * 0.02);
}
section p, section blockquote {
  padding: 5%;
  border-width: calc(var(--cw)/50);
  font-size: calc(var(--cw)/17);
  width: 100%;
}
section img {
  border-width: calc(var(--cw)/50);
}
section :global(a) {
  width: calc(var(--cw)/2.5);
  height: calc(var(--ch)/10);
  font-size: calc(var(--cw)/15);
  border-width: calc(var(--cw)/100);
}
}
/* GENERAL LANDSCAPE --------------------------- */
@media screen and (orientation: landscape) {
.intro-page {
  height: 100%;
}
section {
  flex-direction: row;
}
section p, blockquote {
  font-size: calc(var(--cw)/60);
  width: 35%;
  padding: calc(var(--cw) * 0.04);
  border-width: calc(var(--cw) * 0.005);
}
section img {
  border-width: calc(var(--cw) * 0.005);
}
section :global(a) {
  width: 15%;
  height: calc(var(--ch)/10);
  font-size: calc(var(--cw)/50);
  border-width: calc(var(--cw)/200);
}
}

/* HEADER GENERAL /////////////////////////////////////////////// */
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
@media screen and (orientation:portrait) {
header h1, header p {
  background-color: hsl(var(--hue1), 100%, 70%);
}
header h1 {
  font-size: calc(var(--cw)/10);
  text-align: center;
  padding: calc(var(--cw)/10);
}
header p {
  font-size: calc(var(--cw)/15);
  padding: calc(var(--cw)/15);
  text-align: center;
}
header div {
  height: calc(var(--ch)/10);
  background-color: hsla(var(--hue2), 100%, 10%, 0.5);
  width: 100%;
}
}
/* HEADER LANDSCAPE ---------------------------------- */
@media screen and (orientation:landscape) {
header h1 {
  font-size: calc(var(--cw)/25);
  padding: calc(var(--cw)/32);
  background-image: linear-gradient(
    90deg,
    hsl(var(--hue1), 100%, 65%),
    hsl(var(--hue1), 100%, 65%),
    hsla(var(--hue1), 100%, 65%, 0.5)
  );
}
header img {
  height: calc(var(--ch) * 0.3);
  object-fit: cover;
  object-position: 0% 20%;
}
header p {
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
header div{
  width: 100%;
  height: calc(var(--ch) * 0.15);
  background-color: hsla(var(--hue2), 100%, 10%, 0.7);
  padding-top: 1%;
}
}

/* SECTION 1 PORTRAIT /////////////////////////////////////////////// */
@media screen and (orientation: portrait) {
.section1 img {
  display: none;
}
}
/* SECTION 1 LANDSCAPE ----------------------- */
@media screen and (orientation: landscape) {
.section1 {
  position: relative;
  gap: calc(var(--cw)/5);
}
.section1 img {
  position: absolute;
  height: 90%;
  z-index: -1;
}
}

/* SECTION 2 GENERAL ///////////////////////////////////////////// */
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
@media screen and (orientation: portrait) {
.section2 div img:nth-of-type(2) {
  width: 85%;
}
.section2 div img:nth-of-type(1),
.section2 div img:nth-of-type(3) {
  display: none;
}
}
/* SECTION 2 LANDSCAPE ---------------------- */
@media screen and (orientation: landscape) {
.section2 {
  gap: calc(var(--cw)/100);
}
.section2 div {
  gap: calc(var(--cw)/15);
}
.section2 div img:nth-of-type(2) {
  height: 80%;
}
.section2 div img:nth-of-type(1),
.section2 div img:nth-of-type(3) {
  height: 70%;
}
}

/* SECTION 3 PORTRAIT ///////////////////////////////////////// */
@media screen and (orientation: portrait) {
.section3 img {
  height: calc(var(--ch) * 0.37);
}
}
/* SECTION 3 LANDSCAPE -------------------------- */
@media screen and (orientation: landscape) {
.section3 {
  gap: calc(var(--cw)/30);
}
.section3 img {
  height: calc(var(--ch) * 0.7);
}
}

/* SECTION 4 PORTRAIT /////////////////////////////////////// */
@media screen and (orientation: portrait) {
.section4 :global(svg) {
  height: 80%;
}
.section4 img {
  height: calc(var(--ch) * 0.4);
}
}
/* SECTION 4 LANDSCAPE ----------------------- */
@media screen and (orientation: landscape) {
.section4 {
  gap: calc(var(--cw)/20);
}
.section4 :global(svg) {
  height: 80%;
}
.section4 img {
  height: calc(var(--ch) * 0.4);
}
}

/* SECTION 5 PORTRAIT ////////////////////////////////////////// */
@media screen and (orientation: portrait) {
.section5 img {
  width: 100%;
}
}
/* SECTION 5 LANDSCAPE ---------------------------------- */
@media screen and (orientation: landscape) {
.section5 {
  gap: calc(var(--cw)/20);
}
.section5 blockquote {
  width: 36%;
}
.section5 img {
  width: 50%;
}
}

/* TRANSITIONS GENERAL  ////////////////////////////////////// */
@media (hover:hover) {
  .intro-page :global(a) {
    transition-property: outline-width, background-color, color, border-color, transform;
    transition-timing-function: ease-out;
    transition-duration: 0.5s;
    outline-color: hsla(var(--hue1), 100%, 70%, 0.8);
    outline-style: solid;
    outline-width: 0;
  }
  .intro-page :global(a:hover),
  .intro-page :global(a:focus-visible) {
    transform: scale(1.5);
    background-color: black;
    border-color: hsl(var(--hue2), 100%, 50%);
    color: hsl(var(--hue2), 100%, 50%);
  }
  .section3 :global(a:hover), .section3 :global(a:focus-visible) {
    transform: scale(1.5) translateX(calc(var(--cw)/-50));
  }
}
/* TRANSITIONS PORTRAIT ----------------------------- */
@media screen and (orientation:portrait) and (hover:hover) {
.intro-page :global(a:hover), 
.intro-page :global(a:focus-visible) {
  outline-width: var(--ch);
}
}
/* TRANSITIONS LANDSCAPE ------------------------- */
@media screen and (orientation: landscape) and (hover:hover) {
.intro-page :global(a:hover),
.intro-page :global(a:focus-visible) {
  outline-width: var(--cw);
}
}
</style>