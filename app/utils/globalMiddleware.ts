/* eslint-disable no-console */
import { defineMiddleware } from 'vinxi/http'

export default defineMiddleware({
  onRequest: async (event) => {
    console.log('Request received', event.node.req.url)
  },
})
