/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      // console.log(input);
      var initNum = convertHandler.getNum(input);
      // console.log(initNum);
      var initUnit = convertHandler.getUnit(input);
      // console.log(initUnit);
      
      if (initNum == 'invalid number' && initUnit == 'invalid unit') {
          res.send('invalid number and unit')
      } else {
        if (initNum == 'invalid number') {
          res.send(initNum)
        } else {
          if (initUnit == 'invalid unit') {
            res.send(initUnit)
          } else { 
            var returnNum = convertHandler.convert(initNum, initUnit);
            // console.log(returnNum);
            var returnUnit = convertHandler.getReturnUnit(initUnit);
            // console.log(returnUnit);
            var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
            // console.log(toString);
            res.json(toString);
          }
        }
      }
    });
    
};
