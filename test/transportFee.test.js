import transportFee from "../transportFee.js";
import assert from "assert";


describe("test for transportFee", function (){

    it("return the fee cost according to shift(morning shift)",function(){
assert.equal("R20",transportFee("morning"));
});
 it("return the fee cost according to shift(afternoon shift)",function(){
assert.equal("R10",transportFee("afternoon"));
});

 it("return the fee cost according to shift(night shift)",function(){
assert.equal("free",transportFee("nightshift"));
});

 it("return 'not a valid entry' if the input does not match any of the tests",function(){
assert.equal("not a valid entry",transportFee("evening"));
});

 it("return 'not a valid entry' if no argument is passed. ",function(){
assert.equal("not a valid entry",transportFee());



    });
});
