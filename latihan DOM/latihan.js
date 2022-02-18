const judul = document.getElementById('judul');
judul.style.color = 'blueViolet';
judul.style.backgroundColor = '#eee';
judul.style.textAlign = 'center';
judul.style.fontFamily = "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
judul.setAttribute('name', 'Adamnizam');
judul.innerHTML = 'Saya Sedang Belajar JavaScripct Document Object Model';
const section = document.querySelector('#satu');
section.style.backgroundColor = '#eee';
section.style.fontFamily = " Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
const paragraf = document.querySelectorAll('p#paragraf');
for (i = 0; i < paragraf.length; i++) {
  paragraf[i].style.backgroundColor = 'lightblue';
  paragraf[i].style.boxShadow = '5px 5px 5px black';
}
