'use strict';

let form = document.querySelector('#formEmail');
// Thêm sự kiện submit vào form
form.addEventListener('submit', function (event) {
  // Ngăn chặn form gửi dữ liệu đi và thay đổi trang
  event.preventDefault();
  // Lấy giá trị của trường input
  let input = document.getElementById('exampleInputEmail1');
  let value = input.value;
  // In giá trị ra console
  console.log(value);
  if (value) {
    document.querySelector('#formEmail').style.display = 'none';
    document.querySelector('#infor_hidden').style.display = 'block';
  } else {
    alert('vui long nhap Email');
  }
});

//an chuc nang nghe nghiep
const viewMoreButtons = document.querySelectorAll('.view-more-btn');
const contents = document.querySelectorAll('.hidden-content');
for (let i = 0; i < viewMoreButtons.length; i++) {
  const button = viewMoreButtons[i];
  const content = contents[i];
  button.addEventListener('click', function () {
    if (content.style.display == 'none') {
      content.style.display = 'block';
      button.textContent = 'View Less';
    } else {
      content.style.display = 'none';
      button.textContent = 'View More';
    }
  });
}
