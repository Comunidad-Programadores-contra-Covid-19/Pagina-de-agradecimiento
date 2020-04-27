const Post = require('../models').Post;
const config = require('../config/config.js');
const testPosts = [{name:'a'},{name:'b'},{name:'c'}]

exports.root = function (req,res) {
	/*
	Post.findAll({
        order: [
            ['likes', 'DESC'],
        ],
        limit: config.firstNPosts
    })
        //.then(posts => res.render('index', {title:'Home page',posts}));
    */
	res.render('index', {title:'Home page',posts:testPosts})
}