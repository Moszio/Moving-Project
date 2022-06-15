const myBtnLeft = document.getElementById("move-left");
const myBtnRight = document.getElementById("move-right");
const smlSq = document.getElementById("small-square");


function arrowLeft() {
  const moveLeft = smlSq.style.left.replace("px", "")
  const left = parseInt(moveLeft, 10)

  if(left > 0) {
    smlSq.style.left = `${left - 6}px`
  }
}

function arrowRight() {
  const moveRight = smlSq.style.left.replace("px", "")
  const right = parseInt(moveRight, 10)

  if(right < 360) {
    smlSq.style.left = `${right + 6}px`
  }
}

myBtnLeft.addEventListener("click", function(e){
arrowLeft();
})

myBtnRight.addEventListener("click", function(e){
arrowRight();
})


document.addEventListener("keydown", function(event){
  if(event.key === "ArrowLeft")
  arrowLeft();
  else if (event.key === "ArrowRight")
  arrowRight();
})