// Method                       Hasil

// getElementById()             element
// getElementByTagName()        HTMLCollection
// getElementByClassName()      HTMLCollection
// querySelector()              element
// querySelectorAll()           nodeList

//____________________________________getElementById()__________________________________________
// document.getElementById()  -> Element
const judul = document.getElementById('judul')
judul.style.color = 'white';
judul.style.backgroundColor = '#337AB7';
judul.innerHTML = 'Nur Iswanto';


//____________________________________getElementByTagName()______________________________________
// document.getElementByTagName() -> HTMLCollection
// kalo dijalankan p, maka isinya seperti array ada 4,
// sehingga kita tidak bisa sisipkan style karena dia bukan element melainkan HTMLCollection(seperti array)
const p = document.getElementsByTagName('p')
// jika mau mengubah style nya maka kita harus pilih dulu
// p[0].style.backgroundColor = '#5BC0DE';
// p[1].style.backgroundColor = '#5BC0DE';
// p[2].style.backgroundColor = '#5BC0DE';
// p[3].style.backgroundColor = '#5BC0DE';

// kita bisa menggunakan looping
for( i = 0; i <= p.length; i++)
{
    // p[i].style.backgroundColor = '#D9534F'
    // p[i].style.color = 'white'

    // p[i].style.backgroundColor = '#5BC0DE'
}

// mengganti tag name dengan index 0
const h1 = document.getElementsByTagName('h1')
h1[0].style.fontSize = '50px'
// h1.style.fontSize = '50px'

//______________________________________getElementByClassName______________________________________
// document.getElementsByClassName -> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0]
p1.style.backgroundColor = '#F0AD4E'
p1.style.color = '#fff'

//__________________________________________querySelector__________________________________________
// query artinya menanyakan, selectore adalah selector css nya
// document.querySelector() -> element
const p4 = document.querySelector('#b p')
p4.style.backgroundColor = '#F0AD4E'
p4.style.color = 'white'

const li2 = document.querySelector('section#b ul li:nth-child(2)')
li2.style.backgroundColor = '#F0AD4E'
// li2.style.color = 'white'

const pAll = document.querySelector('p')
// pAll.innerHTML = 'Ini diubah melalui javascript'

// karena dia hanya mengembalikan 1 element maka yang diubah adalah yang pertama ketemu
// const liAll = document.querySelector('li')
// liAll.innerHTML = 'Ini diubah melalui javascript'

// untuk itu kita bisa menggunakan querySelectorAll()

//__________________________________________querySelectorAll_______________________________________
// querySelectorAll -> NodeList

const liAll = document.querySelectorAll('li')
liAll.innerHTML = 'Inidiubah melalui javascript li'

for(i = 0; i <= liAll.length; i++)
{
    liAll[i].style.backgroundColor = '#F0AD4E'
    liAll[i].innerHTML = 'li ini telah diubah'
}
