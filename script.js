document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const splash = document.getElementById("splash-screen");
  const enterBtn = document.getElementById("enter-btn");
  const main = document.getElementById("main-content");
  const okiBtn = document.getElementById("oki-btn");
  const slideText = document.getElementById("slide-text");

  // GIF containers
  const topGif = document.getElementById("top-gif-container");
  const okiGifLeft = document.getElementById("oki-gif-left");
  const okiGifRight = document.getElementById("oki-gif-right");
  const fuegosGifLeft = document.getElementById("fuegos-gif-left");
  const fuegosGifRight = document.getElementById("fuegos-gif-right");
  

// --- Slides (like a PowerPoint) ---
const slides = [
  {
    gif: "432.gif",
    text: "hola!!\nte invito a mi cumple\nel sábado 18 de octubre a las 13.00\nen el bosque de la floresta\nal lado del cole \nhihihi"
  },
  {
    gif: "1220.gif",
    text: "como llegar:\nviaja en fgc hasta la floresta\ny camina hasta el cole\n(puedes buscar en maps escola la floresta)"
  },
  {
    gif: "293.gif",
    text: "espero que puedas asistir!!\nser mono es importante\ntrae lo q quieras\nxao!!! nos vemos"
  }
];
let slideIndex = 0;
function loadMainGIFs() {

  // Other GIFs
  okiGifLeft.innerHTML = `<img src="assets/main/aaa.gif" alt="Oki left GIF">`;
  okiGifRight.innerHTML = `<img src="assets/main/aaa.gif" alt="Oki right GIF">`;
  fuegosGifLeft.innerHTML = `<img src="assets/main/129.gif" alt="Oki left GIF">`;
  fuegosGifRight.innerHTML = `<img src="assets/main/129.gif" alt="Oki right GIF">`;
  
  topGif.innerHTML = `<img src="assets/main/4.gif" alt="Top GIF">`;
}

  function updateSlide() {
    const slide = slides[slideIndex];
    slideText.innerHTML = slide.text.replace(/\n/g, "<br>");

  }

  okiBtn.addEventListener("click", () => {
    slideIndex = (slideIndex + 1) % slides.length;
    updateSlide();
  });

  // --- Enter site ---
  enterBtn.addEventListener("click", () => {
  splash.style.display = "none";
  main.hidden = false;
  loadMainGIFs();
    updateSlide();

  // Load first slide
  slideText.innerHTML = slides[0].text.replace(/\n/g, "<br>");

  // Load first track
  loadTrack(currentTrack);
});


  // --- Music Bar ---
  const audio = document.getElementById("global-audio");
  const playBtn = document.getElementById("play-btn");
  const pauseBtn = document.getElementById("pause-btn");
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");
  const trackInfo = document.getElementById("track-info");
  const volumeSlider = document.getElementById("volume-slider");

  const tracks = [
    "assets/music/hihi.wav",
    "assets/music/holaa.mp3",
    "assets/music/chun chun.mp3",
    "assets/music/misterio.mp3",
    "assets/music/cansionsita.mp3",
    "assets/music/uuuu.mp3",
  ];
  let currentTrack = 0;

  function loadTrack(index) {
    audio.src = tracks[index];
    audio.play().catch(err => console.log("Autoplay blocked:", err));
    const fileName = tracks[index].split("/").pop().split(".")[0];
    trackInfo.innerHTML = `<span>♡escuxando ... ${fileName} ♡</span>`;
  }

  playBtn.addEventListener("click", () => audio.play());
  pauseBtn.addEventListener("click", () => audio.pause());

  nextBtn.addEventListener("click", () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
  });

  prevBtn.addEventListener("click", () => {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrack);
  });

  volumeSlider.addEventListener("input", e => {
    audio.volume = e.target.value;
  });
});



// ===== Populate splash screen side GIFs =====
function populateSideGIFs() {
  const leftContainer = document.getElementById("side-gifs-left");
  const rightContainer = document.getElementById("side-gifs-right");

  leftContainer.innerHTML = "";
  rightContainer.innerHTML = "";

  const gifSrc = "assets/enter/1.gif";
  const tempImg = new Image();
  tempImg.src = gifSrc;

  tempImg.onload = () => {
    const gifHeight = tempImg.height;
    const screenHeight = window.innerHeight;
    const repeatCount = Math.ceil(screenHeight / gifHeight) + 1;

    for (let i = 0; i < repeatCount; i++) {
      const leftGif = document.createElement("img");
      leftGif.src = gifSrc;
      leftContainer.appendChild(leftGif);

      const rightGif = document.createElement("img");
      rightGif.src = gifSrc;
      rightContainer.appendChild(rightGif);
    }
  };
}

// Initial population
populateSideGIFs();

// Re-populate on window resize
window.addEventListener("resize", populateSideGIFs);









// ----- Sparkle Cursor ----- //

var colour="random"; 
var sparkles=100;
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

colours=['#ff0000','#00ff00','#ffffff','#ff00ff','#ffa500','#ffff00','#00ff00','#ffffff','#ff00ff'];

n = 10;
y = 0;
x = 0;

// Modern sparkle creation
window.addEventListener("DOMContentLoaded", function() {
  const container = document.createElement("div");
  container.id = "con";
  container.style.position = "absolute";
  container.style.top = "0px";
  container.style.left = "0px";

  const inner = document.createElement("div");
  inner.style.position = "relative";
  container.appendChild(inner);

  for (let i = 0; i < n; i++) {
    const dot = document.createElement("div");
    dot.id = "dots" + i;
    dot.style.position = "absolute";
    dot.style.top = "0px";
    dot.style.left = "0px";
    dot.style.width = (i/2) + "px";
    dot.style.height = (i/2) + "px";
    dot.style.background = "#ff0000";
    dot.style.fontSize = (i/2) + "px";
    inner.appendChild(dot);
  }

  document.body.appendChild(container);

  // initialize sparkle particles
  for (let i=0; i<sparkles; i++) {
    let rats = createDiv(3,3);
    rats.style.visibility="hidden";
    rats.style.zIndex="999";
    document.body.appendChild(tiny[i]=rats);
    starv[i]=0; tinyv[i]=0;

    rats = createDiv(5,5);
    rats.style.backgroundColor="transparent";
    rats.style.visibility="hidden";
    rats.style.zIndex="999";
    let rlef=createDiv(1,5);
    let rdow=createDiv(5,1);
    rats.appendChild(rlef);
    rats.appendChild(rdow);
    rlef.style.top="2px"; rlef.style.left="0px";
    rdow.style.top="0px"; rdow.style.left="2px";
    document.body.appendChild(star[i]=rats);
  }

  set_width();
  sparkle();
});

// ----- Rest of sparkle functions unchanged -----
function sparkle() {
  var c;
  if (Math.abs(x-ox)>1 || Math.abs(y-oy)>1) {
    ox=x; oy=y;
    for (c=0;c<sparkles;c++) if (!starv[c]) {
      star[c].style.left=(starx[c]=x)+"px";
      star[c].style.top=(stary[c]=y+1)+"px";
      star[c].style.clip="rect(0px,5px,5px,0px)";
      star[c].childNodes[0].style.backgroundColor=star[c].childNodes[1].style.backgroundColor=(colour=="random")?newColour():colour;
      star[c].style.visibility="visible";
      starv[c]=50;
      break;
    }
  }
  for (c=0;c<sparkles;c++){
    if(starv[c]) update_star(c);
    if(tinyv[c]) update_tiny(c);
  }
  setTimeout(sparkle,40);
}

function update_star(i){
  if(--starv[i]==25) star[i].style.clip="rect(1px,4px,4px,1px)";
  if(starv[i]){
    stary[i]+=1+Math.random()*3;
    starx[i]+=(i%5-2)/5;
    if(stary[i]<shigh+sdown){
      star[i].style.top=stary[i]+"px";
      star[i].style.left=starx[i]+"px";
    } else { star[i].style.visibility="hidden"; starv[i]=0; return; }
  } else {
    tinyv[i]=50;
    tiny[i].style.top=(tinyy[i]=stary[i])+"px";
    tiny[i].style.left=(tinyx[i]=starx[i])+"px";
    tiny[i].style.width="2px";
    tiny[i].style.height="2px";
    tiny[i].style.backgroundColor=star[i].childNodes[0].style.backgroundColor;
    star[i].style.visibility="hidden";
    tiny[i].style.visibility="visible";
  }
}

function update_tiny(i){
  if(--tinyv[i]==25){ tiny[i].style.width="1px"; tiny[i].style.height="1px"; }
  if(tinyv[i]){
    tinyy[i]+=1+Math.random()*3;
    tinyx[i]+=(i%5-2)/5;
    if(tinyy[i]<shigh+sdown){
      tiny[i].style.top=tinyy[i]+"px";
      tiny[i].style.left=tinyx[i]+"px";
    } else { tiny[i].style.visibility="hidden"; tinyv[i]=0; return; }
  } else tiny[i].style.visibility="hidden";
}

document.onmousemove=mouse;
function mouse(e){ if(e){ y=e.pageY; x=e.pageX; } else { set_scroll(); y=event.y+sdown; x=event.x+sleft; } }
window.onscroll=set_scroll;
function set_scroll(){ sdown=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0; sleft=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0; }
window.onresize=set_width;
function set_width(){
  swide=document.documentElement.clientWidth||window.innerWidth||document.body.clientWidth||800;
  shigh=document.documentElement.clientHeight||window.innerHeight||document.body.clientHeight||600;
}
function createDiv(h,w){ var div=document.createElement("div"); div.style.position="absolute"; div.style.height=h+"px"; div.style.width=w+"px"; div.style.overflow="hidden"; return div;}
function newColour(){ var c=[255,Math.floor(Math.random()*256),Math.floor(Math.random()*(256-128))]; c.sort(()=>0.5-Math.random()); return `rgb(${c[0]},${c[1]},${c[2]})`; }