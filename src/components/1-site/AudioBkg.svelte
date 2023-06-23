<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------
  import { onMount } from "svelte";
  import { audioBkgPath, audioBkgPaused, audioBkgVolume, audioBkgPlayAfterLoad } 
  from "../../data/audioBkgStore";

  // ELEMENT REFERENCE ----------------------------------
  let audioBkgElement;

  // EVENT HANDLERS -------------------------------------
  function handleLoadedData(e) {
    if ($audioBkgPlayAfterLoad) {
      e.target.play();
    };
  };

  // EVENT LISTENERS ---------------------------------
  onMount(()=> {
    audioBkgElement.addEventListener("loadeddata", handleLoadedData);

    return ()=> {
      audioBkgElement.removeEventListener("loadeddata", handleLoadedData);
    };
  });

  // REACTIVE -------------------------------------------
  $: if (audioBkgElement) {
    audioBkgElement.volume = $audioBkgVolume;
  };

</script>

<audio controls bind:this={audioBkgElement} src={$audioBkgPath}
  bind:paused={$audioBkgPaused} loop
></audio>