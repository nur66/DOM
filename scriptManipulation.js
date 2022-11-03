// Manipulasi Element
//____________________________________InnerHTML__________________________________________________
// untuk mengubah isi dari HTML yang sudah di seleksi
const judul = document.querySelector('h1')
judul.innerHTML = '<em>Nur Iswanto</em>'

// const sectionA = document.getElementById('a')
// sectionA.innerHTML = 'Hello Nur'  // maka semuanya akan berubah menjadi hello world doang

//_______________________________________style__________________________________________________

//____________________________________setAttribute______________________________________________
// untuk menambah attribute baru bukan mengubah
const judul1 = document.getElementsByTagName('h1')[0]
judul1.setAttribute('name', 'Nur')  // maka jika diinspek element akan ada name="Nur"

const a = document.querySelector('section#a a')
a.setAttribute('id', 'link')

//___________________________________removeAttribute____________________________________________
a.removeAttribute('href')   // maka attribute a akan hilang

