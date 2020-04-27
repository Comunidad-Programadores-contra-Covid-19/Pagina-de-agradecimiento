const Tweet = require('../models/tweet');
const Post = require('../models/post');
const config = require('../config/config.js');
var Twit = require('twit');

var T = new Twit({
    consumer_key:config.consumer_key,  
    consumer_secret:config.consumer_secret,
    access_token:config.access_token,
    access_token_secret:config.access_token_secret
})


exports.new_post_from_tweet = function (req,res) {
    const tweet_id = req.body.id

    T.get('statuses/show/:id', { id: tweet_id, tweet_mode:'extended' }, async function(err, data, response) {
        try{
            let tweet = await Tweet.create({
                idFromTwitter: data.id_str,
                tweetLikes: data.favorite_count,
                tweetDate: data.created_at,
                tweetLink: `https://twitter.com/${data.user.screen_name}/status/${data.id_str}`                
            })
            let post = await Post.create({
                text: data.full_text,
                likes: data.favorite_count,
                imgPath:  data.entities.media ? data.entities.media[0].media_url : null,
                author: '@'+data.user.screen_name,
                tweetId: tweet.id
            })
            res.json({
                tweet,
                post
            })
            
        }
        catch(error){
            res.status(500).send(error.message)
            return
        }     
    })
    //res.sendStatus(200)
}


exports.new_post_from_hashtag = function (req,res) {
    let hashtag = req.body.hashtag
    if (hashtag.charAt(0) === '#') { hashtag = hashtag.slice(1) }

    T.get('/search/tweets/', { q: hashtag, count: 5 }, function(err, data, response) {
        try{
            Post.create({
                text: data.text,
                imgpath: 'test/path',
                author: 'testAuthor'
            })
        .then(post => console.log(post));
        }
        catch(error){
            res.status(500).send(error.message);
        return;
        }     
    })

    res.sendStatus(200)
}





