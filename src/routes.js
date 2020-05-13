const express = require('express');
const router = express.Router();
let rootController = require('./controllers/rootController');
let postController = require('./controllers/postController')
let reportController = require('./controllers/reportController');
let twitterController = require('./controllers/twitterController'); 

//Robots
router.get('/robots.txt', function (req, res) {
    res.type('text/plain');
    res.send("User-agent: *\nDisallow: /");
});

// Index page
router.get('/', rootController.root);

// Create post page
router.get('/nueva_carta/', postController.create_post_page);

router.get('/quienes_somos',rootController.quienes_somos);

router.get('/dona',rootController.dona);

router.get('/faq',rootController.faq);

/***Post***/
// Get list of posts
router.get('/posts/:page',postController.get_posts)

// show empty index when requesting a post
//router.get('/post/:id',postController.getPostByIdView)
router.get('/a/:id',postController.test)


//api route to get a post json
router.get('/api/post/:id',postController.get_post_by_id)

// Create new post
router.post('/post', postController.new_post);

// Like a post
router.post('/like', postController.likePost);

router.post('/mail',postController.mail);

/***Report***/

// Report a post
router.post('/report', reportController.new_report);


/***Twitter***/
// Create post from a tweet
router.post('/twitter/byID', twitterController.new_post_from_tweet);



module.exports = router;
