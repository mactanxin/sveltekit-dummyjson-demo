import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
export const actions: Actions = {
  // named action matching form post action attribute
  create: async ({ request }) => {
    const data = await request.formData();
    const email = data.get('email')
    const name = data.get('name')

    // dummy validate, always return true
    // do whatever you want, setup an extra UUID,
    // then save it to your DB
    //
    if (name?.length < 2) {
      return fail(400, {
        error: true,
        message: 'name must be at least 2 characters',
        email,
        name
      })
    }
    const id = crypto.randomUUID()
    const contact = {
      id,
      name,
      email,
    }
    if (email && name) {
      contacts.push(contact)
    }

    return {
      success: true
    }
  },
  delete: async ({ request }) => {
    const formData = await request.formData();
    const id = formData.get('id');

    console.log('id is: ', id)
  }
}

const contacts = [
  {
    id: 1,
    name: 'John Doe',
    email: 'xintan@me.com'
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@me.com'
  }
]

export const load = () => {
  return {
    contacts
  }
}
