import assert from "assert";
import findItemsOver20 from "../findItemsOver20.js";
describe("Test for findItemsOver20",function(){

    it("return a list of items whose  quantity is  above 20.",function(){

assert.equal(JSON.stringify([{name:'bananas', qty:23},{name:'apples', qty:37}]),JSON.stringify(findItemsOver20([{name:'pears', qty:20},{name:'bananas', qty:23},{name:'apples', qty:37}])
));
});

    it("return a list of items whose quantity is  above 20.",function(){

assert.equal(JSON.stringify([{name:'pears', qty:60},{name:'bananas',qty:23},{name:'apples', qty:37}]),JSON.stringify(findItemsOver20([{name:'pears', qty:60},{name:'bananas', qty:23},{name:'apples', qty:37}])
));
});

    it("return an empty list when no item has a quantity that's  above 20.",function(){

assert.equal(JSON.stringify([]),JSON.stringify(findItemsOver20([{name:'pears', qty:20},{name:'bananas', qty:12},{name:'apples', qty:7}])
));

});

    it("return  an empty list when user passes no argument.",function(){

assert.equal(JSON.stringify([]),JSON.stringify(findItemsOver20()
));

    }
    );

}
);
