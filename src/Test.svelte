<script>
  import MenuIcon from "./components/6-elements/icons/interface/MenuIcon.svelte";
</script>

<svg viewBox="0 0 1280 400">
  <defs>
    <filter id="filter1" x="0" y="0" width="1280" height="400">
      <feImage xlink:href="./backgrounds/back1-h.jpg" x="0" y="0" width="100%" height="100%" preserveAspectRatio="none" result="BG"></feImage>
      <feBlend in="BG" in2="SourceGraphic" mode="multiply" result="BLENDED_TEXT"></feBlend>
    </filter>
  </defs>
  <g filter="url(#filter1)">
    <rect x="0" y="0" width="1280" height="400" fill="hsl(180, 100%, 7%)" />
    <text x="10" y="200">Ritual Ceramics</text>
    <text x="22" y="270">minimalist forms, expressive surfaces</text>
    <line x1="1100" y1="170" x2="1200" y2="170" />
    <line x1="1100" y1="210" x2="1200" y2="210"  />
    <line x1="1100" y1="250" x2="1200" y2="250"  />
  </g>
</svg>

<style>
svg {
  width: 1280px;
  height: 400px;
}
text {
  font-family: "Josefin Sans", sans-serif;
  fill: hsl(180, 100%, 100%);
}
g text:nth-of-type(1) {
  font-size: 130px;
}
g text:nth-of-type(2) {
  font-size: 45px;
}
line {
  stroke: white;
  stroke-width: 20;
  stroke-linecap: round;
}
</style>