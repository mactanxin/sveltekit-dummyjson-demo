import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

let contacts = [
  {
    id: '64c257a4-c09d-4029-9693-0e21133084d3',
    name: 'Xin Doe',
    email: 'xintan@me.com'
  },
  {
    id: 'beaf6b0c-67ae-4d29-9ef8-e49aa1487b16',
    name: 'Jane Doe',
    email: 'jane@me.com'
  }
]

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

    // now you have the id
    // should do validation b4 next move right?
    contacts = contacts.filter(contact => contact.id !== id)
  }
}


export const load = () => {
  return {
    contacts
  }
}
