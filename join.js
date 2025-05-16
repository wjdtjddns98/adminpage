const form = document.getElementById("form");

// 제출 이벤트를 받는다 (이벤트 핸들링)
form.addEventListener("submit", function(e) { // event handler 익명함수
  e.preventDefault(); // 새로고침(기존 기능) 차단

  // 제출된 입력 값들을 참조한다.
  let userId = form.id.value;
  let userPw1 = e.target.pw1.value;
  let userPw2 = e.target.pw2.value;
  let userName = e.target.name.value;
  let userPhone = e.target.phone.value;
  let userGender = e.target.gender.value;
  let userEmail = e.target.email.value;

  console.log(userId, userPw1, userPw2, userName,
    userPhone, userGender, userEmail);

  if (userId.length < 6) {
    alert("아이디가 너무 짧습니다. 6자 이상 입력해주세요.");
    return;
  }

  if (userPw1 !== userPw2) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  } else {
    let welcomeMessage = `
      ${userName}님 환영합니다!
      회원가입이 완료되었습니다.
      회원가입 시 입력하신 내용은 다음과 같습니다.
      > 아이디: ${userId}
      > 이름: ${userName}
      > 전화번호: ${userPhone}
    `;
    alert(welcomeMessage);
    window.location.href = 'main.html';
  }
});