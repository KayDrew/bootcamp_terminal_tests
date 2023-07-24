import regCheck from "../regCheck.js";
import assert from "assert";
describe('Test for regCheck ' , function(){
    
    it('Return true when the two arguments exactly match.' , function(){
        assert.equal(true,regCheck('EC','EC'));
        });
        
    it('Return false when the casing does not match.' , function(){
        assert.deepEqual(false,regCheck('EC','ec'));
});
    it('Return false when the two arguments do not match.' , function(){
        assert.deepEqual(false,regCheck('MP','GP'));
});
    it('Return false when there is only one argument passed.' , function(){
        assert.equal(false,regCheck('EC'));
        });

    it('Return undefined when there is no argument passed at all.' , function(){
    	assert.equal(undefined, regCheck());
    });

});
