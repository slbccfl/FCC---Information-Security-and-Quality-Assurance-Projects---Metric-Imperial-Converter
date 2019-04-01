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
    result = input.match(/\d+(\.\d+)?/)[0]
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
    var unitPairs = {'gal':'L', 'L':'gal', 'lbs':'kg', 'kg':'lbs', 'mi':'km', 'km': 'mi'}
    var result;
    result = unitPairs[initUnit];
    return result;
  };

  this.spellOutUnit = function(unit) {
    var spelledOutUnits = {'gal':'gallons', 'L':'liters', 'lbs':'pounds', 'kg':'kilograms', 'mi':'miles', 'km': 'kilometers'}
    var result;
    result = spelledOutUnits[unit];
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var convertFactor = {'gal':3.78541, 'L':3.78541/1, 'lbs':0.453592, 'kg':0.453592/1, 'mi':1.60934, 'km': 1.60934/1}
    var result;
    result = initNum * convertFactor[initUnit];
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result = {"initNum": initNum, "initUnit": initUnit, "returnNum": returnNum, "returnUnit": returnUnit}
    return result;
  };
  
}

module.exports = ConvertHandler;
