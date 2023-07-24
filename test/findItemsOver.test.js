import assert from "assert";
import findItemsOver from "../findItemsOver.js";

describe("Test for findItemsOver",function(){

    it("return true when the returned  list of items above the threshold specified in the second argument is exactly equal  to the first argument in the assert method",function(){

assert.equal(JSON.stringify([{name:'apples', qty:37}]),JSON.stringify(findItemsOver([{name:'pears', qty:20},{name:'bananas', qty:23},{name:'apples', qty:37}],30)
));

});

    it("return false if the function does not return the same list as the test list.",function(){

assert.equal(false,JSON.stringify([{name:'apples', qty:37},{name:'pears', qty:20}])==JSON.stringify(findItemsOver([{name:'pears', qty:20},{name:'bananas', qty:23},{name:'apples', qty:37}],30)
));

});

    it("return  empty array[] when user passes no argument",function(){

assert.equal(true,JSON.stringify([])==JSON.stringify(findItemsOver([])));

    }
    );

}
);
