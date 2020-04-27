const Post = require('../models').Post;
const Reason = require('../models').Reason;

let validators = [
    reportReasonIdValidate,
    reportPostIdValidate
]

module.exports = function(pseudoReport){
    validators.forEach(validator => validator(pseudoReport));
}

async function reportPostIdValidate(pseudoReport){
    if(!pseudoReport.post)
        throw new Error("El post no puede ser indefinido");

    const post = await Post.findOne({where: {id: pseudoReport.post}});
    if (!post)
        throw new Error("El post no existe");

}

async function reportReasonIdValidate(pseudoReport){
    const reason = await Reason.findOne({where: {id: pseudoReport.reason}});
    if (!reason)
        throw new Error("La razon no existe");
}



