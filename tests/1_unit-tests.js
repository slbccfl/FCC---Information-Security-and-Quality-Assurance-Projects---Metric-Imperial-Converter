/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){ 
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      var input = '32L'; 
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      var input = '32.1L'
      assert.equal(convertHandler.getNum(input),32.1);
      done();
    });
    
    test('Fractional Input', function(done) {
      var input = '32/16L'
      assert.equal(convertHandler.getNum(input),2);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      var input = '240.25/15.5L'
      assert.equal(convertHandler.getNum(input),15.5);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      var input = '4/2/2L'
      assert.equal(convertHandler.getNum(input),'invalid number');
      done();
    });
    
    test('No Numerical Input', function(done) {
      var input = 'L'
      assert.equal(convertHandler.getNum(input),1); 
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','L','mi','km','lbs','kg'];
      input.forEach(function(ele) {
        assert.equal(convertHandler.getUnit(ele),ele);
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      assert.equal(convertHandler.getUnit('xyz'),'invalid unit'); 
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      var input = ['gal','L','mi','km','lbs','kg'];
      var expect = ['L','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    test('For Each Valid Unit Inputs', function(done) { 
      var input = ['gal','L','mi','km','lbs','kg'];
      var expect = ['gallons','liters','miles','kilometers','pounds','kilograms'];
      input.forEach(function(ele, i) { 
        assert.equal(convertHandler.spellOutUnit(ele),expect[i]); 
      }); 
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('gal to L', function(done) { 
      var input = [5, 'gal'];
      var expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to gal', function(done) {
      
      var input = [5, 'L'];
      var expected = 5/(18.9271/5);
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('mi to km', function(done) {
      var input = [1, 'mi'];
      var expected = 1.60934;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('km to mi', function(done) {
      var input = [1, 'km'];
      var expected = 1/1.60934;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('lbs to kg', function(done) {
      var input = [1, 'lbs'];
      var expected = 0.453592;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('kg to lbs', function(done) {
      var input = [1, 'kg'];
      var expected = 1/0.453592;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
  });

});