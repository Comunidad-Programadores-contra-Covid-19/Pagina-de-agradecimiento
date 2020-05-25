const cron = require('node-cron')
const tweetService = require('../services/tweetService');

const tasks = {};
const cronTimeSchedule = '*/30 * * * *'

exports.startReadTweets = ()=>{
  tweetService.LatestPostsFromToday()
  tasks['readTweets'] = cron.schedule(cronTimeSchedule,readTweets)
}

exports.stopReadTweets = ()=>{
  tasks['readTweets'].stop()
  tasks['readTweets'] = null
}

function readTweets(){
  tweetService.LatestPostsFromToday()
} 


exports.getCurrentlyRunningJobs_ = ()=>{
  tasks = Object.keys(tasks) 
  if (!tasks){
    return 'no running tasks'
  }
  return tasks
}
