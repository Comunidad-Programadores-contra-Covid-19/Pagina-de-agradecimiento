const Tweet = require('../models').Tweet;
const Post = require('../models').Post;
const config = require('../config/config.js');
const Twit = require('twit');
const TweetService = require('../services/tweetService');

const T = new Twit({
	consumer_key: config.consumer_key,
	consumer_secret: config.consumer_secret,
	access_token: config.access_token,
	access_token_secret: config.access_token_secret
})
const millisecondsInADay = 24 * 60 * 60 * 1000
const fonts = ['Patrick Hand', 'Mali', 'Adobe Garamond Pro', 'Quicksand bold', 'Poppins']
const COLORS = ['light-green', 'light-pink', 'light-cyan', 'light-orange', 'light-purple']

exports.new_post_from_tweet = function(req, res) {
	const tweet_id = req.body.id


	T.get('statuses/show/:id', {
		id: tweet_id,
		tweet_mode: 'extended'
	}, async function(err, data, response) {
		try {
			res.json({
				data
			})

		} catch (error) {
			res.status(500).send(error.message)
			return
		}
	})
}


exports.LatestPostsFromToday = async function(query,since,until,count) {
  query = query || '#GraciasPorCuidarnos'
  since = since || new Date(Date.now() - 10 * millisecondsInADay )
  until = until || new Date(Date.now() + 1 * millisecondsInADay)
  count = count || 100
  let tweet_posts = []
  let new_tweet_posts = []
  let tweets
  try{
    const since_id = await TweetService.getGreatestTweetID()
    tweets = await getTweets(query, since, until,count,since_id)
  }catch(e){
    console.log(e)
  }
  if (tweets) {
    tweet_posts = await createPosts(tweets)
  }
  console.log({count_created:tweet_posts.length})
  
}



exports.new_posts_from_query = async function(query,since,until,count) {
	query = query || '#GraciasPorCuidarnos'
	since = since || new Date(Date.now() - 8 * millisecondsInADay) //8 days ago
	until = until || new Date(Date.now() - 7 * millisecondsInADay)
	count = count || 100
	let tweet_posts = []
	let new_tweet_posts = []
	for (let days = 0; days < 9; days++) {
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


async function getTweets(query, since, until,count,since_id = 1) {
	options = {
		q: `${query} -filter:retweets`,
		count: count,
		include_entities: 1,
		tweet_mode: 'extended',
		since: since.toISOString().substring(0, 10),
		until: until.toISOString().substring(0, 10),
    since_id: since_id
	}
	try{
		const response = await T.get('/search/tweets', options)
		return response.data.statuses
	}
	catch(err){
    console.log(err)
	}
}



async function createPosts(tweets) {
	let tweet_posts = []
  let imgPath
  existingTweetIds = await TweetService.getExistingTweetIdsFromDB()
	try {
		for (data of tweets){
        if (existingTweetIds.includes(data.id_str)) {
          continue;
        }

        data.full_text = removeTwitterLink(data.full_text)
        
        imgPath = null
        if (data.entities.media){
          imgPath = generateHttpsImgPath(data.entities.media[0].media_url)
        }else if(data.full_text.length < 40){
          continue;
        }


				let tweet = await Tweet.create({
						idFromTwitter: data.id_str,
						tweetLikes: data.favorite_count,
						tweetDate: data.created_at,
						tweetLink: `https://twitter.com/${data.user.screen_name}/status/${data.id_str}`
				})
				let post = await Post.create({
						text: data.full_text,
						likes: data.favorite_count,
						imgPath:  imgPath,
						imgWidth:  data.entities.media ? data.entities.media[0].sizes.large.w : null,
						imgHeight:  data.entities.media ? data.entities.media[0].sizes.large.h : null,
						author: '@'+data.user.screen_name,
						TweetId: tweet.id,
						font: fonts[Math.floor(Math.random() * fonts.length)],
						color: COLORS[Math.floor(Math.random() * COLORS.length)]
				})
				tweet_posts.push({tweet,post})
		}
		return tweet_posts            

	} catch (error) {
		console.log(error);
	}
}


function generateHttpsImgPath(origPath){
  return 'https:'+origPath.split(':')[1]
}

function removeTwitterLink(oldText){
  let newText = oldText
  const regexLink = /http(s)?:\/\/t\.co\/(\w+)/g
  const regexDoubleSpace = /  /g
  newText = oldText.replace(regexLink,'')
  newText = newText.replace(regexDoubleSpace,'')
  return newText
}

