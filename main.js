const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', async (request, reply) => {
  return "Currently buttplug, but here will be webmin"
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 8080)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
