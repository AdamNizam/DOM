// event heandler
// const tes = document.querySelector('.p1');
// const paragraf = document.getElementsByTagName('p')[0];
// function ubahwarnap1() {
//   paragraf.style.backgroundColor = 'deeppink';
// }
// paragraf.onclick = ubahwarnap1;

// const paragraf2 = document.getElementsByTagName('p')[1];
// function ubahwarnap2() {
//   paragraf2.style.backgroundColor = 'lightgreen';
// }
// paragraf2.onclick = ubahwarnap2;

// const paragraf3 = document.getElementsByTagName('p')[2];
// function ubahwarnap3() {
//   paragraf3.style.backgroundColor = 'blueviolet';
// }
// paragraf3.onclick = ubahwarnap3;

//------addEventListener
const itemNew = document.getElementById('item');
// itemNew.addEventListener('click', function () {
//   itemNew.style.backgroundColor = 'lightgreen';
//   const ul = document.querySelector('section#b ul');
//   const li = document.createElement('li');
//   const teksNew = document.createTextNode('item baru');
//   li.appendChild(teksNew);
//   ul.appendChild(li);
//   itemNew.onclick = function ubahBg() {
//     itemNew.style.backgroundColor = 'blueviolet';
//     itemNew.style.color = 'white';
//     itemNew.style.borderTopLeftRadius = '25px';
//     itemNew.style.borderBottomRightRadius = '25px';
//   };
// });

//  -----dblclick--------
// itemNew.addEventListener('dblclick', function () {
//   itemNew.style.backgroundColor = 'blueviolet';
//   itemNew.style.color = 'white';
// });

// ---mouse---
itemNew.addEventListener('mouseenter', function () {
  itemNew.style.backgroundColor = 'blueviolet';
  itemNew.style.color = 'white';
});
itemNew.addEventListener('mouseleave', function () {
  itemNew.style.borderTopLeftRadius = '20px';
  itemNew.style.borderBottomRightRadius = '20px';
  itemNew.style.backgroundColor = '#eee';
  itemNew.style.color = 'red';
});
