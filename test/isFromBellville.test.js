import isFromBellville from "../isFromBellville.js";
import assert from "assert";

describe('Test for isFromBellville' , function(){
	
    it('Return true if registration number starts with "CY".' , function(){

        assert.equal(true,isFromBellville('CY 123'));
        });
        
    it('Return true if registration number starts with "CY".Return false if it does not' , function(){
assert.equal(true,isFromBellville('CY 879'));
});
    
    it('Return false if registration number start does not start with "CY".' , function(){
        assert.equal(false,isFromBellville('CA 453'));
});
    it('Return undefined if there is no user input' , function(){
        assert.deepEqual(undefined,isFromBellville());
        });
        
    it('Return false if  the casing of the registration number does not match.' , function(){
        assert.equal(false,isFromBellville('Cy 123'));
  
  
  
        
    });

});
