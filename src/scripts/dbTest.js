const db = require('../config/dbInit');
const Post = require('../models').Post;
const Report = require('../models').Report;
const TweetService = require('../services/tweetService');
const TweetController = require('../controllers/twitterController');

//Report.sync({force:true})

