/*
  ---MANIPULASI ELEMENT---------
  - element.innerHTML
const judul = document.getElementById('judul');
judul.innerHTML = '<em>AdamNizam</em>';
judul.style.color = 'deeppink';
const SectionA = document.querySelector('section#a');
SectionA.innerHTML = 'hello, World!';

  - element.style.<propertyCSS>
const judul = document.querySelector('#judul');
judul.style.backgroundColor = 'blueviolet';
judul.style.color = 'white';
judul.style.textAlign = 'center';

  - element.setAttribute()
const judul = document.getElementsByTagName('h1')[0];
judul.setAttribute('name', 'AdamNizam');


 element.classList 
1. element.classList.add() = untuk menambah class
2. element.classList.remove() = untuk menghilangkan class 
3. element.classList.toggle() = untuk menambah dan menghilangkan class  pada element tertentu
4. element.classList.contains() = untuk mengecek class pada sebuah element
5. element.classList.item() = untuk mengetahui class tertentu yang ada di dalam sebuah element
6. element.classList.pelance() = untuk menganti class yang ada dengan class yang baru


*/

/*
         ----------- MANIPULASI NODE ---------------
    manipulasi Node method :
    1. document.createElement()
        Examaple :
            const paragrafNew = document.createElement('p');
    2. document.createTextNode()
        Examaple :
           const teksNew = document.createTextNode('ini adalah paragraf baru');
    3. node.appendChild()
        Examaple :
           paragrafNew.appendChild(teksNew);
           SectionA.appendChild(paragrafNew);
    4. node.insertBefore()
        Examaple :
    5. parentNode.removeChild()
        Examaple :
    6. parentNode.replaceChild()
        Examaple :
*/
// const tagNew = document.createElement('h2');
// const txtnew = document.createTextNode('Judul');
// const parentP = document.getElementById('a');
// const childP = parentP.getElementsByTagName('p')[0];
// tagNew.appendChild(txtnew);
// parentP.insertBefore(tagNew, childP);
// tagNew.style.color = 'blueviolet';
// tagNew.style.backgroundColor = '#eee';
// tagNew.style.borderRadius = '20px';
// tagNew.style.textAlign = 'center';
// buat Element baru
const paragrafNew = document.createElement('p');
// buat Element baru
const teksNew = document.createTextNode('ini adalah paragraf baru');
// buat Element baru
const SectionA = document.getElementById('a');
// simpan tulisan didalam paragraf
paragrafNew.appendChild(teksNew);
// simpan pragraf di akhir yang telah disini di area yang anda inginkan
SectionA.appendChild(paragrafNew);

// buat Element baru
const liNew = document.createElement('li');
// buat Element baru
const teksLiNew = document.createTextNode('item adalah item Baru');
// buat Element baru
const ul = document.querySelector('section#b ul');
// buat Element baru
const li2 = ul.querySelector('li:nth-child(1)');
// simpan tulisan didalam Li
liNew.appendChild(teksLiNew);
// simpan sebelum item 1
ul.insertBefore(liNew, li2);

// const buttonNew = document.createElement('button');
// const isiButton = document.createTextNode('click here');
// const tampil = document.querySelector('#a');
// buttonNew.appendChild(isiButton);
// buttonNew.style.backgroundColor = 'deeppink';
// buttonNew.style.borderRadius = '10px';
// buttonNew.style.boxShadow = '5px 5px 10px #eee';
// buttonNew.classList.add('name');
// tampil.appendChild(buttonNew);
// console.log(a);

// removeChild()
const sectionA = document.getElementById('a');
const link = document.getElementsByTagName('a')[2];
sectionA.removeChild(link);

//replaceChild
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const tagH2 = document.createElement('h2');
const txtH2 = document.createTextNode('judul item');
tagH2.appendChild(txtH2);
// menerima 2 parameter , 1 element baru dan element lama
sectionB.replaceChild(tagH2, p4);
tagH2.style.backgroundColor = 'lightgreen';
