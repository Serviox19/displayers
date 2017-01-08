const express  = require('express');
const router   = express.Router();
const request  = require('request');
const cheerio  = require('cheerio');


router.get('/nynow', function(req, res, next) {
  var nynowUrl = 'http://s15.a2zinc.net/clients/emeraldexpo/nynow2017/Public/exhibitors.aspx';

  request(nynowUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      $ = cheerio.load(body);

    }
  });
});

router.get('/toyfair', function(req, res, next) {
  var toyUrl = 'http://s23.a2zinc.net/Clients/tia/toyfair2017/public/eventmap.aspx?thumbnail=1';

  request(toyUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      $ = cheerio.load(body);

    }
  });
});

router.get('/icsc', function(req, res, next) {
  var icscUrl = 'http://edm2015.mapyourshow.com/6_0/alphalist.cfm?alpha=*';

  request(icscUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      $ = cheerio.load(body);

    }
  });
});


module.exports = router;
