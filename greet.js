 export default  function greet(name){
  
  if(!(isNaN(name))){
  	return "Please enter a valid name";
  	}
  else{
  return "Hello, " + name;
  }
}