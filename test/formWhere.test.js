import assert from "assert";
import fromWhere from "../fromWhere.js";

describe("Test for fromWhere",function(){

    it("return the name of the town the car is from(Cape Town)",function(){

assert.equal("Cape Town",fromWhere("CA"));
});

    it("return the name of the town the car is from(Bellville)",function(){
assert.equal("Bellville",fromWhere("CY"));
});


    it("return the name of the town the car is from(Paarl)",function(){
assert.equal("Paarl",fromWhere("CJ"));
});

    it("return Some other place! if the registration number does not match any of the specified towns",function(){
assert.equal("Some other place!",fromWhere("MP"));
});

    it("return undefined  if user passes no argument",function(){
assert.equal(undefined,fromWhere());
});

    it("return Some other place!  if user passes empty string as an argument",function(){
assert.equal("Some other place!",fromWhere(""));

    });
});