import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export default async function registerRoutes(app: FastifyInstance) {
  return app.get('/company', (req: FastifyRequest, res: FastifyReply) => {
    res.send('characters')
  })
}
