var primetest = function (primeverif) {                    //defined a function to verify the prime number
	var prime = true;
	for (var nr_a=2; nr_a<primeverif; nr_a++) {      //tested before with FOR in FOR and did not work
		if (primeverif % nr_a === 0) {
			prime = false;
		}
	}
	return prime;
}


var problem3 = function () {	
	var primenumber = 0;
	var input_nr1 = document.getElementById('limithtml3');
	var input_nr = input_nr1.value;  // IMPORTANT !!! add ".value" otherwise to generate number. Otherwise will be zero

	for (var nr_b = 2; nr_b <= input_nr; nr_b++) {   
		if (input_nr % nr_b === 0) {
			input_nr = input_nr/nr_b;
			console.log ("nrb " + nr_b);
			console.log ("input_nr" + input_nr);
			if ( primetest(nr_b) === true) {
				primenumber = nr_b;
			}
		}
	}
	console.log ("biggest prime : " + primenumber);

	document.getElementById('final_result').innerHTML = primenumber;
}

