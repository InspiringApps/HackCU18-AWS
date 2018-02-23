const _ = require('lodash');
const send = require('../lib/response');
const db = require('../lib/db');
const utils = require('../lib/utils');

module.exports.handler = (event, context, callback) => {
    var data = JSON.parse(event.body);

    return db.createCat(data)
        .then((cat) => {
            callback(null, send.responseObject(201, { id: cat.get('id'), name: cat.get('name'), imagePath: cat.get('imagePath') }));
        });
};
