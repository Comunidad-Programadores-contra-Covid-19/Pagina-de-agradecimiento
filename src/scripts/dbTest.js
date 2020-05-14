const db = require('../config/dbInit');
const Post = require('../models').Post;
const TweetService = require('../services/tweetService');
const TweetController = require('../controllers/twitterController');

async function main(){
  testTweets = [{id_str:'1257302455768907776'},{id_str:'1'}] 
  TweetController.createPosts(testTweets)
}

main()