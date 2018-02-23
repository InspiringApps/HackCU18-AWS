'use strict';

const _ = require('lodash');
const vogels = require('vogels-promisified');
const Joi    = require('joi');
const uuidv4 = require('uuid/v4');

vogels.AWS.config.update('us-east-1'); // region must be set

const catsTable = process.env.CATS_TABLE;

// Table Schema
var Cats = vogels.define('Cats', {
    hashKey : 'type',
    rangeKey: 'searchName',
    tableName : catsTable,
    timestamps : true,
    
    schema : {
        id: vogels.types.uuid(),
        name: Joi.string(),
        description: Joi.string(),
        imagePath: Joi.string(),
        type: Joi.string().default('Cat'),
        searchName: Joi.string()
    },
    indexes : [{
        hashKey : 'id',
        name : 'id-index',
        type : 'global'
    }]
});


// Public Functions
module.exports = {
    createCat: function(cat) {
        cat.searchName = cat.name.toLowerCase();
        
        return new Promise((resolve, reject) => {
            Cats.create(cat, function (err, cat) {
                if (err) {
                    reject(err);
                } else {
                    resolve(cat);
                }
            });
        });
    },

    deleteCat: function(cat) {
        cat.searchName = cat.name.toLowerCase();
        cat.type = 'Cat';
        return new Promise((resolve, reject) => {
            Cats.destroy(cat, function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve('Cat has been deleted :(');
                }
            });
        });
    },

    findCat: function(name) {
        return Cats
            .query('Cat')
            .where('searchName').beginsWith(name)
            .execAsync()
            .then((foundCat) => {
                var cat = foundCat.Items[0];
                if (foundCat.Count === 0) {
                    return {};
                } else {
                    return {
                        id: cat.get('id'),
                        name: cat.get('name'),
                        imagePath: cat.get('imagePath')
                    };
                }
            })
            .catch((err) => {
                return err;
            });
    },

    getCatById: function(id) {
        return Cats
            .query(id)
            .usingIndex('id-index')
            .execAsync()
            .then((foundCat) => {
                var cat = foundCat.Items[0];
                if (foundCat.Count === 0) {
                    throw new Error('Cat not found');
                } else {
                    return {
                        id: cat.get('id'),
                        name: cat.get('name'),
                        imagePath: cat.get('imagePath')
                    };
                }
            })
            .catch((err) => {
                return err;
            });
    }
};
