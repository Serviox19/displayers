const express = require('express');
const app = express();
const logger = require('morgan');
const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
//load dir



app.listen(PORT, function(req, res) {
  console.log('Listening on PORT: ' + PORT);
});