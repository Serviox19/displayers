
const express = require('express');
const app     = express();
const logger  = require('morgan');
const PORT    = process.env.PORT || 3000;


app.use(logger('dev'));

app.use(express.static(__dirname + "/public"));
app.use('/public', express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/views"));
app.use('/public/views', express.static(__dirname + "/public/views"));
app.use('/bower_components', express.static(__dirname + "/bower_components"));


const routes  = require('./routes/index.js');
const scraper = require('./routes/scraper.js');

app.use('/', routes);
app.use('/scrape', scraper);


app.listen(PORT, function(req, res) {
  console.log('Listening on PORT: ' + PORT);
});
