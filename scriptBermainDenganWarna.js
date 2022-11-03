// tangkap triggernya / pemicunya / tombolnya
// tangkap element yang dituju / objecnya
// buat functionnya / listenernya (event handler / addEventListener) dnegan menyemeatkannya pada triggernya
// gunakan eventnya

//___________________Membuat turn on dan off bacground menjadi warna light blue____________________________________
const tUbahWarna = document.getElementById("tUbahWarna");
tUbahWarna.onclick = function () {
    // document.body.setAttribute('class', 'bg-grey');
    document.body.classList.toggle('bg-lightBlue')
};

// function warnaHijau() {
//     document.body.style.backgroundColor = "green";
// }

//nb : bg-grey ada di index.html
//__________________________________________________________________________________________________




//_______________________________________Membuat Button dengan JS___________________________________

const btnAcakWarna = document.createElement('button')
const textBtnAcakWarna = document.createTextNode('Acak Warna JS')
btnAcakWarna.appendChild(textBtnAcakWarna)
// const btnUbahWarna = document.getElementById('tUbahWarna')
const btnUbahWarna = document.getElementById('tUbahWarna')
btnUbahWarna.after(btnAcakWarna)
//__________________________________________________________________________________________________




//________________________________________Membuat warna acak________________________________________
const tAcakWarna = document.querySelector('section#c button#tAcakWarna')
tAcakWarna.addEventListener('click', function() {
    // ada 3 pembulatan, round, floor (pembulaan kebawah) dan ceil (langit2, pembulatan keatas)
    const r = Math.round(Math.random() * 255 + 1)
    const g = Math.round(Math.random() * 255 + 1)
    const b = Math.round(Math.random() * 255 + 1)
    // console.log(r);
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +' , '+ b +')'
    // document.body.classList.toggle('bg-lightBlue')
})
//__________________________________________________________________________________________________




//____________________________________Mengubah warna dengan range___________________________________
const range = document.querySelector('section#c input[name=sMerah]')

// range.addEventListener('change', function(){
//     // console.log(range.value);
//     const r = range.value
//     document.body.style.backgroundColor = 'rgb('+ r +', 100, 100)'
// })

// jika mau secara auto berubah saat dislider bisa menggunakan input, bukan change
range.addEventListener('input', function(){
    const r = range.value
    document.body.style.backgroundColor = 'rgb('+ r +', 100, 100)'
})
//__________________________________________________________________________________________________


