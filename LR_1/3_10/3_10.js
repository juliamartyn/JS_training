let n = prompt("Кількість студентів:",5);
let res = document.getElementById("result");

let students = {
	s1:{
		name:"Ira",
		surname:"Verner"
	},
	s2:{
		name:"Kate",
		surname:"Terner"
	},
	s3:{
		name:"Inna",
		surname:"Noven"
	},
	s4:{
		name:"Ann",
		surname:"Fasten"
	},
	s5:{
		name:"Max",
		surname:"Osovskkiy"
	}
}

function show(n,i) {
	res.innerHTML+= "<div class='result__item'>" + students['s'+i].name + " " + students['s'+i].surname + "</div>";
}

function check(n){
	if( n == null || n <= 0){
		n = prompt("Кількість студентів:",3);
		check(n);
	}
	else{
		for (let i = 1; i <= n; i++) {
			show(n,i);
		};
	}	
}



check(n);
