const Post = require('../models').Post;
const config = require('../config/config.js');

exports.root = function (req,res) {
    Post.findAll({
        order: [
            ['likes', 'DESC'],
            ['dislikes', 'ASC']
        ],
        // limit: TODO ver que hacemos con estos o el slice
    })
        .then(posts => posts.slice(0,config.firstNPosts))
        .then(posts => res.render('index', {title:'Home page',posts}));
}