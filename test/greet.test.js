import assert from "assert";
import  greet from "../greet.js";

describe('Test for greet function' , function(){

    it('Return greeting plus the  name inputed  by user: Kabelo ' , function(){
 assert.equal("Hello, Kabelo",greet("Kabelo"));
});

    it('Return greeting plus the name inputed by user: Odin' , function(){
assert.equal("Hello, Odin",greet("Odin"));
});

    it('Return "Please  enter a valid name" if user input is a number' , function(){
assert.equal("Please enter a valid name",greet(123));
});

    it('Return "Hello, undefined" if user makes no input' , function(){
assert.equal("Hello, undefined",greet());        
    });

});
