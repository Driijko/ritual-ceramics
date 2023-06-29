<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
function fullscreen(state) {
  if (state) {
    if(document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();        // W3C spec
    }
    else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();     // Firefox
    }
    else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();  // Safari
    }
    else if(document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();      // IE/Edge
    }
  }
  else if (!state) {
    if(document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}
</script>

<!-- MARKUP //////////////////////////////////// -->
<button on:click={()=> fullscreen(true)}>
  <!-- <svg viewBox="0 0 5999 3999">
    <filter id="filter1">
      <feImage x="0" y="0" width="5999" height="3999" result="IMAGE" xlink:href="./backgrounds/pic3.jpg" />
      <feBlend mode="multiply" in="SourceGraphic" in2="IMAGE" />
    </filter>
    <rect x="0" y="0" width="100%" height="100%" fill="hsl(37, 100%, 72%)" filter="url(#filter1)" />
    <rect x="0" y="0" width="100%" height="100%" fill="hsl(37, 59%, 62%)" filter="url(#filter1)" />
  </svg> -->
  <img src="./backgrounds/pic3.jpg" alt="test" />
</button>

<!-- STYLES ////////////////////////////////////// -->
<style>
  button {
    width: 100vw;
    height: var(--viewport-height);
    padding: 0%;
  }
  /* svg {
    width: 78%;
    height: 100%;
    padding: 1%;
  }
  rect {
    width: 100%;
  } */
  img {
    width: 85%;
    /* height: 100%; */
    filter: hue-rotate(180deg) grayscale(0.3) brightness(1) contrast(1);
  }
</style>