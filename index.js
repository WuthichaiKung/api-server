const express = require('express')



const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/user', (req, res) => {
    res.send('show all users')
  })

app.listen(3000,()=>
console.log('server started'),
);