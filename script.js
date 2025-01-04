function firstNonRepeatedChar(str) {
 // Write your code here
	// if(str.length===0)return null;
	let i=0,j=0,counter=0;
	while(j<str.length){
		if(str[i]===str[j])++counter;
		else if(str[i]!==str[j]){
			if(counter===1)return str[i];
			counter=1;
			i=j;
		}
		++j;
	}
	return counter===1?str[i]:null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
  
