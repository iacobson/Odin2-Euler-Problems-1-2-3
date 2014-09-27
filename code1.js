var problem1 = function() {

var total1 = 0;
var total2 = 0;

var limit1 = document.getElementById('limithtml1');

for (var num1=0; num1<limit1.value; num1=num1+3){
		if (num1%5 !==0) {
			total1=total1+num1;
		}
	
}

for (var num2=0; num2<limit1.value; num2=num2+5){
	total2=total2+num2;
}

var totalgen = total1+total2;


console.log(limit1)
console.log(total1)
console.log(total2)
console.log("total"+totalgen);

}