<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // PROPS -------------------------------------
  export let price = 0;
  export let className;

  let stringVer = `${price/100}`;
  if (stringVer.charAt(stringVer.length - 2) === ".") {
    stringVer = stringVer + "0";
  } 
</script>

<span class={"price " + className}>
  ${stringVer}
</span>