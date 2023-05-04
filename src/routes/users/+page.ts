// demonstrate how to use  parallel fetching in sveltekit
// blog:  [here](https://tanx.in/svelte/fetching-data-in-sveltekit.html)
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {

  async function fetchUsers() {

    const usersRes = await fetch('https://dummyjson.com/users')
    const users = await usersRes.json()
    return users
  }

  return {
    users: fetchUsers(),
  }
}) satisfies PageServerLoad;
