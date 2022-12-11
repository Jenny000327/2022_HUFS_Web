const circle = document.querySelector("#circle");
const article = circle.querySelectorAll("article");

for(let el of article){
	el.addEventListener("mouseenter",e=>{
		circle.style.animationPlayState = "paused";
	});

	el.addEventListener("mouseleave", e=>{
		circle.style.animationPlayState = "running";
	});
}


const link = document.querySelector("a");
const link_herf=link.getAttribute("href");
console.log(link_herf);


function move1(){
	location.href ='text.html';
}

function move2(){
  location.href ='index.html';
}