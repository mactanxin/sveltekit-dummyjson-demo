<script lang="ts">
  export let data: any;
  $: ({ users } = data.users);
</script>

<h1>Users</h1>

{#each users as user}
  <p class="text-lg font-base">{user.firstName}</p>
{/each}
