//콜백함수(body onlod call back func)
function call_js(){
  //UI 객체 참조변수 선언
  let slidshow_imgs = document.querySelector(".slidshow_imgs");
  let imgsArr = document.querySelectorAll(".slidshow_imgs a");
  //회전목마의 현재위치값
  let currentIndex = 0;
  let timer = null;
  let sideCount = imgsArr.length;

  //이미지 우측으로 위치시키기
  for (let i = 0; i < sideCount; i++) {
    imgsArr[i].style.left = `${i * 100}%`;
  }

}