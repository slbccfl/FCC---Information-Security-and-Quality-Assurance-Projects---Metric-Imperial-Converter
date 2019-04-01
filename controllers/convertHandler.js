/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    result = input.match('/\d+(\.\d+)?/')
    console.log(result);
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    
    if (input.includes("gal")) result = 'gal';
    if (input.includes("L")) result = 'L';
    if (input.includes("lbs")) result = 'lbs';
    if (input.includes("kg")) result = 'kg';
    if (input.includes("mi")) result = 'mi';
    if (input.includes("km")) result = 'km';
    if (result == undefined) result = 'invalid unit';
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result = {"initNum": initNum, "initUnit": initUnit, "returnNum": returnNum, "returnUnit": returnUnit}
    return result;
  };
  
}

module.exports = ConvertHandler;
