class Validator {

   isString(str) {
     if (typeof str === 'string' || str instanceof String){
       return true;
     }
     else{
       return false;
     }

   } // returns true if str is string
   isNumber(num) {
     if (!isNaN(parseFloat(num)) && isFinite(num)) {
       return true;
     }
     else {
       return false;
     }

   } // returns true if num is a number
   isInteger(num) {
     if(Number.isInteger(num)){
       return true;
     }
     else {
       return false;
     }
   } // returns true if num is an integer
   isFloat(num) {
     if ( Number(num) === num && num % 1 !== 0){
       return true;
     }
     else{
       return false;
     }
   } // returns true if num is a float
   isSpecialSymbol(sym) {
     if (!(sym.match(/[a-z]/i) && sym.match(/[0-9]/i))){
       return true;
     }
     else{
       return false;
     }
   } // returns true if sym does not contain alpha (a-z, A-Z) and numbers (0-9)
   isDate(d) {
     var dateFormat = /^\d{1,4}[\.|\/|-]\d{1,2}[\.|\/|-]\d{1,4}$/;

   if (dateFormat.test(d)) {
       // remove any leading zeros from date values
       d = d.replace(/0*(\d*)/gi,"$1");
       var dateArray = d.split(/[\.|\/|-]/);

             // correct month value
       dateArray[1] = dateArray[1]-1;

       // correct year value
       if (dateArray[2].length<4) {
           // correct year value
           dateArray[2] = (parseInt(dateArray[2]) < 50) ? 2000 + parseInt(dateArray[2]) : 1900 + parseInt(dateArray[2]);
       }

       var testDate = new Date(dateArray[2], dateArray[1], dateArray[0]);
       if (testDate.getDate()!=dateArray[0] || testDate.getMonth()!=dateArray[1] || testDate.getFullYear()!=dateArray[2]) {
           return false;
       } else {
           return true;
       }
   } else {
       return false;
   }
}
   } // returns true if d is a valid date
}

module.exports = Validator;
