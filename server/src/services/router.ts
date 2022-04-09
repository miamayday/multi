import * as express from 'express'

const router = express.Router()

// https://expressjs.com/en/guide/using-middleware.html

router.use((req: express.Request, res: express.Response, next) => {
  console.log(req.method, req.path)
  console.log('  From:', req.hostname, req.ip)
  console.log('  Time:', new Date())
  next()
})

router.use('/', (req: express.Request, res: express.Response) => {
  res.send(req.path)
})

export default router
