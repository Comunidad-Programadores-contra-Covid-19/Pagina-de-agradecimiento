const db = require('../config/dbInit');
const Post = require('../models').Post;
const Report = require('../models').Report;
const TweetService = require('../services/tweetService');
const TweetController = require('../controllers/twitterController');

TweetService.getTweets('#GraciasPorCuidarnos',undefined, undefined,1,'1262085221379260416')