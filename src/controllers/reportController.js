const Post = require('../models').Post;
const Report = require('../models').Report;
const reportValidator = require('../validators/reportValidator');
const config = require('../config/config.js');

exports.new_report = function (req,res) {
    let {postId, details, reasonId} = req.body;
    try{
            reportValidator({post: postId, details: details, reason: reasonId})
        Post.update(
            { isActive: false, },
            { where: {id:postId} }
        ).then(
            Report.create({postId, details, reasonId})
        )
        .then(res.status(200).send());
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}
