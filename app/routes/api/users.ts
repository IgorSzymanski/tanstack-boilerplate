/* eslint-disable no-console */
import { json } from '@tanstack/start'
import { createAPIFileRoute } from '@tanstack/start/api'
import axios from 'redaxios'

import type { User } from '../../utils/users'

export const APIRoute = createAPIFileRoute('/api/users')({
  GET: async ({ request }) => {
    console.info('Fetching users... @', request.url)
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users')

    const list = response.data.slice(0, 10)

    return json(list.map((u) => ({ id: u.id, name: u.name, email: u.email })))
  },
})
