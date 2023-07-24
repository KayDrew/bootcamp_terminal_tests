import assert from "assert";
import countAllFromTown from "../countAllFromTown.js";

describe("Test for countAllFromTown",function(){

    it("This should return the number of cars (2) from the specific town specified on the second perimeter",function(){

assert.equal(2,countAllFromTown("CJ 123, GP 321, CD 678, CJ 666","CJ"));
});

it("This should return the number of cars (3) from the specific town specified on the second perimeter",function (){
assert.equal(3,countAllFromTown("CA 123, CA 321, CD 678, CA 666,","CA"));
});


    it('This test should return zero as there no cars from the town specified in the second argument', function(){

assert.equal(0,countAllFromTown("CA 564","GP"));

});

it("This  test should  return zero if any of the arguments  is missing.", function (){

assert.equal(0,countAllFromTown("", "CA"));

assert.equal(0,countAllFromTown("CJ 11", " "));
});

});




