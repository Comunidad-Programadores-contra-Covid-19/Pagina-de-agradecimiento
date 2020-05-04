const Sequelize = require("sequelize");
const Post = require('../models').Post;
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
  console.log('entered like')
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

exports.new_post_from_hashtag = function (req,res) {
    let hashtag = req.body.hashtag
    if (hashtag.charAt(0) === '#') { hashtag = hashtag.slice(1) }

    T.get('/search/tweets/', { q: hashtag, count: 5 }, function(err, data, response) {
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

exports.create_post_page = function (req,res) {
    res.render('create_post',{url: config.domain.concat('/post')});
}