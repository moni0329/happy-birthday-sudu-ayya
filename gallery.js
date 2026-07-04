/* ===========================================
   Forever 28 ❤️
   Gallery Script
=========================================== */

// ============================
// Select Elements
// ============================

const photos = document.querySelectorAll(".photo img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const imageNumber = document.getElementById("imageNumber");

const closeBtn = document.getElementById("close");

const nextBtn = document.getElementById("next");

const prevBtn = document.getElementById("prev");

const playBtn = document.getElementById("playSlide");

const pauseBtn = document.getElementById("pauseSlide");

const timelineBtn = document.getElementById("timelineBtn");

let current = 0;

let slideshow = null;


// ============================
// Open Lightbox
// ============================

function openImage(index){

    current = index;

    lightbox.style.display = "flex";

    lightboxImage.src = photos[current].src;

    imageNumber.innerHTML =
        `Memory ${current+1} of ${photos.length}`;

}


// ============================
// Click Images
// ============================

photos.forEach((photo,index)=>{

    photo.addEventListener("click",()=>{

        openImage(index);

    });

});


// ============================
// Close
// ============================

closeBtn.onclick=()=>{

    lightbox.style.display="none";

};


// ============================
// Next
// ============================

nextBtn.onclick=()=>{

    current++;

    if(current>=photos.length){

        current=0;

    }

    openImage(current);

};


// ============================
// Previous
// ============================

prevBtn.onclick=()=>{

    current--;

    if(current<0){

        current=photos.length-1;

    }

    openImage(current);

};


// ============================
// Keyboard Navigation
// ============================

document.addEventListener("keydown",(e)=>{

    if(lightbox.style.display!="flex") return;

    if(e.key==="ArrowRight"){

        nextBtn.click();

    }

    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }

    if(e.key==="Escape"){

        closeBtn.click();

    }

});


// ============================
// Auto Slideshow
// ============================

playBtn.onclick=()=>{

    if(slideshow) return;

    openImage(0);

    slideshow=setInterval(()=>{

        nextBtn.click();

    },2500);

};


pauseBtn.onclick=()=>{

    clearInterval(slideshow);

    slideshow=null;

};


// ============================
// Floating Hearts
// ============================

function floatingHeart(){

    const heart=document.createElement("div");

    heart.className="floating-heart";

    const icons=["❤️","💕","💖","💗"];

    heart.innerHTML=
        icons[Math.floor(Math.random()*icons.length)];

    heart.style.left=
        Math.random()*window.innerWidth+"px";

    heart.style.top=
        window.innerHeight+"px";

    heart.style.setProperty(

        "--moveX",

        (Math.random()*200-100)+"px"

    );

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },5000);

}

setInterval(floatingHeart,700);


// ============================
// Continue
// ============================

timelineBtn.onclick=()=>{

    window.location="timeline.html";

};


// ============================
// Close by Clicking Background
// ============================

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

});


// ============================
// Small Entrance Animation
// ============================

window.onload=()=>{

    document.querySelectorAll(".photo").forEach((card,i)=>{

        card.style.animationDelay=(i*0.08)+"s";

    });

};