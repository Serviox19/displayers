const express  = require('express');
const router   = express.Router();
const request  = require('request');
const cheerio  = require('cheerio');
const mongoose = require('mongoose');
const db;