var i = 0;
var tulisan = "Selamat Hari Raya Iedul Fitri";
var kecepatan = 100;

function tulis() {
    if (i < tulisan.length) {
        // document.getElementById("lokasiTulisan").innerHTML += tulisan.charAt(i);
        // i++;

        // setTimeout(tulis, kecepatan);
        const lokasiTulisan = document.getElementById("lokasiTulisan")
        lokasiTulisan.style.color = 'green'
        lokasiTulisan.innerHTML += tulisan.charAt(i)
        i++

        setTimeout(tulis, kecepatan)
    }
}
