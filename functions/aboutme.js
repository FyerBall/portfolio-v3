const express = require('express')
const serverless = require('serverless-http')

const app = express()
const router = express.Router()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Get Projects from Firebase
router.get('/aboutme', (req, res) => {
  res.json('Hello world!')
})

app.use('/.netlify/functions/api', router)

// instead of using app.listen ...prot
module.exports.handler = serverless(app)
