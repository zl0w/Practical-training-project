var nowIndex = 0;
var timer;

var  as1 = document.querySelectorAll(".two .two_1 .two_1_1 div");
var  pointAs = document.querySelectorAll(".two .two_1 .two_1_2 a")
// console.log(pointAs);

bannerTick();

function bannerTick(){
	timer = setInterval(function(){
		nowIndex += 1;
		// console.log(nowIndex);
		if(nowIndex == 5){
			nowIndex = 0;
		}
		changeAll();
	},1500);
}


// function changePointA(){
// 	for (var i=0;i<pointAs.length;i++) {
// 		pointAs[i].className = "red";
// 	}
// }

function changeImageA(){
	for (var i=0;i<as1.length;i++) {
		as1[i].style.display = "none";
		pointAs[i].style.color = "black"
	}
}

function changeAll(){
	changeImageA();	
	// changePointA();
	pointAs[nowIndex].style.color = "#D2B48C"
	as1[nowIndex].style.display = "block";
}

for (var i=0;i<pointAs.length;i++) {	
	var	pointA = pointAs[i];
	pointA.index = i;
	pointA.onmouseenter = function(){
		clearInterval(timer);
		nowIndex = this.index;
		changeAll();
	}
	pointA.onmouseout = function(){
		bannerTick();
	}
	pointA.onclick = function(){
		
	}
}

function goLeft(){
	nowIndex -= 1;
	if(nowIndex<0){
		nowIndex = 4;
	}
	changeAll();
}
function goRight(){
	nowIndex += 1;
	if(nowIndex==5){
		nowIndex = 0;
	}
	changeAll();
}
