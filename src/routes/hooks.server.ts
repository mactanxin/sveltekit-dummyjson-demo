import type { Handle } from "@sveltejs/kit";

import { redirect } from '@sveltejs/kit'

import { authenticateUser } from '$lib/server/auth'

export const handle: Handle = async ({ event, resolve }) => {
  // stage 1, everything b4 the server is ready
  event.locals.user = authenticateUser(event)

  if (event.url.pathname.startsWith('/admin')) {
    if (!event.locals.user) {
      throw redirect(302, '/login')
    }
    if (event.url.pathname.startsWith('/admin/superuser')) {
      if (event.locals.user.role !== 'super') {
        throw redirect(302, '/login')
      }
    }
  }

  // the request hits the server, b4 response is generated
  //
  // render route, geneter response, await for resolve
  const response = await resolve(event) //this is stage 2

  // stage 3, everything after the response is generated
  return response
}
