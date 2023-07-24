export default function mostProfitableDepartment(list){
  
  var productMap={};
  var profitable="";
  
  if(list!=undefined){

  for(var i=0;i<list.length;++i){
        
  var item=list[i].department;
    var price=list[i].sales;
    
   if(productMap[item]===undefined){
     
    productMap[item]=price;
    }   
    
   else if(productMap.hasOwnProperty(item)){
     
    productMap[item]=productMap[item]+price;
   }     
    
  }
   
   }
  var arr=Object.values(productMap);
 var highSale= Math.max(...arr);  
    
    for(var department in productMap){
    
      if(productMap[department]===highSale){
      
      profitable=department;
      }
    
    }   
 
  return profitable;
  
}
 

      
function mostProfitableDay(list){
  
  var productMap={};
  var profitable="";
  
   for(var i=0;i<list.length;++i){
   
     var item=list[i].day;
     var price=list[i].sales;
     
   if(productMap[item]===undefined ){
     
     productMap[item]=price;
   
   }
     
     
     else if (productMap.hasOwnProperty(item)){
     
       productMap[item]=productMap[item]+price;
     }
   }
  
  var arr= Object.values(productMap);
  var highSale=Math.max(...arr);
  
  for(day in productMap){
  
  if(productMap[day]===highSale){
  
  profitable=day;
  }
     
  }
  
 
  return profitable;
}