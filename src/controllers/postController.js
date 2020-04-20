const Post = require('../models/').Post;
const postValidator = require('../validators/postValidators');
const config = require('../config/config.js');
var Twit = require('twit')

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
    }
    catch(error){
        res.status(500).send(error.message);
        return;
    }

    Post.create({
        text,
        imgpath,
        author,
        font,
        color
    })
        .then(post => console.log(post));

    res.sendStatus(200)
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
/*
    let { text, imgpath, author, font, color} =  req.body;

    

    Post.create({
        text,
        imgpath,
        author,
        font,
        color
    })
        .then(post => console.log(post));
*/
}
