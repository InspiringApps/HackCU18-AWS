const _ = require('lodash');
const send = require('../lib/response');
const db = require('../lib/db');
const utils = require('../lib/utils');

module.exports.handler = (event, context, callback) => {
    var data = JSON.parse(event.body);

    return db.getCatById(data.id)
        .then((cat) => {
            return db.deleteCat(cat);
        })
        .then((res) => {
            return db.createCat({name: data.name, imagePath: data.imagePath})
        })
        .then((cat) => {
            callback(null, send.responseObject(201, {id: cat.get('id'), name: cat.get('name'), imagePath: cat.get('imagePath')}));
        })
        .catch((err) => {
            console.log(err);
        });
};
