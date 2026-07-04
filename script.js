const text = `

Happy Birthday,

My Sudu Ayya ❤️

Today is all about celebrating you.

My best friend since 21 June 2021.

My love since 29 March 2022.

Thank you for choosing me.

`;

let i = 0;

const target = document.getElementById("typewriter");

function typing(){

if(i<text.length){

target.innerHTML += text.charAt(i);

i++;

setTimeout(typing,40);

}

}

typing();

document.getElementById("playMusic").onclick=function(){

document.getElementById("music").play();

};

document.addEventListener("mousemove",(e)=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),2000);

});

function kissRain(){

for(let i=0;i<60;i++){

setTimeout(()=>{

const kiss=document.createElement("div");

kiss.className="heart";

kiss.innerHTML="💋";

kiss.style.left=Math.random()*window.innerWidth+"px";

kiss.style.top=window.innerHeight+"px";

document.body.appendChild(kiss);

setTimeout(()=>kiss.remove(),2000);

},i*30);

}

}

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",kissRain);

});

document.getElementById("start").onclick=()=>{

alert("Our Story begins in Part 2 ❤️");

};