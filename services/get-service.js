(function() {
    'use strict';
    var sistlasModel = require('../models/sistlas');

    // make mongo call and get the data
    module.exports = function(params, next){
        return sistlasModel[params].find({},function(err, data) {
            if (err){
                return next(err);
            }
            return next(null, data);
        });
    };
})();