const Sequelize = require("sequelize");
const Post = require('../models').Post;
const postValidator = require('../validators/postValidator');
const config = require('../config/config.js');
const postService = require('../services/postService')

exports.new_post = function(req, res) {
  let {
    text,
    imgpath,
    author,
    font,
    color
  } = req.body;
  try {
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
      .then(post => res.render('create_post_congrats',{card:post,url:post.url()}));
  } catch (error) {
    res.status(500).send(error.message);
  }
}


exports.likePost = function(req, res) {
  Post.findByPk(req.body.postId)
    .then(function(likedPost) {
      if (!likedPost) throw new Error('No existe el post que se intenta likear')
      likedPost.update({
          likes: Sequelize.literal('likes + 1')
        })
        .then(res.status(200).send())
    }).catch(err => res.status(500).send(err.message))
}


exports.get_posts = async function(req, res) {
  // TODO filtrar por tags tambien
  let tags = req.body.tags || 'all';
  let page = req.params.page || 1
  
  try{
    const posts = await postService.get_posts(page)
    res.status(200).send(posts)  
  }catch (e){
    res.status(500).send(e)
  }
  
}

exports.get_posts_html = async (req,res) =>{
  let tags = req.body.tags || 'all';
  let page = req.params.page || 1
  
  try{
    const posts = await postService.get_posts(page)
    posts = postService.addHeightWidthToPosts(posts)
    

    res.status(200).send(posts)  

  }catch (e){
    res.status(500).send(e)
  }
}

exports.new_post_from_hashtag = function(req, res) {
  let hashtag = req.body.hashtag
  if (hashtag.charAt(0) === '#') {
    hashtag = hashtag.slice(1)
  }

  T.get('/search/tweets/', {
    q: hashtag,
    count: 5
  }, function(err, data, response) {
    try {
      Post.create({
          text: data.text,
          imgpath: 'test/path',
          author: 'testAuthor'
        })
        .then(post => console.log(post));
    } catch (error) {
      res.status(500).send(error.message);
      return;
    }
  })

  res.sendStatus(200)
}

exports.create_post_page = function(req, res) {
  res.render('create_post', {
    url: config.domain.concat('/post')
  });
}

exports.congrats = function (req,res) {
    // Post.findByPk(parseInt(req.params.id))
    //     .then(post =>{
    //         if(!post){} //TODO 404 page
    //
    //
    //     })
    //     .then(res.render('create_post_congrats'));
    console.log(__dirname);
    // res.render('create_post_congrats');
}

exports.test = function (req,res) {
    res.render('create_post_congrats')
}