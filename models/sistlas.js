(function(){
    'use strict';

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    // callback for each schemas
    function CallBackSchema(collectionName) {
        return new Schema({
            data: String
        }, {
            collection: collectionName
        });
    }

    module.exports = {
        history: mongoose.model('History', CallBackSchema('history')),
        sistlas: mongoose.model('Sistlas', CallBackSchema('sistlas')),
        culture: mongoose.model('Culture', CallBackSchema('culture')),
        honor: mongoose.model('Honor', CallBackSchema('honor')),
        leafs: mongoose.model('Leafs', CallBackSchema('leafs'))
    };
})();