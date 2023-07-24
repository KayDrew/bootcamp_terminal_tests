export default function  countAllFromTown(regNumbers,regStart){

 

  var count=0;

  if(regNumbers!=undefined && regStart!=undefined){
  
var list1=regNumbers.split(", ");
var list2= String(list1);
var list=list2.split(",");

  for(var i=0;i<list.length;++i){
  
  if(list[i].startsWith(regStart)){
  
  count++;
  }
  }
}

  return count;
}