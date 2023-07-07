<!-- SCRIPTS ///////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import products from "../../data/products";

  // PRODUCTS ------------------------------------------
  let productsDisplay = products;

  // SORT FUNCTIONS ---------------------------------
  function alphabeticalA() {
    productsDisplay = products.sort((item1, item2) => {
      return item1.name > item2.name
    });
  }

  // FILTER FUNCTIONS --------------------------------
  function filterByCategory(category) {
    productsDisplay = productsDisplay.filter(item => {
      return item.category === category;
    });
  };

  function filterBySale() {
    productsDisplay = productsDisplay.filter(item => {
      return item.sale;
    });
  }

  filterBySale();
  filterByCategory("mug");

</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<div class="shop-page">
  <h2>Ritual Ceramics: Online Shop</h2>
  <div class="item-list">
    {#if productsDisplay.length === 0}
      <p class="no-match">Sorry, no items match these filters.</p>
    {:else}
      {#each productsDisplay as item}
          <div class="item">
            <a href={item.name}>
              <img src={item.pic} alt={item.description} />
              <div class="text">
                <h3>{item.name}</h3>
                <p>
                  {#if item.sale}
                    <span class="og-price">${item.price}</span>
                    <span>${item["sale-price"]}</span>
                  {:else}
                    ${item.price}
                  {/if}
                </p>
              </div>
            </a>
          </div>
      {/each}
    {/if}
  </div>
</div>

<!-- STYLES ///////////////////////////////////////////// -->
<style>
/* GENERAL //////////////////////////////////////////// */
.shop-page {
  height: var(--vph);
  overflow-y: scroll;
  scrollbar-width: none;  
}
.shop-page::-webkit-scrollbar {
  display: none;
}
.item-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  min-height: calc(var(--vph) * 0.72);
}
h2 {
  background-color: hsl(var(--hue1), 100%, 50%);
  width: 100%;
  align-self: flex-start;
  height: calc(var(--ch) * 0.2);
  z-index: 1;
}
.no-match {
  width: 100%;
  border: 4px solid blue;
}
.item {
  width: 300px;
  height: 400px;
  position: relative;
  border: 4px solid black;
  overflow: hidden;
}
a {
  width: 100%;
  display: block;
  height: 100%;
}
img {
  position: absolute;
  z-index: -1;
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
  gap: calc(var(--cw)/30);
}
.og-price {
  text-decoration: line-through;
}
/* PORTRAIT ////////////////////////////////////////// */
@media screen and (orientation: portrait) {
.shop-page {
  padding-bottom: calc(var(--vph) * 0.3);
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