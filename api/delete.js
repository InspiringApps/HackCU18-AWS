const _ = require('lodash');
const send = require('../lib/response');
const db = require('../lib/db');
const utils = require('../lib/utils');

module.exports.handler = (event, context, callback) => {
    const data = JSON.parse(event.body);

    return db.getCatById(data.id)
        .then((cat) => {
            return db.deleteCat(cat);
        })
        .then((response) => {
            callback(null, send.responseObject(201, { response }));
        });
};
