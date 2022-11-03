// cara mendengarkan event ada 2, event handler dan addeventlistener
// 1. Event Handler
// 1.1. inline HTML Attribute   on<event>
// 1.2. Element method
// 2. AddEventListener


//jika menggunakan css bisa seperti ini
// p3:active { background-color = 'light-blue' }
// tetapi jika seperti ini ketika mouse tidak mengarah ke paragraft tersebut maka warnanya akan beruah

// 1. tangkap elementnya
const p3 = document.querySelector('.p3')
// p3.style.backgroundColor = 'lightblue'

//______________________________________inline HTML Attriute______________________________________
// jika seperti ini maka cara memanggilnya menggunakan onClick="ubahWarna()"
function ubahWarna(){
    p3.style.backgroundColor = 'lightblue'
}

//_________________________________________Element Method_________________________________________
function ubahWarnaHijau(){
    p2.style.backgroundColor = '#5CB85C'
    p2.style.color = '#fff'
}

const p2 = document.getElementsByClassName('p2')[0]
p2.onclick = ubahWarnaHijau


//________________________________________AddEventListener_________________________________________
// Menambahkan li baru didalam ul

const p4 = document.querySelector('section#b p')
p4.addEventListener('click', function(){
    const ul = document.querySelector('section#b ul')

    // manipulasi node
    const liBaru = document.createElement('li')
    const teksLiBaru = document.createTextNode('item baru')
    liBaru.appendChild(teksLiBaru)
    ul.appendChild(liBaru)
})



// Perbedaannya EventHandler adalah cara lama, 
// perbedaanya ketika kita memberikan lebih dari satu perubahan, maka perubahan terakhir akan menimpa perubahan sebelumnya
// sedangkan addEventListener dia akan menambah perubahannya

//_________________________________Jika menggunakan Event handler__________________________________
// contoh kita akan mengubah p3
const p3Coba = document.getElementsByClassName('p3')[0]
p3Coba.onclick = function() {
    p3.style.backgroundColor = '#5CB85C'
}

// maka yang akan dibaca hanya yang ini, yang atas ditimpanyas
p3Coba.onclick = function() {
    p3.style.color = 'red'
}

//________________________________Jika menggunakan AddEventListener_________________________________
const p2Baru = document.getElementsByClassName('p2')[0]
p2Baru.addEventListener('click', function(){
    p2Baru.style.backgroundColor = '#5CB85C'
})

p2Baru.addEventListener('click', function(){
    p2Baru.style.color = 'red'
})

p2Baru.addEventListener('mouseenter', function(){
    p2Baru.style.backgroundColor = '#337AB7'
    p2Baru.style.color = '#fff'
})

p2Baru.addEventListener('mouseleave', function(){
    p2Baru.style.backgroundColor = '#fff'
    p2Baru.style.color = '#000'
})


