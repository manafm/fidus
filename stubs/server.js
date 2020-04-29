const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/', function (req, res) {
  res.send(
    [
      {
        name: 'toto',
        age: 36
      },
      {
        name: 'momo',
        age: 18
      }
    ]
  )
})


app.get('/users', function (req, res) {
  res.send([
    {
      name: 'toto',
      age: 36
    },
    {
      name: 'momo',
      age: 18
    }
  ])
})
app.get('/consumers', function (req, res) {
  res.send([
    {
      name: 'toto',
      age: 36
    },
    {
      name: 'momo',
      age: 18
    }
  ])
})

app.get('/helloworld', function (req, res) {
  res.send('Hello Sou!')
})

app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
})
