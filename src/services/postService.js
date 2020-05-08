const Sequelize = require("sequelize");
const Post = require('../models').Post;
const postValidator = require('../validators/postValidator');
const config = require('../config/config.js');

exports.get_posts = async function(page = 1) {
  const posts = await get_posts_from_db(page)
  return posts
}

async function get_posts_from_db(page = 1) {
  return Post.findAll({
    where: {
      isActive: true,
    },
    order: [
    ['likes', 'DESC'],
    ],
    limit: config.firstNPosts,
    offset: (page * config.firstNPosts),
  })
}

