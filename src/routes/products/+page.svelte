<script lang="ts">
  export let data;
  $: ({ products } = data.products);
</script>

<h1 class="text-3xl font-bold">Products</h1>

{#each products as product}
  <p class="text-lg font-base">{product.title}</p>
{/each}
