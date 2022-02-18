// Dom traversal
// const close = document.querySelectorAll('.close');
// const cards = document.querySelectorAll('.card');
// for (let i = 0; i < img.length; i++) {
//   img[i].addEventListener('mouseenter', function () {
//     img[i].style.border = ' 1px solid red';
//   });
// for (i = 0; i < card.length; i++) {
//   card[i].addEventListener('mouseenter', function () {
//     card[i].style.border = '1px solid black';
//   });
// }
// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener('click', function (event) {
//     // //   close[i].parentElement.style.display = 'none';
//     // console.log(event.target);
//     event.target.parentElement.style.display = 'none';
//   });
// }

// close.forEach(function (adm) {
//   adm.addEventListener('click', function (e) {
//     e.target.parentElement.style.display = 'none';
//     // untuk menghentikan aksi default
//     e.preventDefault();
//     // untuk menghentikan event bubling
//     e.stopPropagation();
//   });
// });
// cards.forEach(function (card) {
//   card.addEventListener('click', function (e) {
//     alert('ok');
//   });
// });

/*
 DOM Traversal Method
   - parentNode             = node
   - parentElement          = Elemenet
   - nextSibling            = node
   - nextElementSibling     = Elemenet
   - previousSibling        = node
   - previousElementSibling = Elemenet


*/

// const nama = document.querySelector('.nama');
// console.log(nama.nextElementSibling);

const container = document.querySelector('.container');
container.addEventListener('click', function (event) {
  // console.log(event.target);
  if (event.target.className == 'close') {
    event.target.parentElement.style.display = 'none';
    event.preventDefault();
  }
});
