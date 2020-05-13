const Sequelize = require("sequelize");
const Tweet = require('../models').Tweet;
const config = require('../config/config.js');


 

exports.getGreatestTweetID = async function () {
  const tweet = await  Tweet.findOne({
    order: [ [ 'idFromTwitter', 'DESC' ]],
  });
  return tweet.idFromTwitter
}