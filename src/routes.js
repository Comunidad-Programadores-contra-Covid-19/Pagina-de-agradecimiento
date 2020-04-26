const express = require('express');
const router = express.Router();
let rootController = require('./controllers/rootController');
let postController = require('./controllers/postController')
let reportController = require('./controllers/reportController');

// Index page
router.get('/', rootController.root);

// Get list of posts
router.get('/posts/:page',postController.get_posts)

// Create new post
router.post('/post', postController.new_post);

// Create post from a tweet
router.post('/post/from-twitter', postController.new_post_from_tweet);

// Report a post
router.post('/report', reportController.new_report);

// Like a post
router.post('/like/:postId', postController.likePost);

// Create posts from a hashtag
router.post('/post/from-twitter-hashtag', postController.new_post_from_hashtag);


module.exports = router;
