const Post = require('../models/').Post;
const postValidator = require('../validators/postValidators');
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
}
