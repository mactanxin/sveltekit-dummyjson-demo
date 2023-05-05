import type { Actions } from './$types';
export const actions: Actions = {
  create: async ({ request }) => {
    const data = await request.formData();
    const email = data.get('email')
    const password = data.get('password')

    // dummy validate, always return true
    // do whatever you want, setup an extra UUID,
    // then save it to your DB
    if (email && password) {

    }
  }
}
