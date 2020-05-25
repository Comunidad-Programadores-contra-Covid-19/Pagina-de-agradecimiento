const TweetService = require('../services/tweetService');

/*
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
*/
/*
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

exports.RepondToTweets = () => {
  console.log('asd')
}
*/