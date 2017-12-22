function random255() {
  return Math.floor(Math.random() * 256);
}


function randomColor() {
  return `rgb(${random255()},${random255()},${random255()})`;
}

let stage;
let problem;
let correctAnswer;
function nextStage() {
  //다음 단계에 대한 상태로 전환
  stage++;
  problem = [randomColor(), randomColor(), randomColor()];
}

function draw() {
  //화면그리기
  document.querySelectorAll('.box').forEach((el, index) => {
    el.style.backgroundColor = problem[index];
  });
  document.querySelector('.rgb-text').textContent = problem[correctAnswer];
}
//초기화
function init() {
  stage = 0;
  problem = [randomColor(), randomColor(), randomColor()];
  correctAnswer = Math.floor(Math.random() * 3); //0 1 2
}


init();

document.querySelectorAll('.box').forEach((el, index) => {
  el.addEventListener('click', e => {
    el.classList.add('show');
    if (index === correctAnswer) {
        document.querySelector('.correct').classList.add('show');
          // nextStage();
          // draw();

    }else{
      document.querySelector('.wrong').classList.add('show');
      // init();
      // draw();
    }
  });
});
document.querySelector('.correct .btn-modal').addEventListener('click', e => {
  nextStage();
  draw();
  document.querySelector('.score').textContent = `${stage}`;
  document.querySelector('.correct').classList.remove('show');
  document.querySelectorAll('.box').forEach(el => {
    el.classList.remove('show');
  });
});

document.querySelector('.wrong .btn-modal').addEventListener('click', e => {
  nextStage();
  draw();
  document.querySelector('.score').textContent = 0;
  document.querySelector('.wrong').classList.remove('show');
  document.querySelectorAll('.box').forEach(el => {
    el.classList.remove('show');
  });
});

init();
draw();

//상태를 저장할 저장소 먼저 만들고
//어떻게 보여질것인지 생각


