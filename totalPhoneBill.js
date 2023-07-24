export default function totalPhoneBill(data){


  if(data!=undefined){
  
  var dataList=data.split(", ");
  var bill=0;
  
  for(var i=0;i<dataList.length;++i){
  
    if(dataList[i]=="call"){
      
      bill+=2.75;
       }
    
    else if(dataList[i]=="sms"){
      
      bill+=0.65;
    }
  
  }
}
  bill=parseFloat(bill).toFixed(2);
  return  "R"+ bill;
}