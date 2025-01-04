function firstNonRepeatedChar(str) {
 // Write your code here
	if(str.length===0)return null;
	const freq = [];
	for(let i=0;i<26;++i)freq.push(0);
	for(let i=0;i<str.length;++i)freq[str.charCodeAt(i)-97]+=1;
	for(let i=0;i<26;++i){
		if(freq[i]===1)return String.fromCharCode(i+97);
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
  
