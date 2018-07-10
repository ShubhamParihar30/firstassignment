var assert = require('assert');
var app = require('../app');
var expect = require('chai').expect;
var should = require('chai').should();
describe('Array', () => {
  describe('secondlargest()' ,() => {
    it('should return -1 when the array length is 1', function() {
      assert.throws(()=> {app.secondLargest([2]);}, Error, `length must be greater than 1`);
    });

    it('should return mixed array when the array has mixed data types', function() {
      assert.throws(()=> {app.secondLargest([2,a,3]);}, Error, `data type must be a integer`);
    });

    it('should return a number and that too secondlargest', function() {
      expect(app.secondLargest([3,56,7,32,9,14])).to.be.equal(32);
    });
  });

  describe('calculateFrequency()' ,() => {
    it('should return -1 when the string has size 0', function() {
      assert.throws(()=> {app.calculateFrequency("");}, Error, `length must be greater than 0`);
    });

    it('should return correct frequency of each lowercase alphabet', function() {
   	  expect(app.calculateFrequency("shali is running fast")).to.deep.equal({ s: 3, h: 1, a: 2, l: 1, i: 3, r: 1, u: 1, n: 3, g: 1, f: 1, t: 1 }) 	
    });

  });

  describe('flatten()' ,() => {
    it('should return -1 when the object has no key', function() {
      assert.throws(()=> {app.flatten({});}, Error, `no key in object`);
    });
    
    it('should return invalid when object is not passed', function() {
      assert.throws(()=> {app.flatten("123");}, Error, `object is not passed`);
    });

    it('should return correct flatten object as expected', function() {
      expect(app.flatten({"flatJSON": false, "i": { "am": { "not": { "so": { "flat": true, "unflat": false } }, "a": "tree" } }, "dates": [ { "day": 1 }, { "day": 8947 }]}))
      .to.deep.equal({"flatJSON": false, "i.am.not.so.flat": true, "i.am.not.so.unflat": false, "i.am.a": "tree", "dates.0.day": 1, "dates.1.day": 8947 }) 
    });
    
  });

});
