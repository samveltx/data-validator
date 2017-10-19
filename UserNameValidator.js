const Validator = require('./Validator.js');

class UsernameValidator extends Validator{

  isUserName(username){

    if(!username || !super.isString(username))
      return false;

    let usernameRegExp = /^[\w+_-]{4,24}$/;
    if(usernameRegExp.test(username))
      return true;

    return false;

  }
}

module.exports = UsernameValidator;
