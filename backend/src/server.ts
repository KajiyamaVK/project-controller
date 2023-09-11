import fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import registerRoutes from './routes/register'

const app = fastify()
const cors = {
  origin: '*',
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}

app.register(fastifyCors, cors)

app.register(registerRoutes, {
  prefix: '/register',
})

app.listen({ port: 4000 }).then(() => {
  console.log('Server is running on port 4000')
})
