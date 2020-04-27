var lunbo = document.getElementsByClassName("lunbo")[0];

var show = 1
var pre = 4

var lunboPre = function(){
	pre = show
	if(show == 1){
		show = 4
	}else{
		show--;
	}
	lunbo.classList.remove('lunbo'+pre)
	lunbo.classList.add('lunbo'+show)
	console.log(lunbo.classList)
}

var lunboNex = function(){
	pre = show
	if(show == 4){
		show = 1
	}else{
		show++;
	}
	lunbo.classList.remove('lunbo'+pre)
	lunbo.classList.add('lunbo'+show)
	console.log(lunbo.classList)
}

setInterval(lunboNex,10000)