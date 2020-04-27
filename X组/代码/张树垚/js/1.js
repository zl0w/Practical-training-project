window.onload = function() {
	var a1 = document.getElementById("a1");
	var a2 = document.getElementById("a2");
	var a3 = document.getElementById("a3");
	var btn = document.getElementById("button");
	var btn1 = document.getElementById("button1");
	var modal = document.getElementById("modal");
	var modal1 = document.getElementById("modal1");
	var yanshi = document.getElementById("true");
	var yanshi1 = document.getElementById("true1");


	var mp4 = document.getElementsByClassName("btn-primary promo__wrapper__content__btn")
	a1.onmouseover = function() {
		a1.setAttribute("style", "background-color: #2F4154;");
	}
	a2.onmouseover = function() {
		a2.setAttribute("style", "background-color: #2F4154;");
	}
	a3.onmouseover = function() {
		a3.setAttribute("style", "background-color: #2F4154;");
	}
	a1.onmouseout = function() {
		a1.removeAttribute("style", "background-color: #2F4154;");
	}
	a2.onmouseout = function() {
		a2.removeAttribute("style", "background-color: #2F4154;");
	}
	a3.onmouseout = function() {
		a3.removeAttribute("style", "background-color: #2F4154;");
	}
	a1.onclick = function() {
		window.location.href = "#content_head"
	}
	a2.onclick = function() {
		window.location.href = "#select"
	}
	a3.onclick = function() {
		window.location.href = "#operator__header"
	}
	btn.onclick = function() {
		
		modal.setAttribute("style", "display: none;");
	}
	btn1.onclick = function() {
		yanshi1.setAttribute("src", "");
		modal1.setAttribute("style", "display: none;");
	}
	
	mp4[0].onclick = function() {
		
		modal.removeAttribute("style", "display: none;");

	}
	mp4[1].onclick = function() {
		yanshi1.setAttribute("src",
			"https://www.youtube.com/embed/Am2Z-Slz7Ks?autoplay=1&amp;loop=0&amp;rel=0&amp;enablejsapi=1&amp;origin=https://www.ubisoft.com"
		);
	
		modal1.removeAttribute("style", "display: none;");

	}


}
