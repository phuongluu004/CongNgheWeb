const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000
app.use(cors())
app.use(express.static('public'));
app.get('/indexlogin',(req, res) => {
  res.redirect('http://google.com');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

