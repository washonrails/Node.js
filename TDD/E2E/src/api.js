const http = require('http')
const DEFAULT_USER = { username: "Wallace Henrique", password: "123" }

const routes = {
  '/contact:get': (_, response) => {
    response.write('contact us page')
    return response.end()
  },

  '/login:post': async (request, response) => {
    // response e um iterador
    for await (const data of request) {
      const user = JSON.parse(data)
      if (
        user.username !== DEFAULT_USER.username ||
        user.password !== DEFAULT_USER.password
      ) {
        response.writeHead(401)
        response.write('Logging fail')
        return response.end()
      }

      response.write('Logging has succeeded!')
      return response.end()
    }
  },

  default: (_, response) => response.end('Hello World!')
}

const PORT = 3000

const SERVER = function (request, response) {
  const { url, method } = request
  const routeKey = `${url}:${method.toLowerCase()}`
  const chosen = routes[routeKey] || routes.default

  response.writeHead(200, {
    'Content-Type': 'text/html'
  })

  return chosen(request, response)
}

const app = http.createServer(SERVER)
  .listen(PORT, () => console.log(`app is running at`, PORT))

module.exports = app
