    import assert from "assert";
    import yearsAgo from "../yearsAgo.js";
     describe("Test for years ago",function(){

    it("return the number of years between current year and the entered year. ",function(){
        assert.equal(3,yearsAgo(2020));
        });
        
    it("return zero if the entered  year is the same as the current year. ",function(){
        assert.equal(0,yearsAgo(2023));
        });
        
    it("return NaN if input is not a number. ",function(){
        assert.deepEqual(NaN,yearsAgo());
        
    });
});