const Tweet = require('../models').Tweet;
const Post = require('../models').Post;
const config = require('../config/config.js');
var Twit = require('twit');

var T = new Twit({
    consumer_key:config.consumer_key,  
    consumer_secret:config.consumer_secret,
    access_token:config.access_token,
    access_token_secret:config.access_token_secret
})
const millisecondsInADay = 24*60*60*1000
const fonts = ['Patrick Hand','Mali','Adobe Garamond Pro','Quicksand bold','Poppins']
const testColors = ['light-green','light-pink','cyan','light-orange','light-purple']

exports.new_post_from_tweet = function (req,res) {
    const tweet_id = req.body.id

    T.get('statuses/show/:id', { id: tweet_id, tweet_mode:'extended' }, async function(err, data, response) {
        try{
            /*let tweet = await Tweet.create({
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
            })*/
            res.json({
              data
            })
            
        }
        catch(error){
            res.status(500).send(error.message)
            return
        }     
    })
}


exports.new_posts_from_query = function (req,res) {
    const query = req.body.query
    const since = req.body.since || new Date(Date.now() - 8*millisecondsInADay).toISOString().substring(0,10) //8 days ago
    const until = req.body.until || new Date(Date.now() + 1*millisecondsInADay).toISOString().substring(0,10) //tomorrow
    T.get('/search/tweets', { q: `${query} -filter:retweets`, count: 100,include_entities:1,tweet_mode:'extended',since:'2020-04-22',until:'2020-04-23' }, async function(err, datas, response) {
        let tweet_posts = []
        try{
            for (data of datas.statuses){
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
                    imgWidth:  data.entities.media ? data.entities.media[0].sizes.large.w : null,
                    imgHeight:  data.entities.media ? data.entities.media[0].sizes.large.h : null,
                    author: '@'+data.user.screen_name,
                    TweetId: tweet.id,
                    font: fonts[Math.floor(Math.random() * fonts.length)],
                    color: testColors[Math.floor(Math.random() * testColors.length)]
                })
                tweet_posts.push({tweet,post})
            }            
            res.json({count:datas.statuses.length,data:tweet_posts})
        }
        catch(error){
            res.status(500).send(error.message);
            return;
        }     
    })

    //res.sendStatus(200)
}





