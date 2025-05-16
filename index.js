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
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
const formSelects = document.querySelectorAll('.form-select');
const formControls = document.querySelectorAll('.form-control');

if (isDarkMode) {
  body.classList.add('dark-mode');
  formSelects.forEach(select => select.classList.add('dark-mode'));
  formControls.forEach(control => control.classList.add('dark-mode'));
}

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  formSelects.forEach(select => select.classList.toggle('dark-mode'));
  formControls.forEach(control => control.classList.toggle('dark-mode'));
  const isDarkModeEnabled = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkModeEnabled ? 'enabled' : 'disabled');
});

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