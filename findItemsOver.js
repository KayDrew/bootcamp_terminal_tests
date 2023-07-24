export default function findItemsOver(list,quantity){

    var overThreshold=[];
    
    if(list!=undefined && quantity!=undefined)
  {  
    for(let i=0;i<list.length;++i){

        var product=list[i];

        if(product.qty>quantity){

            overThreshold.push(product);
        }
    }
}
    return overThreshold;
}