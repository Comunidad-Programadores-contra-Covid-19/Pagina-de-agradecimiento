const Requester = require('../models').Requester;
const config = require('../config/config')

exports.ipChecker = function(req, res, next) {
    if(!process.env.PORT){
        next();
        return;
    }

    if(req.method === 'POST'){
       Requester.findOne({
           where: {ip: req.ip.toString()},
       })
           .then(requester => {
                if(!requester){
                    Requester.create({
                        ip: req.ip.toString(),
                    });
                    next();
                    return
                }

                if(new Date().getTime() > requester.lastRequest.getTime() + config.minTimeToCreateAPost*60000){
                    requester.update({
                        lastRequest: new Date()
                    })
                    next();
                    return;
                }

                res.redirect('/')
           })
    }
    if(req.method === 'get' || req.method === 'GET')
        next();
}