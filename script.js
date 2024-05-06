function stringChop(str, size) {
  // your code here
	let arr = [];
  if(str == "")
  {
      return arr;
  } else{
   
      while(str.length > size) {
        arr.push(str.slice(0, size));
        str = str.slice(size, str.length);
      }
      if(str.length<= size) 
      {
          arr.push(str.slice(0,str.length));
      }
      
      return arr;
  }
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
