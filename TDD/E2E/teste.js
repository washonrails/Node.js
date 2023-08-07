const http = require('http')

const handler = function (request, response) {
  const { url, method } = request
  const routeKey = `${url}:${method.toLowerCase()}`
  console.log(routeKey)
  return response.end('Hello world')
}

const app = http.createServer(handler)
                .listen(3000, () => console.log(`rodando na porta`, 3000))
