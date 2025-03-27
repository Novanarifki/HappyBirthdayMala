AOS.init();

var musik = "";

var audio = document.querySelector(".audio");
if (musik) {
    audio.src = musik;
}

function mulai() {
   audio.play();
   window.scrollTo(0, 0);
   document.querySelector(".open").style = "opacity: 0;";
   document.querySelector(".body").style = "overflow-y: scroll";
   setTimeout(function() {
    document.querySelector(".open").style.display ="none";
   }, 1200);
}

function wa(isi){
    window.open("https://api.whatsapp.com/send?text=Makasih ya udah inget hari ulang tahun aku, di hari spesial ini aku ingin " + isi);
}

async function tanya() {
    var {
        value: kado
    } = await swal.fire({
        imageUrl: 'resources/foto.jpg',
        title: 'Di hari spesial ini, sayang ingin apa?',
        input: 'text',
        showCancelButton: false
    });
if (kado) {
    await swal.fire({
        imageUrl: 'resources/wa.png',
        title: 'Kirim jawabannya ke wa mas nggeh :)'
    });
    wa(kado);
} else {
    await swal.fire({
        icon: 'error',
        title: 'Jangan dikosongin sayaang :('
    });
    tanya();
}
}