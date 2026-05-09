import { OpenAPIHono } from '@hono/zod-openapi'
import { apiReference } from '@scalar/hono-api-reference'
import { serveStatic } from 'hono/bun'
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'
import invoices from './routes/invoices'
import { mcpHandler } from './mcp'

const app = new OpenAPIHono()

app.use('*', logger())
app.use('/api/*', cors())
app.use('/mcp', cors())

// MCP lives outside the OpenAPI tree on purpose. It has its own discovery
// protocol and shouldn't appear in the public REST spec.
app.all('/mcp', mcpHandler)

const api = new OpenAPIHono()
api.route('/invoices', invoices)

api.doc('/openapi.json', {
  openapi: '3.0.0',
  info: {
    title: 'Shipped Invoices API',
    version: '1.0.0',
    description:
      'A tiny demo API for invoices. Same Zod schemas drive runtime validation, the OpenAPI spec, and the typed client.',
  },
  tags: [{ name: 'Invoices', description: 'Invoice management' }],
})

api.get(
  '/docs',
  apiReference({
    spec: { url: '/api/openapi.json' },
    theme: 'purple',
  }),
)

app.route('/api', api)

const isProd = process.env.NODE_ENV === 'production'
if (isProd) {
  app.use('/*', serveStatic({ root: './dist/client' }))
  app.get('*', serveStatic({ path: './dist/client/index.html' }))
}

const port = Number(process.env.PORT ?? 3001)

export default {
  port,
  fetch: app.fetch,
}

if (!isProd) {
  console.log(`API listening on http://localhost:${port}`)
  console.log(`  • OpenAPI spec  http://localhost:${port}/api/openapi.json`)
  console.log(`  • API docs      http://localhost:${port}/api/docs`)
  console.log(`  • MCP endpoint  http://localhost:${port}/mcp`)
}
