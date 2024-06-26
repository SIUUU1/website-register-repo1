//메인 메뉴에 마우스 올려놓을 때 메뉴 펼치기
//메인 메뉴에 마우스 다른 곳에 둘 때 메뉴 접기
function displayMenu(state) {
  const mainMenuContent = document.querySelector("#mainMenuContent");
  switch(state){
    case "mouseover": 
      mainMenuContent.style.display = `flex`;
      break;
      case "mouseout": 
      mainMenuContent.style.display = `none`;
        break;
    default: break;
  }
}
//로그인 메뉴 클릭하면 article2에 로그인 창 띄우기
function openSignInPage(e){
  e.preventDefault();
  document.getElementById("mainBottom").src = "../sign-in/sign-in.html";
}
//회원가입 메뉴 클릭하면 article2에 로그인 창 띄우기
function openRegisterPage(e) {
  e.preventDefault();
  document.getElementById("mainBottom").src = "../register/register.html";
}
function openBoardPage(e){
  e.preventDefault();
  document.getElementById("mainBottom").src = "../board/board.html";
}