function stringChop(str, size) {
	if(!str){
		return [];
	}
	let result=[];
	for(let i=0; i<str.length; i=i+length){
		result.push(str.substring(i, i+length));
	}
}

const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
