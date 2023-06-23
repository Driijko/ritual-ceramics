<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------
  import SiteSettings from "../5-structures/SiteSettings.svelte";

  // ANIMATION --------------------------------------------------

  // EVENT HANDLERS -----------------------------------
  function handleClick(e) {
    e.preventDefault();

  }
</script>

<!-- MARKUP ////////////////////////////////////////// -->
<div id="page1" class="vp">
  <div class="opening-prompt-content">
    <p>Welcome to Ritual Ceramics.</p>
    <p>
      For the fullest experience,<br/> turning on background audio<br/> is recommended.
    </p>
    <SiteSettings />
    <a href="splash-page" on:click={handleClick}>Ready</a>
  </div>
</div>



<!-- STYLES ////////////////////////////////////////// -->
<style>
#page1 {
  display: flex;
  justify-content: center;
}
.opening-prompt-content {
  font-size: 21px;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  gap: calc(var(--vph) * 0.02);
}
@media screen and (min-height: 480px) {
  .opening-prompt-content {
    gap: 40px;
  }
}
p {
  line-height: 1.5;
}
#page1 :global(.site-settings) {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
#page1 :global(.site-settings label:nth-of-type(1)) {
  display: flex;
  align-items: center;
  gap: 30px;
  font-weight: 400;
  font-size: 20px;
}
#page1 :global(input[type="checkbox"]) {
  border: 3px solid black;
  height: 50px;
  width: 50px;
  border-radius: 7px;
}
#page1 :global(.volume-adjust) {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
#page1 :global(input[type="range"]) {
  width: 200px;
  height: 50px;
  padding: 15px;
}
#page1 :global(input[type="range"]::-webkit-slider-runnable-track) {
  background-color: transparent;
  border-style: solid;
  border-color: black;
  border-width: 3px;
  height: 14px;
  border-radius: 50px;
}
#page1 :global(input[type="range"]::-moz-range-track) { 
  background-color: transparent;
  border-style:solid;
  border-color: black;
  border-width: 5px;
  height: 80%;
  border-radius: 50px;
}
#page1 :global(input[type="range"]::-webkit-slider-thumb) {
  background-color: grey; 
  border-style: solid;
  border-color: black;
  border-width: 3px;
  border-radius: 50px;
  width: 25px;
  height: 25px;
  margin-top: -9px; 
}
#page1 :global(input[type="range"]::-moz-range-thumb) {
  background-color: grey;
  border-style: solid;
  border-color: black;
  border-width: 5px;
  border-radius: 50px;
  width: 15%;
  height: 40%;
  margin-top: -4.8%; 
}
a {
  border: 3px solid black;
  text-align: center;
  padding: 7px 0 3px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  width: 120px;
  align-self: center;
  font-weight: 400;
}
</style>