// function stringChop(str, size) {
// 	if(!str){
// 		return [];
// 	}
// 	let result=[];
// 	for(let i=0; i<str.length; i=i+size){
// 		result.push(str.substring(i, i+size));
// 	}
// }
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
function stringChop(str, size) {
	if(!str){
		return [];
	}
	let result=[];
	for(let i=0; i<str.length; i=i+size){
		result.push(str.substring(i, i+size));
	}
	return result;
}

const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));