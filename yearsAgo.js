export default function yearsAgo(year){

  var date= new Date();
  var thisYear= date.getFullYear();
   return thisYear-year;
   
}