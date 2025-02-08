/* eslint-disable no-console */
import { json } from '@tanstack/start'
import { createAPIFileRoute } from '@tanstack/start/api'
import axios from 'redaxios'

import type { User } from '../../utils/users'

export const APIRoute = createAPIFileRoute('/api/users/$id')({
  GET: async ({ request, params }) => {
    console.info(`Fetching users by id=${params.id}... @`, request.url)
    try {
      const response = await axios.get<User>('https://jsonplaceholder.typicode.com/users/' + params.id)

      return json({
        id: response.data.id,
        name: response.data.name,
        email: response.data.email,
      })
    } catch (error) {
      console.error(error)
      return json({ error: 'User not found' }, { status: 404 })
    }
  },
})
