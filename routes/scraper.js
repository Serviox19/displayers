const express  = require('express');
const router   = express.Router();
const request  = require('request');
const cheerio  = require('cheerio');


router.get('/nynow', function(req, res, next) {
  var nynowUrl = 'http://s15.a2zinc.net/clients/emeraldexpo/nynow2017/Public/exhibitors.aspx';
  var exName;
  var boothLabel;
  var infoLink;

  request(nynowUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      $ = cheerio.load(body);

      $('.listTableBody .table tbody tr').each(function(i, element) {
        var exName = $(element).children().find('.companyName').find('.exhibitorName').text();
        var boothLabel = $(element).children().find('.boothLabel').text();
        var infoLink = $(element).children().find('.companyName').find('.exhibitorName').attr('href');


        // console.log(exName);
        // console.log(boothLabel);
        // console.log(infoLink);
        // console.log('------------');
      });
    }
  });
});

router.get('/toyfair', function(req, res, next) {
  var toyUrl = 'http://s23.a2zinc.net/Clients/tia/toyfair2017/public/eventmap.aspx?thumbnail=1';
  var exName;
  var boothLabel;
  var infoLink;

  request(toyUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      $ = cheerio.load(body);

      $('.listTableBody tbody tr').each(function(i, element) {

        var exName = $(element).children().find('.exhibitorName').text();
        var boothLabel = $(element).children().find('.boothLabel').text();
        var infoLink = $(element).children().find('.exhibitorName').attr('href');

        console.log(exName);
        console.log(boothLabel);
        console.log(infoLink);
        console.log('-----');

        function resp(response) {
          console.log("Request handler was called.");
          res.writeHead(200, {"Content-Type": "application/json"});
          var json = JSON.stringify({
            CompanyName: exName,
            BoothLabel: boothLabel,
            Link: infoLink
          });
          res.send(json);
        };
      });// end element each
    };
  });
});

router.get('/icsc', function(req, res, next) {
  var icscUrl = 'http://edm2015.mapyourshow.com/6_0/alphalist.cfm?alpha=';

  request(icscUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      $ = cheerio.load(body);

      $('#jq-regular-exhibitors tbody tr').each(function(i, element) {
        var exName   = $(element).children().find('.mys-table-exhname a').text();
        var booth    = $(element).children().find('.mys-table-booths').find('.mys-floorPlanLink').text();
        var infoLink = $(element).children().find('.mys-table-booths a').attr('href');

        console.log(exName);
        console.log(booth);
        console.log(infoLink);
        console.log('-----');
      });
    }
  });
});


module.exports = router;
