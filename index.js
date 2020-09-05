const express = require('express')
const bodyParser = require("body-parser");
const usersRouter = require('./routers/users')

const app = express()
const port = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(usersRouter)

app.get('/', (req, res) => res.send('default route reached, hooray!'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})