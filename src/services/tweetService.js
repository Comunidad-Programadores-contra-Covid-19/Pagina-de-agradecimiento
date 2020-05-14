const Sequelize = require("sequelize");
const Tweet = require('../models').Tweet;
const config = require('../config/config.js');


 

exports.getGreatestTweetID = async function () {
  const tweet = await  Tweet.findOne({
    order: [ [ 'idFromTwitter', 'DESC' ]],
  });
  return tweet.idFromTwitter
}

exports.getExistingTweetIdsFromDB = async function () {
  const tweetIdsObject = await  Tweet.findAll({
    attributes: ['idFromTwitter'],
    raw: true
  })
  tweetIds = tweetIdsObject.map(e => e.idFromTwitter)
  return tweetIds
}