exports.e404 = function(req, res, next) {
    res.status(404).render('404');
}