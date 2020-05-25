const cron = require('node-cron')
const tweetService = require('../services/tweetService');

const tasks = {};

module.exports.startReadTweets = ()=>{
  tasks['readTweets'] = cron.schedule('* * * * * *',readTweets)
}

module.exports.stopReadTweets = ()=>{
  tasks['readTweets'].stop()
}

function readTweets(){
  tweetService.LatestPostsFromToday()
} 


module.exports.getCurrentlyRunningJobs = ()=>{
  return tasks
}
