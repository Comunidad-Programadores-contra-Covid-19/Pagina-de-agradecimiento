var Twit = require('twit')
const config = require('../config/config.js');

var T = new Twit({
    consumer_key:config.consumer_key,  
    consumer_secret:config.consumer_secret,
    access_token:config.access_token,
    access_token_secret:config.access_token_secret
})

/*
const tweet_id = '1252972492584620036'

T.get('statuses/show/:id', { id: tweet_id }, function(err, data, response) {
	console.log(data);
})
*/
const hashtag = '#GraciasPorCuidarnos'
//since:2015-12-21,until:2015-12-21, since_id, max_id 

let options =  { q: `${hashtag} -filter:retweets`, count: 3,since:'2020-04-15',until:'2020-04-23'}



async function index(){
	let minID = Infinity 
	const tweets = []
	for (let i = 0 ; i < 2 ; i++ ){
		const newTweets = await getTweets({
			...options,
			max_id:minID,
		})
		minID = newTweets[0].id
		//console.log(minID)
		tweets.push(...newTweets)
	}
	console.log(tweets.map((tweet) => tweet.id))
}

async function getTweets(options){
	const response = await T.get('/search/tweets',options)
	const tweets = response.data.statuses
	const orderedTweets = tweets.sort((a,b)=> a.id - b.id)
	return orderedTweets
}

index()




