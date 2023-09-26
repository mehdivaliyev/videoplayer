const videoPlayer = document.querySelector(".video-player");
const video = document.querySelector(".video");
const controls = document.querySelector(".controls");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");
const toggleBtn = document.querySelector(".controls__button");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
function playVideo () {
  var imageElement = document.createElement("img");
  if (video.paused) {
    video.play();
    toggleBtn.innerHTML = "";
    imageElement.src = "./icons/pause-solid.svg";
    imageElement.style.width = "20px";
    imageElement.style.height = "15px";
    toggleBtn.appendChild(imageElement);
  } else {
    video.pause();
    toggleBtn.innerHTML = "►";
  }
}


toggleBtn.addEventListener("click", playVideo );

function updateProgressbar() {
  const currentTime = video.currentTime;
  const percent = (currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
progressFilled.style.flex = 'initial'
progressFilled.style.flexBasis = 'auto' 
}

updateProgressbar()
video.addEventListener("timeupdate", updateProgressbar);


prevBtn.addEventListener('click', ()=>{

video.currentTime -= 10
updateProgressbar()

})

nextBtn.addEventListener('click', () => {
  video.currentTime += 10
  updateProgressbar()
})

video.addEventListener('ended',playVideo)



let isMousedown = false; 
function scrub(e) {
  if (!isMousedown) return; 
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;

  video.currentTime = scrubTime;
}

progress.addEventListener("mousedown", () => {
  isMousedown = true;
});

progress.addEventListener("mousemove", scrub);

progress.addEventListener("mouseup", () => {
  isMousedown = false;
});

progress.addEventListener("mouseout", () => {
  isMousedown = false;
});

progress.addEventListener("mousedown", (e) => {
  e.preventDefault();
});
