const express = require('express')
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
//app.get('/api/v1/tasks')          -get all tasks
//app.post('/api/v1/tasks')         - create a new task
//app.get('/api/v1/tasks/:id')      - get stingle task
//app.patch('/api/v1/tasks/:id')    - update task
//app.delete('/api/v1/tasks/:id')   - delete task

app.listen(PORT, console.log(`server is listening on port ${PORT}`))
