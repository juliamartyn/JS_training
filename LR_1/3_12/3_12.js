let res = document.getElementById("result");
let clas = 'result__item'

function show(n,n2) {
	res.innerHTML+= "<div class="+ clas + ">" + n2 + " * "+ n + " = " + n*n2 + "</div>";
}

for (let i = 1; i <= 9; i++) {
	for (let j = 1; j <= 9; j++) {
		show(i,j);
	}

}