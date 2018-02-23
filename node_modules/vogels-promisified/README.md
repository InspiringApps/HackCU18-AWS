# vogels-promisified

DynamoDB library [Vogels](https://github.com/ryanfitz/vogels) promisified for use with [Bluebird](http://bluebirdjs.com/docs/api-reference.html)

A drop-in replacement that extends Vogels with `Async` methods.

## Usage

```javascript
const vogels = require("vogels-promisified");
```

## Example

```javascript
var User = module.exports = vogels.define("User", {
  hashKey : "email",

  timestamps : true,

  schema : {
    _id : vogels.types.uuid(),
    email : Joi.string().email(),
  },
});

User
  .getAsync(email)
  .then(function(user){
    // ...
  })
  .catch(function(err){
    // ...
  });

User
  .scan()
  .where("_id").equals(userId)
  .execAsync()
  .then(function(user){
    // ...
  })
  .catch(function(err){
    // ...
  });
```
