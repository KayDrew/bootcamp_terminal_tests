export default function countAllPaarl(regNumbers){

  var count;
  
    
  if(regNumbers !=undefined){

    var list=regNumbers.split(", ");
    count=0;
    
  for(var i=0;i<list.length;++i){
    
    if(list[i].startsWith("CJ")){
      
      count++;
       
       }
      }
  }

return count;
}


