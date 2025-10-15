// KFC BREAST AND THIGHS COMBO POST

const breastThighs = document.getElementById('breastThighsImg');
const breastUpdate = document.getElementById('hornyUpdate');
const breastThighsDiv = document.getElementById('breastThighsDiv')
const wolf = document.getElementById('wolfImg');

breastThighs.addEventListener('mouseover', () => {
  breastUpdate.style.visibility = 'visible';
  wolf.style.visibility = 'hidden';
  breastThighsDiv.classList.toggle('borderGlow');
})

breastThighs.addEventListener('mouseout', () => {
  breastUpdate.style.visibility = 'hidden';
  wolf.style.visibility = 'visible';
  breastThighsDiv.classList.toggle('borderGlow');
})



// MAKE ROAR SOUND PLAY ON CLICK

const roarAudio = document.getElementById('roarAudio');

function playRoar() {
  roarAudio.play();
}



// REVEAL HIDDEN "CRANK IT TO GORE" POST

const crankItDiv = document.getElementById('crankItDiv');
const crankItText = document.getElementById('crankItText');
const goreGIF = document.getElementById('goreGIF');

function revealGore() {
    if (goreGIF.style.visibility === "visible") {
    goreGIF.style.visibility = "hidden";
    crankItText.textContent = 'click here to crank it to gore';
  } else {
    goreGIF.style.visibility = "visible";
    crankItText.textContent = 'put it back';
  }
}

crankItDiv.addEventListener('mouseover', () => {
  crankItText.style.color = 'rgb(224, 224, 224)';
})

crankItDiv.addEventListener('mouseout', () => {
  crankItText.style.color = 'rgb(94, 21, 35)';
})


// FANDOM AS METHODOLOGY TEXT BOX

const fandomTextBox = document.getElementById('fandomAsMethodology');
const firstGIF = document.getElementById('firstGIF');
const twinkleSound = new Audio('assets/twinkleSound.mp3');

firstGIF.addEventListener('mouseover', () => {
  fandomTextBox.style.visibility = 'visible';
  twinkleSound.play();
})

firstGIF.addEventListener('mouseout', () => {
  fandomTextBox.style.visibility = 'hidden';
})



// MARCH 2023 TEXT BOX

const march2023TextBox = document.getElementById('march2023TextBox');
const office6 = document.getElementById('office6');
const closeMarch2023Top = document.getElementById('closeMarch2023Top');
const closeMarch2023Bottom = document.getElementById('closeMarch2023Bottom');


office6.addEventListener('click', () => {
  march2023TextBox.style.visibility = 'visible';
  office6.style.animationPlayState = 'paused';
})

closeMarch2023Top.addEventListener('click', () => {
  march2023TextBox.style.visibility = 'hidden';
  office6.style.animationPlayState = 'running';
})

closeMarch2023Bottom.addEventListener('click', () => {
  march2023TextBox.style.visibility = 'hidden';
  office6.style.animationPlayState = 'running';
})








// TEXT TYPING EFFECT

const typedTextSpan = document.getElementById("typed-text");
const textArray = ["i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. i feel in ways you cannot imagine. "];
const clickGif = document.getElementById("clickGif");
const eraseButton = document.getElementById("eraseButton");
const kerrang = document.getElementById("kerrang");

// Timing controls
const typingDelay = 10; // Speed of typing (ms per letter)
const erasingDelay = 0; // Speed of erasing (ms per letter)
const newTextDelay = 1000; // Pause before starting to erase
const startTextDelay = 100; // How fast typing starts after the click

let textIndex = 0; // Which sentence are we on?
let charIndex = 0; // Which character are we on?

// Type characters one by one
function type() {
  if (charIndex < textArray[textIndex].length) {
    typedTextSpan.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    // Pause before erasing --REMOVE THIS TO HAVE THE TEXT JUST STAY AND NOT ERASE
    // setTimeout(erase, newTextDelay);
    eraseButton.style.visibility = "visible";
  }
}

// Erase characters one by one
function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    // Move to the next text
    // textIndex = (textIndex + 1) % textArray.length;
    // setTimeout(type, typingDelay);
    clickGif.style.visibility = "visible";
    kerrang.style.visibility = "hidden";
  }
}

// Kick things off on div click
clickGif.addEventListener('click', () => {
  setTimeout(type, startTextDelay);
  clickGif.style.visibility = "hidden";
  kerrang.style.visibility = "visible";
});

function resetTypedText() {
  setTimeout(erase, erasingDelay);
  eraseButton.style.visibility = "hidden";
}















// CURSOR

var colour="rgba(0, 0, 0, 1)"; // in addition to "random" can be set to any valid colour eg "#f0f" or "red"
var sparkles=50;


/****************************
*  Tinkerbell Magic Sparkle *
*(c)2005-13 mf2fm web-design*
*  http://www.mf2fm.com/rv  *
* DON'T EDIT BELOW THIS BOX *
****************************/
var x=ox=400;
var y=oy=300;
var swide=800;
var shigh=600;
var sleft=sdown=0;
var tiny=new Array();
var star=new Array();
var starv=new Array();
var starx=new Array();
var stary=new Array();
var tinyx=new Array();
var tinyy=new Array();
var tinyv=new Array();

window.onload=function() { if (document.getElementById) {
  var i, rats, rlef, rdow;
  for (var i=0; i<sparkles; i++) {
    var rats=createDiv(3, 3);
    rats.style.visibility="hidden";
    rats.style.zIndex="999";
    document.body.appendChild(tiny[i]=rats);
    starv[i]=0;
    tinyv[i]=0;
    var rats=createDiv(5, 5);
    rats.style.backgroundColor="transparent";
    rats.style.visibility="hidden";
    rats.style.zIndex="999";
    var rlef=createDiv(1, 5);
    var rdow=createDiv(5, 1);
    rats.appendChild(rlef);
    rats.appendChild(rdow);
    rlef.style.top="2px";
    rlef.style.left="0px";
    rdow.style.top="0px";
    rdow.style.left="2px";
    document.body.appendChild(star[i]=rats);
  }
  set_width();
  sparkle();
}}

function sparkle() {
  var c;
  if (Math.abs(x-ox)>1 || Math.abs(y-oy)>1) {
    ox=x;
    oy=y;
    for (c=0; c<sparkles; c++) if (!starv[c]) {
      star[c].style.left=(starx[c]=x)+"px";
      star[c].style.top=(stary[c]=y+1)+"px";
      star[c].style.clip="rect(0px, 5px, 5px, 0px)";
      star[c].childNodes[0].style.backgroundColor=star[c].childNodes[1].style.backgroundColor=(colour=="random")?newColour():colour;
      star[c].style.visibility="visible";
      starv[c]=50;
      break;
    }
  }
  for (c=0; c<sparkles; c++) {
    if (starv[c]) update_star(c);
    if (tinyv[c]) update_tiny(c);
  }
  setTimeout("sparkle()", 40);
}

function update_star(i) {
  if (--starv[i]==25) star[i].style.clip="rect(1px, 4px, 4px, 1px)";
  if (starv[i]) {
    stary[i]+=1+Math.random()*3;
    starx[i]+=(i%5-2)/5;
    if (stary[i]<shigh+sdown) {
      star[i].style.top=stary[i]+"px";
      star[i].style.left=starx[i]+"px";
    }
    else {
      star[i].style.visibility="hidden";
      starv[i]=0;
      return;
    }
  }
  else {
    tinyv[i]=50;
    tiny[i].style.top=(tinyy[i]=stary[i])+"px";
    tiny[i].style.left=(tinyx[i]=starx[i])+"px";
    tiny[i].style.width="2px";
    tiny[i].style.height="2px";
    tiny[i].style.backgroundColor=star[i].childNodes[0].style.backgroundColor;
    star[i].style.visibility="hidden";
    tiny[i].style.visibility="visible"
  }
}

function update_tiny(i) {
  if (--tinyv[i]==25) {
    tiny[i].style.width="1px";
    tiny[i].style.height="1px";
  }
  if (tinyv[i]) {
    tinyy[i]+=1+Math.random()*3;
    tinyx[i]+=(i%5-2)/5;
    if (tinyy[i]<shigh+sdown) {
      tiny[i].style.top=tinyy[i]+"px";
      tiny[i].style.left=tinyx[i]+"px";
    }
    else {
      tiny[i].style.visibility="hidden";
      tinyv[i]=0;
      return;
    }
  }
  else tiny[i].style.visibility="hidden";
}

document.onmousemove=mouse;
function mouse(e) {
  if (e) {
    y=e.pageY;
    x=e.pageX;
  }
  else {
    set_scroll();
    y=event.y+sdown;
    x=event.x+sleft;
  }
}

window.onscroll=set_scroll;
function set_scroll() {
  if (typeof(self.pageYOffset)=='number') {
    sdown=self.pageYOffset;
    sleft=self.pageXOffset;
  }
  else if (document.body && (document.body.scrollTop || document.body.scrollLeft)) {
    sdown=document.body.scrollTop;
    sleft=document.body.scrollLeft;
  }
  else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
    sleft=document.documentElement.scrollLeft;
    sdown=document.documentElement.scrollTop;
  }
  else {
    sdown=0;
    sleft=0;
  }
}

window.onresize=set_width;
function set_width() {
  var sw_min=999999;
  var sh_min=999999;
  if (document.documentElement && document.documentElement.clientWidth) {
    if (document.documentElement.clientWidth>0) sw_min=document.documentElement.clientWidth;
    if (document.documentElement.clientHeight>0) sh_min=document.documentElement.clientHeight;
  }
  if (typeof(self.innerWidth)=='number' && self.innerWidth) {
    if (self.innerWidth>0 && self.innerWidth<sw_min) sw_min=self.innerWidth;
    if (self.innerHeight>0 && self.innerHeight<sh_min) sh_min=self.innerHeight;
  }
  if (document.body.clientWidth) {
    if (document.body.clientWidth>0 && document.body.clientWidth<sw_min) sw_min=document.body.clientWidth;
    if (document.body.clientHeight>0 && document.body.clientHeight<sh_min) sh_min=document.body.clientHeight;
  }
  if (sw_min==999999 || sh_min==999999) {
    sw_min=800;
    sh_min=600;
  }
  swide=sw_min;
  shigh=sh_min;
}

function createDiv(height, width) {
  var div=document.createElement("div");
  div.style.position="absolute";
  div.style.height=height+"px";
  div.style.width=width+"px";
  div.style.overflow="hidden";
  return (div);
}

function newColour() {
  var c=new Array();
  c[0]=255;
  c[1]=Math.floor(Math.random()*256);
  c[2]=Math.floor(Math.random()*(256-c[1]/2));
  c.sort(function(){return (0.5 - Math.random());});
  return ("rgb("+c[0]+", "+c[1]+", "+c[2]+")");
}
// ]]>