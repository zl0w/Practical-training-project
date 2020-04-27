var nowIndex = 0;
var as1 = document.querySelectorAll(".center .center_content .left_content .images a")
setInterval(function (){
	for(var i=0;i<as1.length;i++){
		as1[i].style.display="none";
	}
	nowIndex +=1;
	if(nowIndex ==4){
		nowIndex =0;
		}as1[nowIndex].style.display="block";
},2000)