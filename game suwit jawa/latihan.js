let tanya = true;
while (tanya) {
  let p = prompt('pilih : gajah , semut , orang ');
  let comp = Math.random();
  if (comp < 0.34) {
    comp = 'gajah';
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = 'orang';
  } else {
    comp = 'semut';
  }
  let hasil = '';
  if (p == comp) {
    hasil = 'SERI!!!';
  } else if (p == 'gajah') {
    hasil = comp == 'orang' ? 'ANDA MENANG!' : ' ANDA KALAH!';
  } else if (p == 'orang') {
    hasil = (comp = 'gajah') ? 'ANDA KALAH!' : 'ANDA KALAH!';
  } else if (p == 'semut') {
    hasil = comp == ' orang' ? 'ANDA KALAH!' : 'ANDA MENANG!';
  } else {
    hasil = 'anda memasukkan pilihan yang salah XXXXXXXXXXX';
  }
  alert('Anda Pilih : ' + p + '\n' + ' Dan komputer memilih : ' + comp + '\n Dan Hasilnya Adalah : ' + hasil);
  tanya = confirm('Anda Ingin Mencoba Lagi??');
}
alert('Terima Kasih Telah Bermain ' + '\n' + 'Jangan Lupa Bahagia');
