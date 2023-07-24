export default function countRegNumber(regNumber)
{ 

  if(regNumber!=undefined){
  	
  if(regNumber==""){
return 0;
}
else{
var myArr= regNumber.split(",");
  
  return myArr.length;
  }
  
}

}