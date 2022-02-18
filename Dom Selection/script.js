// DOM Selection
/**
 * document.getElemenById()
 *
 */
// const judul = document.getElementById('judul');
// judul.style.color = 'blueviolet';
// judul.style.backgroundColor = '#ccc';
// judul.style.fontSize = '35px';
// judul.innerHTML = 'Hello, World!';
// const paragraf = document.getElementsByTagName('p');
// for (let i = 0; i < paragraf.length; i++) {
//   paragraf[i].style.backgroundColor = 'lightblue';
// }
const paragrafSatu = document.getElementsByClassName('p1')[0];
paragrafSatu.innerHTML = 'ini diubah menggunakan JavaScript!';
const item = document.getElementsByTagName('li');
item[0].style.backgroundColor = 'salmon';
item[1].style.backgroundColor = 'salmon';
item[2].style.backgroundColor = 'salmon';

const p5 = document.querySelector('#b p');
p5.style.color = 'orange';
const lia = document.querySelector('section ul li:nth-child(2)');
lia.style.backgroundColor = 'blueviolet';
const tes = document.querySelectorAll('p');
for (let i = 0; i < tes.length; i++) {
  tes[i].style.backgroundColor = 'lightblue';
}

// const section = document.querySelector('section#b');
// const tes = section.getElementsByTagName('p')[0];
// tes.style.backgroundColor = 'aqua';
