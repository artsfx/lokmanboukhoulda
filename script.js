window.onscroll = function() {
console.log("aboutme:"+document.querySelector("#aboutme").getBoundingClientRect().top+" , scrollY:"+window.scrollY);
	}
function aboutme(event) {
		let jumbotron = document.querySelector(".jumbotron-container");
		let aboutme = document.querySelector("#aboutme");
		let aboutmePos = aboutme.getBoundingClientRect().top;
		jumbotron.style.transitionProperty = "all";
		window.scrollBy(0, aboutmePos);
}



function portfolio(event) {
	let portfolio = document.querySelector("")
}