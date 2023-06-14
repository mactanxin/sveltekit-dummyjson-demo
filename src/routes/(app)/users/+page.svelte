<script lang="ts">
  import { page } from "$app/stores";
  export let data: any;
  let pageSize = 10;

  $: ({ users, total, skip, limit } = data.users);
  $: currentPage =
    (Number($page.url.searchParams.get("pageNum")) || 0) / pageSize;
</script>

<h1>Users</h1>
<p>this page demos how to use client side pagination in sveltekit</p>
<p class="btn">total: {total}</p>
<p class="btn">skip: {skip}</p>
<p class="btn">limit: {limit}</p>

{#each users as user}
  <p class="text-lg font-base">{user.firstName}</p>
{/each}

<nav>
  {#each Array(total) as _, index}
    <a
      href="/users?limit={pageSize}&skip={pageSize * index}"
      class={currentPage === index ? "text-blue-600" : "text-gray-800"}
    >
      {index + 1}
    </a>
  {/each}
</nav>
