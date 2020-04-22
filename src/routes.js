const express = require('express');
const router = express.Router();
let rootController = require('./controllers/rootController');
let postController = require('./controllers/postController')
let reportController = require('./controllers/reportController');

// Index page
router.get('/', rootController.root);

// Create new post
router.post('/post', postController.new_post);

// Create post from a tweet
router.post('/post/from-twitter', postController.new_post_from_twitter);

// Report a post
router.post('/report', reportController.new_report);

module.exports = router;
