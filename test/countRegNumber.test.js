import assert from "assert";
import countRegNumber  from "../countRegNumber.js";

describe('Test for countRegNumber ' , function(){

    it('Return the number of registration(3) numbers passed in the argument' , function(){

        assert.equal(3,countRegNumber("CA 182736,CY 523519,CJ 812328"));
   });
   
       it('Return "undefined" when user has not passed any argument' , function(){
        assert.equal(undefined,countRegNumber());
});

    it('Return zero when user passes empty argument' , function(){
        assert.equal(0,countRegNumber(''));

    

        
    });

});





