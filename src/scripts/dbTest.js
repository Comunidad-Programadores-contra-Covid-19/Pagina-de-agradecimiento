const db = require('../config/dbInit');
const Post = require('../models').Post;
const Report = require('../models').Report;
const TweetService = require('../services/tweetService');
const TweetController = require('../controllers/twitterController');

//var intervalID = setInterval(myCallback, 1000);

function myCallback()
{
 console.log(intervalID._idleStart);
}

function stopInterval() {
  clearInterval(intervalID);
}