// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS "understanding reduce and functions "</h1>`;

var numbers = [5,20,15,75,100];

var sum = numbers.reduce(function(acc,curval,index,numbers){
	/* console.log('accumulator',acc);
	  console.log('curvalue',curval);
	  console.log('index',index);
	  console.log('numbers',numbers); */
  return acc + curval;
});

var nestedArray = [[1,2],[3,4],[5,6],[7,8]];

var flattenetArray = 				            nestedArray.reduce(function(acc,curval,index){
	return acc.concat(curval);
});

var randomCharacters = ['a','x','f','e','r','w','q','r','a','x'];

var uniqCharaters = randomCharacters.reduce(function(acc,curval){
if(acc.indexOf(curval) == -1){
acc.push(curval);
}
return acc;
},[]); 

console.log(uniqCharaters);



var factorial = function (num){
	if(num){
	if(num === 1){
    return 1;
  }
  else{
  return  num * arguments.callee(num-1);
  }

	}
  }

var goc = factorial;

console.log(goc(5));
factorial = null;
console.log(goc(5));