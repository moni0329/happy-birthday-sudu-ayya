/* ==========================================
   Forever 28 - Timeline
   For Sudu Ayya ❤️
========================================== */

// ----------------------------
// IMPORTANT DATES
// ----------------------------

const friendshipDate = new Date("2021-06-21T00:00:00");
const loveDate = new Date("2022-03-29T00:00:00");

// ----------------------------
// COUNTER FUNCTION
// ----------------------------

function updateCounter(startDate, elementId) {

    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    let diff = now - startDate;

    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    document.getElementById(elementId).innerHTML = `
        <strong>${years}</strong> Years<br>
        <strong>${months}</strong> Months<br>
        <strong>${days}</strong> Days<br>
        ${hours} Hours ${minutes} Minutes ${seconds} Seconds
    `;
}

// ----------------------------
// UPDATE EVERY SECOND
// ----------------------------

function refreshCounters() {

    updateCounter(friendshipDate, "friendCounter");
    updateCounter(loveDate, "loveCounter");

}

refreshCounters();

setInterval(refreshCounters, 1000);

// ----------------------------
// SCROLL ANIMATION
// ----------------------------

const cards = document.querySelectorAll(".event");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            entry.target.style.transition =
                "all 0.8s ease";

        }

    });

}, {

    threshold: 0.2

});

cards.forEach(card => {

    observer.observe(card);

});

// ----------------------------
// FLOATING HEARTS
// ----------------------------

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";

    heart.style.fontSize =
        (18 + Math.random() * 20) + "px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    heart.style.transition = "all 8s linear";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transform =
            `translateY(-${window.innerHeight + 300}px)
             translateX(${Math.random()*200-100}px)
             rotate(${Math.random()*360}deg)`;

        heart.style.opacity = "0";

    }, 100);

    setTimeout(() => {

        heart.remove();

    }, 8500);

}

setInterval(createHeart, 1200);

// ----------------------------
// GOLD SPARKLES
// ----------------------------

function sparkle() {

    const star = document.createElement("div");

    star.innerHTML = "✨";

    star.style.position = "fixed";

    star.style.left = Math.random() * window.innerWidth + "px";

    star.style.top = Math.random() * window.innerHeight + "px";

    star.style.fontSize =
        (12 + Math.random() * 12) + "px";

    star.style.opacity = "0";

    star.style.transition = "all 2s";

    star.style.pointerEvents = "none";

    document.body.appendChild(star);

    setTimeout(() => {

        star.style.opacity = "1";
        star.style.transform = "scale(1.5)";

    }, 50);

    setTimeout(() => {

        star.style.opacity = "0";

    }, 1200);

    setTimeout(() => {

        star.remove();

    }, 2200);

}

setInterval(sparkle, 500);

// ----------------------------
// KISS RAIN
// ----------------------------

function kissRain() {

    for (let i = 0; i < 35; i++) {

        setTimeout(() => {

            const kiss = document.createElement("div");

            kiss.innerHTML = "💋";

            kiss.style.position = "fixed";

            kiss.style.left =
                Math.random() * window.innerWidth + "px";

            kiss.style.top = "-50px";

            kiss.style.fontSize = "28px";

            kiss.style.transition = "all 4s linear";

            kiss.style.pointerEvents = "none";

            kiss.style.zIndex = "9999";

            document.body.appendChild(kiss);

            setTimeout(() => {

                kiss.style.top =
                    window.innerHeight + 50 + "px";

                kiss.style.transform =
                    `rotate(${Math.random()*360}deg)`;

            }, 50);

            setTimeout(() => {

                kiss.remove();

            }, 4500);

        }, i * 100);

    }

}

// ----------------------------
// NEXT PAGE
// ----------------------------

const nextBtn = document.getElementById("nextPage");

nextBtn.addEventListener("click", () => {

    kissRain();

    nextBtn.innerHTML = "Loading Birthday Cake... 🎂";

    setTimeout(() => {

        window.location.href = "cake.html";

    }, 2500);

});

// ----------------------------
// WELCOME EFFECT
// ----------------------------

window.onload = () => {

    kissRain();

};