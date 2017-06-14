const express = require('express')

const app = express()
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Accept");
  res.header("Access-Control-Allow-Methods", "*");
  next();
 });

app.use(express.static('./'))

app.listen(10001, () => console.log('Server is running on http://localhost:10001'))