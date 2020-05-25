const cronScheduler = require('../services/cronService')

exports.toggleCron = function(req, res) {
  if (req.params.action === 'start'){
    cronScheduler.start()
    res.send('started')
  }else if (req.params.action === 'stop'){
    cronScheduler.stop();
    res.send('stoped')
  }
}

 
