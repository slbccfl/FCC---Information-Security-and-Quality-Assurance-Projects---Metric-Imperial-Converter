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
    var regexResult = input.match(/\d+(\.\d+)?(\/\d+(\.\d+)?)*/)
    if (regexResult == null) return 1;
    var numString = regexResult[0]
    if (numString.split('/').length > 2) return 'invalid number'
    var denom = numString.split('/',2)[1] 
    if (denom == undefined) denom = 1
    result = numString.split('/',2)[0] / denom
    return result;
  };
  
  this.getUnit = function(input) {
    var validUnits = ['gal','L','mi','km','lbs','kg'];
    var result;
    var unitInput = input.match(/[a-zA-Z]+/)[0];
    // console.log('getUnit unitInput: ' + unitInput); 
    validUnits.includes(unitInput) ? result = unitInput : result = 'invalid unit'; 
    // console.log('getUnit input: ' + input); 
    // console.log('getUnit result: ' + result);
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
    var convertFactor = {'gal':3.78541, 'L':1/3.78541, 'lbs':0.453592, 'kg':1/0.453592, 'mi':1.60934, 'km': 1/1.60934}
    var result;
    result = initNum * convertFactor[initUnit];
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result = {'initNum': initNum,
              'initUnit': initUnit,
              'returnNum': returnNum,
              'returnUnit': returnUnit,
              'string': initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit)
             }
    return result;
  };
  
}

module.exports = ConvertHandler;
