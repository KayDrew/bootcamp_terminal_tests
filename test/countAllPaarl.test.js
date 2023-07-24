import assert from "assert";
import countAllPaarl from "../countAllPaarl.js";

describe("Test for countAllPaarl",function(){

    it("This test should return the number of cars(3) from Paarl",function(){

assert.equal(3,countAllPaarl("CJ 123, CJ 321, CD 678, CJ 666"));
}); 

 it("This test should return the number of cars(1) from Paarl",function(){
assert.equal(1,countAllPaarl("CA 123, CJ 321, CD 678, KZN 666"));
});

 it("This test should return zero when there are no cars from Paarl",function(){
assert.equal(0,countAllPaarl("CA 123, CA 321, CD 876, CN 333"));
});

 it("This test should return 'undefined' when there is no user input",function(){
assert.deepEqual(undefined,countAllPaarl());



    });
});
