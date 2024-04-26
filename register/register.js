//아이디 입력할 때마다 점검
function userIdCheck() {
  const userId = document.querySelector("#userId");
  const userIdInfo = document.querySelector("#userIdInfo");
  const regExpId = /^[a-z0-9]{5,20}$/g;
  if (userId.value === "") {
    userIdInfo.innerHTML = `필수입력항목`;
    return false;
  } else if (!userId.value.match(regExpId)) {
    userIdInfo.innerHTML = `영문자, 숫자만 포함하여 최소 5자이상 입력하세요.`;
    return false;
  } else {
    userIdInfo.style.color =`green`;
    userIdInfo.innerHTML = `ok`;
    return true;
  }
}
//비밀번호 입력할 때마다 점검
//비밀번호 확인 입력할 때마다 점검
function userPwCheck(state) {
  const userPw = document.querySelector("#userPw");
  const userPwConfirm = document.querySelector("#userPwConfirm");
  const userPwInfo = document.querySelector("#userPwInfo");
  const userPwConfirmInfo = document.querySelector("#userPwConfirmInfo");
  const regExpPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;

  switch(state){
    case "keyup":
      if (userPw.value === "") {
        userPwInfo.innerHTML = `필수입력항목`;
        return false;
      } else if (!userPw.value.match(regExpPassword)) {
        userPwInfo.innerHTML = `영문자, 숫자, 특수문자를 포함하여 8-16자를 입력하세요.`;
        return false;
      } else {
        userPwInfo.style.color = `green`;
        userPwInfo.innerHTML = `ok`;
        return true;
      }
    case "blur":
      if (userPw.value === userPwConfirm.value) {
        userPwConfirmInfo.style.color = `green`;
        userPwConfirmInfo.innerHTML = `ok`;
        return true;
      } else {
        userPwConfirmInfo.innerHTML = `비밀번호와 일치하지 않습니다.`;
        return false;
      }
    default:break;
  }
}
//이름 입력할 때마다 점검
function userNameCheck() {
  const userName = document.querySelector("#userName");
  const userNameInfo = document.querySelector("#userNameInfo");
  const regExpName = /^[가-힣]{2,6}$/;
  if (userName.value === "") {
    userNameInfo.innerHTML = `필수입력항목`;
    return false;
  } else if (!userName.value.match(regExpName)) {
    userNameInfo.innerHTML = `한글로 최소 2자 이상 입력하세요.`;
    return false;
  } else {
    userNameInfo.style.color = `green`;
    userNameInfo.innerHTML = `ok`;
    return true;
  }
}
//닉네임 입력할 때마다 점검
function userNickNameCheck() {
  const userNickName = document.querySelector("#userNickName");
  const userNickNameInfo = document.querySelector("#userNickNameInfo");
  const regExpNickName = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,10}$/;
  if (userNickName.value === "") {
    userNickNameInfo.innerHTML = `필수입력항목`;
    return false;
  } else if (!userNickName.value.match(regExpNickName)) {
    userNickNameInfo.innerHTML = `한글, 영문, 숫자만 포함하여 최소 2자 이상 입력하세요.`;
    return false;
  } else {
    userNickNameInfo.style.color = `green`;
    userNickNameInfo.innerHTML = `ok`;
    return true;
  }
}
//이메일 입력할 때마다 점검
function userEmailCheck() {
  const userEmail = document.querySelector("#userEmail");
  const userEmailInfo = document.querySelector("#userEmailInfo");
  const regExpEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  if (userEmail.value === "") {
    userEmailInfo.innerHTML = `필수입력항목`;
    return false;
  } else if (!userEmail.value.match(regExpEmail)) {
    userEmailInfo.innerHTML = `올바른 이메일형식이 아닙니다.`;
    return false;
  } else {
     userEmailInfo.style.color = `green`;
    userEmailInfo.innerHTML = `ok`;
    return true;
  }
}
//전화번호 입력할 때마다 점검
function userTelCheck() {
  const userTel = document.querySelector("#userTel");
  const userTelInfo = document.querySelector("#userTelInfo");
  const regExpTel = /^(0[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
  if (userTel.value === "") {
    userTelInfo.innerHTML = `필수입력항목`;
    return false;
  } else if (!userTel.value.match(regExpTel)) {
    userTelInfo.innerHTML = `00-000-0000 형식으로 입력하세요.`;
    return false;
  } else {
    userTelInfo.style.color = `green`;
    userTelInfo.innerHTML = `ok`;
    return true;
  }
}
//휴대폰번호 입력할 때마다 점검
function userPhoneNumCheck() {
  const userPhoneNum = document.querySelector("#userPhoneNum");
  const userPhoneNumInfo = document.querySelector("#userPhoneNumInfo");
  const regExpPhoneNum = /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
  if (userPhoneNum.value === "") {
    userPhoneNumInfo.innerHTML = `필수입력항목`;
    return false;
  } else if (!userPhoneNum.value.match(regExpPhoneNum)) {
    userPhoneNumInfo.innerHTML = `010-0000-0000 형식으로 입력하세요.`;
    return false;
  } else {
    userPhoneNumInfo.style.color = `green`;
    userPhoneNumInfo.innerHTML = `ok`;
    return true;
  }
}
//코드생성 버튼 클릭시 자동등록방지문자 생성하기
function codeCreate() {
  const autoRegiCode = document.querySelector("#autoRegiCode");
  const regType = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; 
  const regTypeLength = regType.length;
  let result = "";
  for(let i=0;i<8;i++){
    result += regType.charAt(parseInt(Math.random() * (regTypeLength - 1 - 0 + 1) + 0));
  }
  autoRegiCode.innerHTML = `${result}`;
}
//비교 버튼 클릭시 자동등록방지 확인하기
function codeConfirm() {
  const autoRegiCode = document.querySelector("#autoRegiCode");
  const autoRegiPrevention = document.querySelector("#autoRegiPrevention");
  const autoRegiPreventionInfo = document.querySelector("#autoRegiPreventionInfo");
  if (autoRegiPrevention.value === "") {
    autoRegiPreventionInfo.innerHTML = `필수입력항목`;
    return false;
  } else {
    if (autoRegiCode.innerHTML === autoRegiPrevention.value) {
      autoRegiPreventionInfo.style.color = `green`;
      autoRegiPreventionInfo.innerHTML = `ok`;
      return true;
    } else {
      autoRegiPreventionInfo.innerHTML = `자동등록방지 문자와 숫자를 순서대로 입력해 주세요.`;
      return false;
    }
  }
}
 //모든 내용을 점검하여 이상이 없으면 서버로 전송한다.
 //이상이 있으면 경고창과 전송버튼의 이벤트 기능을 막는다.(전송: 서버로 전송하는 기능)
function allCheck(event) {
  const userName = document.querySelector("#userName");
  const userNickName = document.querySelector("#userNickName");
  const userId = document.querySelector("#userId");
  const userEmail = document.querySelector("#userEmail");
  const userTel = document.querySelector("#userTel");
  const userPhoneNum = document.querySelector("#userPhoneNum");
  const userBirthday = document.querySelector("#userBirthday");
  if (
    userIdCheck() &&
    userPwCheck("keyup") &&
    userPwCheck("blur") &&
    userNameCheck() &&
    userNickNameCheck() &&
    userEmailCheck() &&
    userTelCheck() &&
    userPhoneNumCheck() &&
    codeConfirm()
  ) {
    alert(`
    이름 : ${userName.value}
    닉네임 : ${userNickName.value}
    아이디 : ${userId.value}
    E-mail : ${userEmail.value}
    전화번호 : ${userTel.value}
    휴대폰번호 : ${userPhoneNum.value}
    생년월일 : ${userBirthday.value} \n\n
    가입내용을 성공적으로 입력하셨습니다.
    `);
    return true;
  } else {
    alert("가입내용을 잘못 입력하셨습니다.");
    event.preventDefault();
  }
}

