export default function  findItemsOver20(list){

  var over20=[];
  
  if(list!=undefined){
  
for(var i=0;i<list.length;++i){

  var product=list[i];
  
  if(product.qty>20){
  
  over20.push(product);
  }
}
}

  return over20;
}
