const Post = require('../models').Post;
const config = require('../config/config.js');
const testColors = ['light-green','light-pink','cyan','light-orange','light-purple']
const testImages = ['https://pbs.twimg.com/media/EVaefChWoAA9Pwv?format=jpg','https://pbs.twimg.com/media/EV0PV-tWkAI2fjV?format=jpg','https://pbs.twimg.com/media/EV-dmmAXgAE59Lq?format=jpg','https://pbs.twimg.com/media/EWBHKcNUMAA3yPc?format=jpg','https://pbs.twimg.com/media/EVhCDJmXgAIMwUi?format=jpg','https://pbs.twimg.com/media/EVXALM1XsAAGVvp?format=jpg','https://pbs.twimg.com/media/EU01KaXX0AsbxUW?format=jpg','https://pbs.twimg.com/media/EVp_CgyXQAE4VpG?format=jpg&name=4096x4096','https://pbs.twimg.com/media/EVSLu_jWoAI_EGY?format=jpg']

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
            post.height = 'height'
            post.width = 'width'
    		if (Math.random() < 0.4){
                post.imagepath = testImages[Math.floor(Math.random() * testImages.length)]
                if (Math.random() < 0.3)
                    post.height = 'height2'
                if (Math.random() < 0.3)
                    post.width = 'width2'
            }
            else{
                post.imagepath = null
                if(post.text.length > 175){
                   if (Math.random() < 0.5)
                        post.height = 'height2'
                    else
                        post.width = 'width2'
                }
                if(post.text.length > 350){
                    post.text = post.text.substring(1, 350) + '...';
                }    
            }
        } 
        

    	res.render('index', {title:'Home page',posts})
    });
    
	//res.render('index', {title:'Home page',posts:testPosts})
}