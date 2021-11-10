const express = require('express')
const connectDb = require('./db/connectDb')
const tasks = require('./routes/tasks')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())

// routes
app.get('/hello', (req, res) => {
  res.send('task manger app')
})

app.use('/api/v1/tasks', tasks)

const start = async () => {
  try {
    await connectDb()
    app.listen(PORT, console.log(`server is listening on port ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

start()
