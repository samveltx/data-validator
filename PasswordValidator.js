const Validator = require('./Validator.js');
class PasswordValidator extends Validator{

  isPassword(pass){

    if(!pass)
      return false;

    let passRegExp = /^[\w+_-]{6,20}$/;
    let nopassRegExp = /^(\w+)?(password)(\w+)?$/i;
    if(passRegExp.test(pass) && !nopassRegExp.test(pass))
      return true;

    return false;

  }
}
module.exports = Validator;
