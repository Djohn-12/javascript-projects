const checkFive = require('../checkFive.js');

describe("checkFive", function(){

   test("test will pass with a number less than 5", function(){
    let output = checkFive(2);
      expect(output).toEqual("2 is less than 5.");
   });
   

});