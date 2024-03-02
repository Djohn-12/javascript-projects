// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test("organization value", function(){
  expect(launchcode.organization).toBe("nonprofit")
})

test("executive name", function(){
  expect(launchcode.executiveDirector).toBe("Jeff")
})

test("Cool employees", function(){
  expect(launchcode.percentageCoolEmployees).toBe(100)
})

  // Write your unit tests here!

  
});