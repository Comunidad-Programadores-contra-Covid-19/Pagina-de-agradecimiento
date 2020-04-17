const Post = require('../../models/post');
const config = require('../../config/config.json');

exports.root = function (req,res) {
    Post.findAll({
        order: [
            ['likes', 'DESC'],
            ['dislikes', 'ASC']
        ]
    })
        .then(posts => posts.slice(0,config.firstNPosts))
        .then(posts => res.render('layouts/index', {posts}));
}