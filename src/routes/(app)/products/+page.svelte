<script lang="ts">
  import { page } from "$app/stores";
  export let data;
  console.log("data: ", data);
  let pageSize = 10;

  $: ({ products, total, skip, limit } = data.products);
  $: currentPage =
    (Number($page.url.searchParams.get("pageNum")) || 0) / pageSize;
</script>

<h1 class="text-3xl font-bold">Products</h1>

{#each products as product}
  <p class="text-lg font-base">{product.title}</p>
{/each}
<nav>
  {#each Array(total) as _, index}
    <a
      href="/products?limit={pageSize}&skip={pageSize * index}"
      class={currentPage === index ? "text-blue-600" : "text-gray-800"}
    >
      {index + 1}
    </a>
  {/each}
</nav>
