const TweetController = require('../controllers/twitterController');
const INTERVAL_MS = 1000 * 60 * 10 //10 minutes
let intervalID

if(process.argv[2] == 'start'){
  console.log('asd')
  intervalID = setInterval(TweetController.RepondToTweets, INTERVAL_MS);
}

