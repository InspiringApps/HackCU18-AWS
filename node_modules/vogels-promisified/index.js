"use strict";

var Promise = require("bluebird");
var vogels = require("vogels");

Promise.promisifyAll(require('vogels/lib/table').prototype);
Promise.promisifyAll(require('vogels/lib/item').prototype);
Promise.promisifyAll(require('vogels/lib/query').prototype);
Promise.promisifyAll(require('vogels/lib/scan').prototype);
Promise.promisifyAll(require('vogels/lib/parallelScan').prototype);

var vogels_model = vogels.model;
vogels.model = function(name, model){
  if (model) { Promise.promisifyAll(model); }
  return vogels_model.apply(vogels, arguments);
};

Promise.promisifyAll(vogels);

module.exports = vogels;
