const express = require('express');
const router = express.Router();
let rootController = require('./controllers/rootController');
let postController = require('./controllers/postController')
let reportController = require('./controllers/reportController');
let twitterController = require('./controllers/twitterController'); 

//Robots
router.get('/robots.txt', function (req, res) {
    res.type('text/plain');
    res.send("User-agent: *\nDisallow:");
});

//Sitemaps
router.get('/sitemap.txt', function (req, res) {
    res.type('text/plain');
    res.send("https://www.graciasporcuidarnos.com.ar/\nhttps://www.graciasporcuidarnos.com.ar/faq\nhttps://www.graciasporcuidarnos.com.ar/quienes_somos\nhttps://www.graciasporcuidarnos.com.ar/dona\nhttps://www.graciasporcuidarnos.com.ar/nueva_carta\n");
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
router.get('/cartas/:page/:order',postController.get_posts)

// show empty index when requesting a post
router.get('/carta/:id',postController.getPostByIdView) 

//api route to get a post json
router.get('/api/carta/:id',postController.get_post_by_id)

// Create new post
router.post('/carta', postController.new_post);

// Like a post
router.post('/like', postController.likePost);
router.post('/mail',postController.mail);

/***Report***/
router.post('/report', reportController.new_report);
router.get('/api/reportedPostIDsByIP', reportController.getReportedPostIDsByIP);

/***Twitter***/
// Create post from a tweet
router.post('/twitter/byID', twitterController.new_post_from_tweet);

module.exports = router;
