const Post = require('../models').Post;
const config = require('../config/config.js');
const testColors = ['light-green','light-pink','cyan','light-orange','light-purple']

exports.root = function (req,res) {
	
	Post.findAll({
        order: [
            ['likes', 'DESC'],
        ],
        limit: config.firstNPosts
    })
    .then(posts => {
    	for(const post of posts){
    		post.color = testColors[Math.floor(Math.random() * testColors.length)]
    		if(post.text.length > 175){
    			post.height = 'height2'
    		}
    		if(post.text.length > 350){
    			post.text = post.text.substring(1, 350) + '...';
    		}
    	} 

    	res.render('index', {title:'Home page',posts})
    });
    
	//res.render('index', {title:'Home page',posts:testPosts})
}