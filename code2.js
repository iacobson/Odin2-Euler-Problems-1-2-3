var problem2 = function () {
	var fibo1 = 1;
	var fibo2 = 1;
	var toteven1 = 0;
	var toteven2 = 0;
	var totevengen = 0;
	var limit2 = document.getElementById('limithtml2');

		for (fibo1 = 1; fibo1 < limit2.value && fibo2 < limit2.value; fibo1 = fibo1 + fibo2) {  // IMPORTANT !!! add ".value" otherwise to generate number. Otherwise will be zero
			fibo2 = fibo1 + fibo2;
			if (fibo1 % 2 === 0) {
				toteven1 += fibo1;
				if (fibo2 % 2 === 0) {
					toteven2 += fibo2;
				}
			}
			else if (fibo1 % 2 !== 0 && fibo2 % 2 === 0) {
				toteven2 += fibo2;
			}
		}
	totevengen = toteven1 + toteven2;
	
	console.log("fibolimit" + limit2);
	console.log("fibo1" + toteven1);
	console.log("fibo2" + toteven2);
	console.log("fiboeven" + totevengen);

	document.getElementById('final_result').innerHTML = totevengen;
}