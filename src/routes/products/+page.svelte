<script lang="ts">
  export let data;
  $: ({ products } = data.products);
</script>

<header>
  <h1>Products</h1>

  {#each products as product}
    <p>{product.title}</p>
  {/each}
</header>
