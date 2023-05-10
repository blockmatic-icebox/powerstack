import * as http from 'http'

import { config } from './config/global/global.config'

const indexer = async () => {
  console.log('Subscribing to blockchain data ...')
}

const server = http.createServer((_req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Service running')
})

indexer()
server.listen(config.port, config.hostname, () =>
  console.log(`Server running at http://${config.hostname}:${config.port}/`),
)
