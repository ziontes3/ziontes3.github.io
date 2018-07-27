/*function factorial(num){
	var result = 1;
	for(var i = 1; i <= num; i++){
		result *= i;
	}
	return result;
}*/

/*function kebabToSnake(str){

	newStr = str.replace(/-/g , "_");
	return newStr;
}*/
/*function sing(){
	console.log("Amazing grace, how sweet the sound");
	console.log("That saved a wretched like me");
}
setInterval(sing, 1000);
clearInterval(5);*/
/*var num = [1,2,3,4,5,6,,7,8,9,10];
var colors = ["red", "orange", "yellow", "green"];
num.forEach(function(color){
	if(color % 3 === 0){
		console.log(color);
	}

});
colors.forEach(function(color){
	console.log(color);
});*/
var todos = ["Buy new turtle"];
var input = prompt("What would like to do?");

while(input.indexOf("quit") !== -1){
	if(input.indexOf("list") !== -1){
		console.log(todos);
	}else if(input === "new"){
		var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
	}
	input = prompt("What would you like to do?");
}
console.log("OK, YOU QUIT THE APP");