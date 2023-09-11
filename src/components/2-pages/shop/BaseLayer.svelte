<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import Price from "../../6-elements/Price.svelte";
  import { productsDisplay, sortedProducts } from "../../../data/products";
  import { layoutBreakpoint } from "../../../data/layoutBreakpointStore";
  
</script>
<div class="shop-page-base-layer"
  class:large-desktop={$layoutBreakpoint === "large-desktop"}
>
  <h2>Ritual Ceramics:<br class="portrait-only"/> Online Shop</h2>
  <div class="item-list">
    {#if $productsDisplay.length === 0}
      <p class="no-match center">Sorry, no items match these filters.</p>
    {:else}
      {#each $sortedProducts as item (item.id)} 
          <div class="item">
            <a href={item.name}>
              <img src={item.pic} alt={item.description} />
              <div class="text">
                <h3>{item.name}</h3>
                <p>
                  {#if item.sale}
                    <Price price={item["original-price"]} className="og-price" />
                    <Price price={item.price} />
                  {:else}
                    <Price price={item.price} />
                  {/if}
                </p>
              </div>
            </a>
          </div>
      {/each}
    {/if}
  </div>
</div>

<!-- STYLES //////////////////////////////////////////////// -->
<style>
.shop-page-base-layer {
  overflow-y: scroll;
  scrollbar-width: none; 
  width: 100%;
  height: 100%;
}
.shop-page-base-layer::-webkit-scrollbar {
  display: none;
}
.item-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 20px;
}
h2 {
  background-color: hsla(var(--hue2), 100%, 15%, 0.95);
  width: 100%;
  align-self: flex-start;
  height: calc(var(--ch) * 0.2);
  z-index: 1;
  display: flex;
  align-items: center;
  font-weight: 400;
  border-style: solid;
  color: hsl(var(--hue1), 100%, 85%);
  border-color: hsl(var(--hue1), 100%, 85%);
}
.no-match {
  width: 100%;
  border-color: hsl(var(--hue2), 100%, 10%);
  border-style: solid;
  background-color: hsla(var(--hue2), 100%, 70%, 0.9);
}
.item {
  width: 300px;
  height: 400px;
  position: relative;
  overflow: hidden;
  border-style: solid;
  border-color: hsl(var(--hue2), 100%, 0%);
  border-width: 4px;
}
a {
  width: 100%;
  display: block;
  height: 100%;
  background-color: hsla(var(--hue2), 100%, 70%, 0.1);
}
img {
  position: absolute;
  z-index: 0;
  width: 100%;
  object-fit: cover;
  height: 100%;
}
.text {
  background-color: hsla(var(--hue2), 100%, 10%, 0.8);
  position: absolute;
  width: 100%;
  height: 10%;
  top: 90%;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}
p {
  display: flex;
  gap: 20px;
}
p :global(.og-price) {
  text-decoration: line-through;
}
/* PORTRAIT ////////////////////////////////////////// */
@media screen and (orientation: portrait) {
h2 {
  font-size: calc(var(--cw)/13);
  border-bottom-width: calc(var(--cw)/50);
  line-height: 1.3;
  text-align: center;
  justify-content: center;
}
.item-list {
  padding-top: calc(var(--ch)/10);
  min-height: calc(var(--vph) * 0.72);
}
.shop-page-base-layer {
  padding-bottom: calc(var(--vph) * 0.3);
}
.no-match {
  border-width: calc(var(--cw)/100);
  height: calc(var(--ch)/2);
  font-size: calc(var(--cw)/15);
}
}
/* LANDSCAPE ///////////////////////////////////////////////// */
@media screen and (orientation: landscape) {
  .item-list {
    min-height: calc(var(--vph) * 0.8);
  }
  .shop-page-base-layer.large-desktop .item-list {
    min-height: calc(var(--ch) * 0.8);
  }
  h2 {
    font-size: calc(var(--cw)/40);
    padding-left: calc(var(--cw)/100);
    border-bottom-width: calc(var(--ch)/100);
  }
}
/* TRANSITIONS ////////////////////////////////////////// */
@media (hover:hover) {
  a:hover .text, a:focus-visible .text {
    color: hsl(var(--hue2), 100%, 50%);
    background-color: black;
  }
}
</style>