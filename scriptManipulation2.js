// Manipulasi Node

//_________________________________________createElement_____________________________________________

// Buat elementnya
const pBaru = document.createElement('p')
// buat isi elementnya
const textPBaru = document.createTextNode('paragraf baru')
pBaru.appendChild(textPBaru)

//_________________________________________AppendChild______________________________________________
// appendchild akan menyimpan diakhir parent yang diseleksi
// tempat untuk meletakannya
const sectionA = document.getElementById('a')
a.appendChild(pBaru)



//_________________________________________InsertBefore_____________________________________________
const liBaru = document.createElement('li')
const textLiBaru = document.createTextNode('li baru')
liBaru.appendChild(textLiBaru)

const ul = document.querySelector('section#b ul')
const li2 = document.querySelector('section#b ul li:nth-child(2)')

ul.insertBefore(liBaru, li2)