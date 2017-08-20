(function() {
    'use strict';

    var service = require('../services/get-service');

    // controller callback for apis
    module.exports = function(req, res) {
        return service(req.params.section, function(err, data) {
            if (err) {
                return res.status(500).send({error: 'Failed to retrieve culture information: '+ err});
            }

            if (req.params.section === 'culture') {
                res.setHeader('Content-Type', 'text/html');
            }

            return res.status(200).send(data);
        });
    };
})();