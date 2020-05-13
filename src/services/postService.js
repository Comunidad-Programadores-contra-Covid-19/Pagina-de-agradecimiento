const Sequelize = require("sequelize");
const Post = require('../models').Post;
const postValidator = require('../validators/postValidator');
const config = require('../config/config.js');

exports.get_posts = async function(page = 0) {
  const posts = await get_posts_from_db(page)
  return posts
}


exports.getpostByID = async function(postId = 1) {
  const post = await getPostFromDBById(postId)
  return post
}

async function get_posts_from_db(page = 0) {
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

async function getPostFromDBById(postId) {
  let post = await Post.findAll({where:{id:postId}})
  return post[0]
}
