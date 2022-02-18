/*
1. selTimeout   = digunakan untuk menjalankan program setelah dalam waktu tertentu
     Example :

    function tampilkanpesan() {
    alert('hello world');
    }
    setTimeout(tampilkanpesan, 3000);
    --------------------------------
    setTimeout(function () {
    alert('hello worl!');
    }, 1000);
    --------------------------------
    const coba = setTimeout(function () {
    alert('hello world!');
    }, 5000);
    const tombol = document.getElementById('tombol');
    tombol.addEventListener('click', function () {
    clearTimeout(coba);
    alert('selesai');
    });

2. setInterval = digunakan untuk menjalankan program secara berulang-ulang dalam waktu tertentu
     Example :
    let tes = setInterval(function () {
    console.log('hello world');
    }, 2000);

    const tombol = document.getElementById('tombol');
    tombol.addEventListener('mouseenter', bg1);
    tombol.addEventListener('mouseleave', bg2);

    function bg1() {
    tombol.style.backgroundColor = 'lightgreen';
    tombol.style.color = 'white';
    }
    function bg2() {
    tombol.style.backgroundColor = 'deeppink';
    tombol.style.color = 'white';
    }
    tombol.addEventListener('click', function () {
    clearInterval(tes);
    console.log('berakhir');
    });

*/
const tujuan = new Date('feb 10, 2022 07:12:00').getTime();
const hitungM = setInterval(function () {
  const sekarang = new Date().getTime();
  const selisih = tujuan - sekarang;
  const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
  const jam = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
  const menit = Math.floor((selisih % (1000 * 60)) / (1000 * 60));
  const detik = Math.floor((selisih % (1000 * 60)) / 1000);
  const teks = document.getElementById('teks');
  teks.innerHTML = 'Time & day : ' + hari + ' hari ' + jam + ' jam ' + menit + ' menit ' + detik + ' detik again';
  if (selisih < 0) {
    clearInterval(hitungM);
    teks.innerHTML = ' waktu anda telah habis';
  }
}, 1000);
