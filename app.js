// DISPLAY TIME

function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  };
  
function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    startTime()
  }, 1000);
};


// RANDOMIZE PICTURES

function randomMeme() {

  let fileNames = [
    "meme (1).jpg",
    "meme (2).jpg",
    "meme (3).jpg",
    "meme (4).jpg",
    "meme (5).jpg",
    "meme (6).jpg",
    "meme (7).jpg",
  ];

  let randomIndex = Math.floor(Math.random() * fileNames.length);

  document.getElementById("meme").style.backgroundImage = "url(\"./img/" + fileNames[randomIndex] + "\")";
  setInterval(function() {
    randomMeme();
  }, 10000);
};


function switchTime() {

let time = document.getElementById("time");
let meme = document.getElementById("meme");
  
time.addEventListener("click", () => {
  time.style.opacity = 0;
  time.style.fontSize = "280px";
  time.style.zIndex = 0;
  meme.style.opacity = 1;
  meme.style.height = "102%";
  meme.style.zIndex = 1;
});
meme.addEventListener("click", () => {
  time.style.opacity = 0.2;
  time.style.fontSize = "300px";
  time.style.zIndex = 1;
  meme.style.opacity = 0;
  meme.style.height = "100%";
  meme.style.zIndex = 0;
});
};

// RANDOM REACTIONS


function randomReactions(react) {

  let happy = document.getElementById("happy");
  let angry = document.getElementById("angry");
  let sad = document.getElementById("sad");
  let hmmm = document.getElementById("hmmm");
  let wtf = document.getElementById("wtf");
  let misc = document.getElementById("misc");
  
  let bgColor = document.getElementsByTagName("body")[0];
  happy.addEventListener("mouseenter", () => {bgColor.style.background = "#EDAE49"});
  angry.addEventListener("mouseenter", () => {bgColor.style.background = "#D1495B"});
  sad.addEventListener("mouseenter", () => {bgColor.style.background = "#00798C"});
  hmmm.addEventListener("mouseenter", () => {bgColor.style.background = "#30638E"});
  wtf.addEventListener("mouseenter", () => {bgColor.style.background = "#B7AD99"});
  misc.addEventListener("mouseenter", () => {bgColor.style.background = "#404040"});
  

  let fileNamesReactions = [
    `${react} (1).jpg`,
    `${react} (2).jpg`,
    `${react} (3).jpg`,
    `${react} (4).jpg`,
    `${react} (5).jpg`,
    `${react} (6).jpg`,
    `${react} (7).jpg`,
    `${react} (8).jpg`,
    `${react} (9).jpg`,
  ];

  let hoveredReact = document.getElementById(`${react}`);

  hoveredReact.addEventListener("mouseenter", (event) => {  
    let randomIndexReaction = Math.floor(Math.random() * fileNamesReactions.length);
    event.target.style.backgroundImage = `url(\"./img/reactions/${react}/` + fileNamesReactions[randomIndexReaction] + "\")";
  }, false);
  hoveredReact.addEventListener("mouseout", function( event ) {  
    event.target.style.background = "none";
  }, false);
    
  
  console.log(`${react}`)
};


startTime();

switchTime();

randomMeme()

randomReactions("happy");
randomReactions("sad");
randomReactions("angry");
randomReactions("hmmm");
randomReactions("wtf");
randomReactions("misc");





