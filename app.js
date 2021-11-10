const express = require('express')

const notFound = require('./middleware/notFound')

const connectDb = require('./db/connectDb')
const tasks = require('./routes/tasks')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

// middleware
app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/api/v1/tasks', tasks)

app.use(notFound)

const start = async () => {
  try {
    await connectDb()
    app.listen(PORT, console.log(`server is listening on port ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

start()
