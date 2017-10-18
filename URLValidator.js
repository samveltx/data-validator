const Validator = requir('./Validator.js');
class URLValidator extends Validator{
  isURL(url){
    let urlRegExp = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/;
    if(urlRegExp.test(url))
      return true;
    else{
     return false;
  }
  }
}

module.exports = Validator;


