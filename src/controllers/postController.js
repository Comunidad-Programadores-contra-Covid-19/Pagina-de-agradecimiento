const Sequelize = require("sequelize");
const Post = require('../models/').Post;
const Tweet = require('../models/').Tweet;
const postValidator = require('../validators/postValidator');
const config = require('../config/config.js');
var Twit = require('twit');

var T = new Twit({
    consumer_key:config.consumer_key,  
    consumer_secret:config.consumer_secret,
    access_token:config.access_token,
    access_token_secret:config.access_token_secret
})


exports.new_post = function (req,res) {
    let { text, imgpath, author, font, color} =  req.body;

    try{
        postValidator({
            text: text,
            imgpath: imgpath,
            author: author,
            font: font,
            color: color
        });
        Post.create({
            text,
            imgpath,
            author,
            font,
            color
        })
            .then(post => res.status(200).send(post.url()));
    }
    catch(error){
        res.status(500).send(error.message);
    }
}


exports.new_post_from_twitter = function (req,res) {
    const tweet_id = req.body.id

    T.get('statuses/show/:id', { id: tweet_id }, function(err, data, response) {
        try{
            Post.create({
                text: data.text,
                imgpath: 'test/path',
                author: 'testAuthor'
            })
        .then(post => console.log(post));
        }
        catch(error){
            res.status(500).send(error.message);
        return;
        }     
    })

    res.sendStatus(200)
}

exports.likePost = function (req,res) {
    Post.findByPk(req.params.postId,)
        .then(function (likedPost) {
            if(!likedPost) throw new Error('No existe el post que se intenta likear')

            likedPost.update({likes: Sequelize.literal('likes + 1')})
                .then(res.status(200).send())
        }).catch(err => res.status(500).send(err.message))
}

exports.get_posts = function (req,res) {
    let { tags } = req.body;
    // TODO filtrar por tags tambien

    Post.findAll({
        where: {
            isActive: true,
        },
        order: [
            ['likes', 'DESC'],
        ],
        limit: config.firstNPosts,
        offset: (req.params.page * config.firstNPosts),
    })
        .then(function (posts) {
            res.status(200).send(posts)
        })
}