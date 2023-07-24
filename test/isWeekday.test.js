import assert from "assert";
import isWeekday from "../isWeekday.js";

describe('Test for isWeekday' , function(){

    it('Return true if it is a weekday(Friday)' , function(){

        assert.equal(true,isWeekday("Friday"));
     });
   
    it('Return false if it is NOT  a weekday(Saturday)' , function(){
        assert.deepEqual(false,isWeekday("Saturday"));
});

    it('Return false if user input is an empty string' , function(){
        assert.equal(false,isWeekday(''));   
        });
        
    it('Return false if there is no input' , function(){   
        assert.deepEqual(false,isWeekday());
});
        

});
