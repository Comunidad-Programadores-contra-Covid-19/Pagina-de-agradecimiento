const Tweet = require('../models').Tweet;
const Post = require('../models').Post;
const config = require('../config/config.js');
var Twit = require('twit');

var T = new Twit({
	consumer_key: config.consumer_key,
	consumer_secret: config.consumer_secret,
	access_token: config.access_token,
	access_token_secret: config.access_token_secret
})
console.log({
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  access_token: config.access_token,
  access_token_secret: config.access_token_secret
})
const millisecondsInADay = 24 * 60 * 60 * 1000
const fonts = ['Patrick Hand', 'Mali', 'Adobe Garamond Pro', 'Quicksand bold', 'Poppins']
const testColors = ['light-green', 'light-pink', 'cyan', 'light-orange', 'light-purple']

exports.new_post_from_tweet = function(req, res) {
	const tweet_id = req.body.id

	T.get('statuses/show/:id', {
		id: tweet_id,
		tweet_mode: 'extended'
	}, async function(err, data, response) {
		try {
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

		} catch (error) {
			res.status(500).send(error.message)
			return
		}
	})
}


exports.new_posts_from_query = async function(query,since,until,count) {
	query = query || '#GraciasPorCuidarnos'
	since = since || new Date(Date.now() - 8 * millisecondsInADay) //8 days ago
	until = until || new Date(Date.now() - 7 * millisecondsInADay)
	count = count || 25
	let tweet_posts = []
	let new_tweet_posts = []
	for (let days = 0; days < 7; days++) {
		let tweets = await getTweets(query, since, until,count)
		if (tweets) {
			new_tweet_posts = await createPosts(tweets)
			tweet_posts.push(...new_tweet_posts)
		}
		console.log(`tweets created in range ${since.toISOString().substring(0, 10)} to ${until.toISOString().substring(0, 10)}: ${new_tweet_posts.length}`)
		new_tweet_posts = []
		since.setDate(since.getDate() + 1);
		until.setDate(until.getDate() + 1);
	}
	console.log({count_created:tweet_posts.length})
	return 
}


async function getTweets(query, since, until,count) {
	options = {
		q: `${query} -filter:retweets`,
		count: count,
		include_entities: 1,
		tweet_mode: 'extended',
		since: since.toISOString().substring(0, 10),
		until: until.toISOString().substring(0, 10)
	}
	try{
		const response = await T.get('/search/tweets', options)
		return response.data.statuses
	}
	catch(err){
    console.log(err)
    console.log(T)
	}
}



async function createPosts(tweets) {
	let tweet_posts = []
	try {
		for (data of tweets){
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
		return tweet_posts            
	} catch (error) {
		console.log(error)
		return null
	}
}