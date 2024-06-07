let urunler = JSON.parse(localStorage.getItem('urunler')) || [];
let sepetUrunler = JSON.parse(localStorage.getItem('sepetUrunler')) || [];

window.onload = function () {
    urunTablosunuGuncelle();
};

function urunTablosunuGuncelle() {
    const urunListesiElement = document.getElementById('urunListe');
    urunListesiElement.innerHTML = ''; // Tabloyu temizle

    // Her bir ürün için tabloya yeni bir satır ekle
    urunler.forEach((urun, index) => {
        const row = document.createElement('div');
        row.classList.add('col-lg-4');
        row.innerHTML = `
        <div class="col-lg-4">
        <div class="card" style="width: 18rem;">
            <img src="${urun.resim}"
                class="card-img-top" alt="product 1">
            <div class="card-body">
                <h5 class="card-title">${urun.adi}</h5>
                <p class="card-text">${urun.aciklama}</p>
                <button onclick="sepeteEkle(${index})" class="btn btn-primary">Sepete Ekle</button>
            </div>
        </div>
    </div>
            `;
        urunListesiElement.appendChild(row);
    });
}


function sepeteEkle(index){

    const sepetEkle = {
        adi: urunler[index].adi,
        aciklama: urunler[index].aciklama,
        fiyat: urunler[index].fiyat,
        resim: urunler[index].resim,
        adet : 1
    };
    const kontrol = sepetUrunler.find(urun => urun.adi === sepetEkle.adi);
    if(!kontrol) {
        sepetUrunler.push(sepetEkle);

        localStorage.setItem('sepetUrunler', JSON.stringify(sepetUrunler));
    
    } else {
        alert("ürün zaten sepette mevcut");
    }


   
}