const Sequelize = require("sequelize");
const Post = require('../models/').Post;
const postValidator = require('../validators/postValidator');
const config = require('../config/config.js');


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


exports.likePost = function (req,res) {
    Post.findByPk(req.params.postId,)
        .then(function (likedPost) {
            if(!likedPost) throw new Error('No existe el post que se intenta likear')
            likedPost.update({likes: Sequelize.literal('likes + 1')})
                .then(res.status(200).send())
        }).catch(err => res.status(500).send(err.message))
}
