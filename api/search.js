const _ = require('lodash');
const send = require('../lib/response');
const db = require('../lib/db');

module.exports.handler = (event, context, callback) => {
    const name = decodeURI(event.pathParameters.name.toLowerCase());
    console.log(name);
    
    return db.findCat(name)
        .then((cat) => {
            if (_.isEmpty(cat)) {
                callback(null, send.responseObject(201, { }));
            } else {
                callback(null, send.responseObject(201, { name: cat.name, imagePath: encodeURI(cat.imagePath), id: cat.id }));
            }
        });
};
