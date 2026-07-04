const pages=[

`Once upon a time...

On

21 June 2021

two strangers met.

Neither of us knew

that one simple friendship

would change our lives forever. ❤️`,

`You slowly became

my favourite notification,

my favourite conversation,

my favourite smile,

and my favourite person.`,

`We laughed together.

Shared secrets.

Stayed up late talking.

Supported each other.

Those little moments

became beautiful memories.`,

`Then...

on

29 March 2022

our friendship

turned into love. ❤️`,

`Since that day,

every hug,

every goodbye,

every "Take care",

every "I miss you"

has become part of

our beautiful story.`,

`We have celebrated

6 birthdays together

as best friends.

We have celebrated

5 birthdays together

as lovers.

Every birthday with you

has been my favourite one.`,

`Today

you turn

28.

I couldn't be happier

to celebrate another birthday

with the person

who means everything to me.`,

`Happy Birthday

My Sudu Ayya ❤️

I hope this is only

the beginning...

because I want to celebrate

every birthday

for the rest of our lives together.

❤️

Love,

Chuti

Click "Next"

to see our beautiful memories. 📸`

];

let index=0;

const page=document.getElementById("page");

const current=document.getElementById("current");

function show(){

page.style.animation="none";

void page.offsetWidth;

page.style.animation="fade .7s";

page.innerHTML=pages[index];

current.innerHTML=index+1;

if(index===pages.length-1){

document.getElementById("next").innerHTML="Our Memories ❤️";

}else{

document.getElementById("next").innerHTML="Next ➜";

}

}

show();

document.getElementById("next").onclick=function(){

if(index<pages.length-1){

index++;

show();

}else{

window.location="gallery.html";

}

}

document.getElementById("prev").onclick=function(){

if(index>0){

index--;

show();

}

}