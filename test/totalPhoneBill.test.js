import assert from "assert";
import totalPhoneBill from "../totalPhoneBill.js";

describe("Test for totalPhoneBill",function(){

    it("return the total cost of the phone bill for a combination of calls and sms's.",function(){
assert.equal("R6.15",totalPhoneBill("sms, call, call"));
});
    it("return the total cost of the phone bill for sms only.",function(){
assert.equal("R0.65",totalPhoneBill("sms"));
});
    it("return the total cost of the phone bill for  call only.",function(){
assert.equal("R2.75",totalPhoneBill("call"));
});

    it("return R0.00 if user passed empty string as input.",function(){
assert.equal("R0.00",totalPhoneBill(""));


    });
});