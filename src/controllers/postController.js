const Post = require('../../models/post');
const config = require('../../config/config.json');

exports.new_post = function (req,res) {
    let { text, imgpath, author, font, color} =  req.body;
    Post.create({
        text,
        imgpath,
        author,
        font,
        color
    })
        .then(post => console.log(post));
}
