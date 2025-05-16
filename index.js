// 현재 날짜와 시간 표시
function updateDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hour = String(now.getHours()).padStart(2, '0');
  const minute = String(now.getMinutes()).padStart(2, '0');
  const second = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('currentDateTime').textContent = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}
setInterval(updateDateTime, 1000); // 1초마다 업데이트

// 다크 모드 기능
    const darkModeSwitch = document.getElementById('darkModeSwitch');
    const body = document.body;
    const moonIcon = document.querySelector('.bi-moon-stars-fill');
    const sunIcon = document.querySelector('.bi-sun-fill');

    darkModeSwitch.addEventListener('change', () => {
      const newTheme = darkModeSwitch.checked ? 'dark' : 'light';
      body.setAttribute('data-bs-theme', newTheme);

      // 아이콘 표시/숨김
      moonIcon.style.display = newTheme === 'light' ? 'inline-block' : 'none';
      sunIcon.style.display = newTheme === 'dark' ? 'inline-block' : 'none';

      // (선택 사항) 로컬 스토리지에 테마 저장
      localStorage.setItem('theme', newTheme);
    });

    // (선택 사항) 로컬 스토리지에서 테마 불러와 초기 적용
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      body.setAttribute('data-bs-theme', storedTheme);
      darkModeSwitch.checked = storedTheme === 'dark';
      moonIcon.style.display = storedTheme === 'light' ? 'inline-block' : 'none';
      sunIcon.style.display = storedTheme === 'dark' ? 'inline-block' : 'none';
    } else {
      moonIcon.style.display = 'inline-block'; // 기본적으로 달 아이콘 표시
      sunIcon.style.display = 'none';
    }
// 로그아웃 기능
function logout() {
  alert("로그아웃 되었습니다.");
  // 실제 로그아웃 로직 (예: 세션 삭제, 쿠키 삭제, 페이지 이동 등)은 여기에 구현해야 합니다.
  window.location.href = 'index.html'; // 예시: 로그인 페이지로 이동
}

// 제품 데이터
const product_data = [
  { category: "상의", brand: 'Supreme', product: '슈프림 박스로고 후드티', price: '390,000' },
  { category: "하의", brand: 'DIESEL', product: '디젤 트랙 팬츠', price: '188,000' },
  { category: "신발", brand: 'Nike', product: '에어포스 1', price: '137,000' },
  { category: "패션잡화", brand: 'Music&Goods', product: '빵빵이 키링', price: '29,000' },
];

// 제품 테이블에 데이터 추가
const product_data_Table = document.getElementById('product_data_Table');

// 초기 데이터 로딩
product_data.forEach((item) => {
  const row = product_data_Table.insertRow();
  row.insertCell(0).innerHTML = item.category;
  row.insertCell(1).innerHTML = item.brand;
  row.insertCell(2).innerHTML = item.product;
  row.insertCell(3).innerHTML = item.price;
});


