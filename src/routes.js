const express = require('express');
const router = express.Router();
let rootController = require('./controllers/rootController');
let postController = require('./controllers/postController')
let reportController = require('./controllers/reportController');
let twitterController = require('./controllers/twitterController'); 

// Index page
router.get('/', rootController.root);

// Create post page
router.get('/nueva_carta/', postController.create_post_page);

router.get('/quienes_somos',rootController.quienes_somos);

router.get('/dona',rootController.dona);

/***Post***/
// Get list of posts
router.get('/posts/:page',postController.get_posts)

// Create new post
router.post('/post', postController.new_post);

// Like a post
router.post('/like/:postId', postController.likePost);

/***Report***/

// Report a post
router.post('/report', reportController.new_report);


/***Twitter***/

// Create posts from a hashtag
router.post('/twitter/byQuery', twitterController.new_posts_from_query);

// Create post from a tweet
router.post('/twitter/byID', twitterController.new_post_from_tweet);

module.exports = router;
