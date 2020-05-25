const cronScheduler = require('../services/cronService')

exports.toggleCronReadTweets = function(req, res) {
  if (req.params.action === 'start'){
    cronScheduler.startReadTweets()
    console.log('start')
    res.send('started')
  }else if (req.params.action === 'stop'){
    cronScheduler.stopReadTweets();
    console.log('stop')
    res.send('stoped')
  }else{
    res.sendStatus(400).end()
  }
}

exports.getCurrentlyRunningJobs = function(req,res) {
  console.log(cronScheduler.getCurrentlyRunningJobs_())
  res.end()
}
 
