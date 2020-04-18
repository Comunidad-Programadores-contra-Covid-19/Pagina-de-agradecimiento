let validators = [
    postTextValidate,
    postColorValidate,
    postFontValidate,
    postAuthorValidate,
    postImgpathValidate
]

 module.exports = function(pseudoPost){
    validators.forEach(validator => validator(pseudoPost));
}

function postTextValidate(pseudoPost){
    if(!pseudoPost.text)
        throw new Error("El texto no puede ser nulo");
}
function postImgpathValidate(pseudoPost){}
function postAuthorValidate(pseudoPost){}
function postFontValidate(pseudoPost){}
function postColorValidate(pseudoPost){}