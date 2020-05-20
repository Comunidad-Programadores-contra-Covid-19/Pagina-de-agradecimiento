const TweetController = require('../controllers/twitterController');
const INTERVAL_MS = 1000 * 60 * 2 //2 minutes
let intervalID

if(process.argv[2] == 'start'){
  intervalID = setInterval(TweetController.LatestPostsFromToday, INTERVAL_MS);
}

