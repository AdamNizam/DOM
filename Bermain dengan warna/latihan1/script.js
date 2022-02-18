const ubahBg = document.getElementById('button');
const h1 = document.querySelector('h1');
ubahBg.onclick = function () {
  document.body.classList.toggle('bg');
};
const button = document.createElement('button');
const textButton = document.createTextNode('Random Background');
const buttonType = button.appendChild(textButton);
button.setAttribute('type', 'button');
button.setAttribute('id', 'buttonRandom');
ubahBg.after(button);
const idButton = document.getElementById('buttonRandom');
idButton.addEventListener('click', function () {
  const red = Math.round(Math.random() * 225 + 1);
  const green = Math.round(Math.random() * 225 + 1);
  const blue = Math.round(Math.random() * 225 + 1);
  document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
});
const Smerah = document.querySelector('input[name = siliderMerah]');
const Shijau = document.querySelector('input[name = siliderHijau]');
const Sbiru = document.querySelector('input[name = siliderBiru]');
Smerah.addEventListener('input', function () {
  const r = Smerah.value;
  const h = Shijau.value;
  const b = Sbiru.value;
  document.body.style.backgroundColor = ' rgba(' + r + ',' + h + ',' + b + ')';
});
Shijau.addEventListener('input', function () {
  const r = Smerah.value;
  const h = Shijau.value;
  const b = Sbiru.value;
  document.body.style.backgroundColor = ' rgba(' + r + ',' + h + ',' + b + ')';
});
Sbiru.addEventListener('input', function () {
  const r = Smerah.value;
  const h = Shijau.value;
  const b = Sbiru.value;
  document.body.style.backgroundColor = ' rgba(' + r + ',' + h + ',' + b + ')';
});

document.body.addEventListener('mousemove', function (event) {
  const xpost = Math.round((event.clientX / window.innerWidth) * 255);
  const ypost = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = 'rgb(' + xpost + ',' + ypost + ',100)';
});
console.log(window.innerWidth);
/* 
    ada 3 funsii pembulatan pada javascript : 
    - Math.floor() = pembulatan kebawah
    - Math.ceil() = kelanggit-langit
    - Math.round()
*/
