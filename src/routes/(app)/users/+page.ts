// demonstrate how to use  parallel fetching in sveltekit
// blog:  [here](https://tanx.in/svelte/fetching-data-in-sveltekit.html)
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, url }) => {
  const limit = Number(url.searchParams.get('limit')) || 10;
  const skip = Number(url.searchParams.get('skip')) || 0;

  async function fetchUsers() {

    const usersRes = await fetch('https://dummyjson.com/users?skip=' + skip + '&limit=' + limit);
    const users = await usersRes.json()
    return users
  }

  return {
    users: fetchUsers(),
  }
}) satisfies PageServerLoad;
