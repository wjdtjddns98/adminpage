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
  { category: "상의", brand: 'Supreme', product: '슈프림 박스로고 후드티', price: '390,000' },
  { category: "하의", brand: 'DIESEL', product: '디젤 트랙 팬츠', price: '188,000' },
  { category: "신발", brand: 'Nike', product: '에어포스 1', price: '137,000' },
  { category: "패션잡화", brand: 'Music&Goods', product: '빵빵이 키링', price: '29,000' },
  { category: "상의", brand: 'Supreme', product: '슈프림 박스로고 후드티', price: '390,000' },
  { category: "하의", brand: 'DIESEL', product: '디젤 트랙 팬츠', price: '188,000' },
  { category: "신발", brand: 'Nike', product: '에어포스 1', price: '137,000' },
  { category: "패션잡화", brand: 'Music&Goods', product: '빵빵이 키링', price: '29,000' },
  { category: "상의", brand: 'Supreme', product: '슈프림 박스로고 후드티', price: '390,000' },
  { category: "하의", brand: 'DIESEL', product: '디젤 트랙 팬츠', price: '188,000' },
  { category: "신발", brand: 'Nike', product: '에어포스 1', price: '137,000' },
  { category: "패션잡화", brand: 'Music&Goods', product: '빵빵이 키링', price: '29,000' },
  { category: "상의", brand: 'Supreme', product: '슈프림 박스로고 후드티', price: '390,000' },
  { category: "하의", brand: 'DIESEL', product: '디젤 트랙 팬츠', price: '188,000' },
  { category: "신발", brand: 'Nike', product: '에어포스 1', price: '137,000' },
  { category: "패션잡화", brand: 'Music&Goods', product: '빵빵이 키링', price: '29,000' },

];

// 제품 테이블에 데이터 추가
const product_data_Table = document.getElementById('product_data_Table');
const paginationElement = document.getElementById('pagination');
const itemsPerPage = 5; // 한 페이지에 표시할 아이템 수
let currentPage = 1;

function displayProducts(data, page) {
  product_data_Table.innerHTML = ''; // 테이블 내용 초기화
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  paginatedData.forEach((item) => {
    const row = product_data_Table.insertRow();
    row.insertCell(0).innerHTML = item.category;
    row.insertCell(1).innerHTML = item.brand;
    row.insertCell(2).innerHTML = item.product;
    row.insertCell(3).innerHTML = item.price;
  });
}

// 페이지네이션 렌더링 함수 수정
function renderPagination(totalItems, itemsPerPage) {
  paginationElement.innerHTML = '';
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageItem = document.createElement('li');
    pageItem.classList.add('page-item');
    if (i === currentPage) {
      pageItem.classList.add('active');
    }
    const pageLink = document.createElement('a');
    pageLink.classList.add('page-link');
    pageLink.textContent = i;
    pageLink.href = '#';
    pageLink.addEventListener('click', (event) => {
      event.preventDefault();
      currentPage = i;
      displayProducts(product_data, currentPage);
      updateActivePage(); // 활성 페이지 업데이트
    });
    pageItem.appendChild(pageLink);
    paginationElement.appendChild(pageItem);
  }

  // 이전 버튼
  const prevItem = document.createElement('li');
  prevItem.classList.add('page-item');
  const prevLink = document.createElement('a');
  prevLink.classList.add('page-link');
  prevLink.textContent = '이전';
  prevLink.href = '#';
  prevLink.addEventListener('click', (event) => {
    event.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      displayProducts(product_data, currentPage);
      updateActivePage();
    }
  });
  prevItem.appendChild(prevLink);
  paginationElement.prepend(prevItem);

  // 다음 버튼
  const nextItem = document.createElement('li');
  nextItem.classList.add('page-item');
  const nextLink = document.createElement('a');
  nextLink.classList.add('page-link');
  nextLink.textContent = '다음';
  nextLink.href = '#';
  nextLink.addEventListener('click', (event) => {
    event.preventDefault();
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      displayProducts(product_data, currentPage);
      updateActivePage();
    }
  });
  nextItem.appendChild(nextLink);
  paginationElement.appendChild(nextItem);
}

function updateActivePage() {
  const pageLinks = paginationElement.querySelectorAll('.page-item');
  pageLinks.forEach(item => item.classList.remove('active'));
  const currentPageItem = paginationElement.querySelector(`.page-item:nth-child(${currentPage + 1})`); // 이전/다음 버튼 고려
  if (currentPageItem) {
    currentPageItem.classList.add('active');
  }
}

// 초기 데이터 로딩 및 페이지네이션 렌더링
displayProducts(product_data, currentPage);
renderPagination(product_data.length, itemsPerPage);